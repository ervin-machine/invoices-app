import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectInvoicesList, selectInvoiceById, selectIsLoading } from './store/selectors';
import { fetchInvoicesAction, createInvoiceAction, updateInvoiceAction, deleteInvoiceAction, fetchInvoicesByIdAction } from "./store/actions"
import { selectSellersList } from "../Sellers/store/selectors"
import { fetchSellersAction } from "../Sellers/store/actions"
import { selectCustomersList } from "../Customers/store/selectors"
import { fetchCustomersAction } from "../Customers/store/actions"

import AddInvoice from './Components/AddInvoice'
import VerifyDelete from '../PublicComponents/VerifyDelete'
import ListActions from '../PublicComponents/ListActions';
import InvoiceList from './Components/InvoiceList';
import ModalBackdrop from '../PublicComponents/ModalBackdrop';
import Loader from '../../Layout/Loader';
import { useParams } from 'react-router-dom';
import "./Invoices.css"

function Invoices(props) {
  const { invoices, fetchInvoicesAction, createInvoiceAction, updateInvoiceAction, deleteInvoiceAction, fetchInvoicesByIdAction, invoice, sellers, fetchSellersAction, customers, fetchCustomersAction, isLoading } = props
  const [isAddInvoiceOpened, setIsAddInvoiceOpened] = useState(false)
  const [isDeleteInvoiceOpened, setIsDeleteInvoiceOpened] = useState(false)
  const [isAddMode, setIsAddMode] = useState(false)
  const [selectedInvoices, setSelectedInvoice] = useState([])
  let { id } = useParams();
  
  const handleOpenAddInvoice = () => {
    setIsAddInvoiceOpened(!isAddInvoiceOpened)
    setIsAddMode(true)
  }

  const handleOpenDeleteInvoice = () => {
    setIsDeleteInvoiceOpened(!isDeleteInvoiceOpened)
  }

  const handleOpenEditInvoice = () => {
    setIsAddMode(false)
    setIsAddInvoiceOpened(!isAddInvoiceOpened)
  }

  const handleSelect = (invoice) => {
    const newInvoice = [...selectedInvoices, invoice]
    setSelectedInvoice(newInvoice)
  }

  const handleDeleteSelected = (id) => {
    const deleteTask = selectedInvoices.filter((task) => {
      if (task.id !== id) {
          return task;
      }
      return 0;
    })
    setSelectedInvoice(deleteTask)
  }

  useEffect(() => {
    fetchInvoicesAction();
    if(window.location.href === `http://localhost:3000/invoices/${id}`) {
      fetchInvoicesByIdAction(id)
      setTimeout(() => {
        setIsAddInvoiceOpened(true)
      }, 1000)
    }
  }, [])

  return isLoading ? <Loader /> : 
    <div>
        {isAddInvoiceOpened || isDeleteInvoiceOpened ? <ModalBackdrop /> : null}
        {isAddInvoiceOpened ? <AddInvoice 
          handleOpen={handleOpenAddInvoice} 
          handleAdd={createInvoiceAction} 
          handleEdit={updateInvoiceAction} 
          isAddMode={isAddMode}
          selected={selectedInvoices[0] || invoice}
          fetchSellersAction={fetchSellersAction}
          sellers={sellers}
          fetchCustomersAction={fetchCustomersAction}
          customers={customers}
          fetchInvoicesByIdAction={fetchInvoicesByIdAction}
        /> 
        : null}
        {isDeleteInvoiceOpened ? <VerifyDelete 
          handleOpen={handleOpenDeleteInvoice} 
          handleDelete={deleteInvoiceAction} 
          selected={selectedInvoices} 
          whatsDelete="invoice"
        /> : null }
        <div className='invoices-container'>
        <h1 className='invoices-header-text'>INVOICES</h1>
        <ListActions handleOpenAdd={handleOpenAddInvoice} path={`/invoices/${selectedInvoices[0]?.id}`} handleOpenEdit={handleOpenEditInvoice} handleOpenDelete={handleOpenDeleteInvoice} selected={selectedInvoices} editId={selectedInvoices[0]?.id} />
        <InvoiceList invoices={invoices} handleSelect={handleSelect} selectedInvoice={selectedInvoices} handleDelete={handleDeleteSelected} />
    </div>
    </div>
  
}

const mapStateToProps = createStructuredSelector({
  invoices: selectInvoicesList(),
  invoice: selectInvoiceById(),
  sellers: selectSellersList(),
  customers: selectCustomersList(),
  isLoading: selectIsLoading()
})

const mapDispatchToProps = dispatch => {
    return {
        fetchInvoicesAction: () => {
          dispatch(fetchInvoicesAction())
        },
        createInvoiceAction: (payload) => {
          dispatch(createInvoiceAction(payload))
        },
        updateInvoiceAction: (payload, id) => {
          dispatch(updateInvoiceAction(payload, id))
        },
        deleteInvoiceAction: (id) => {
          dispatch(deleteInvoiceAction(id))
        },
        fetchInvoicesByIdAction: (id) => {
          dispatch(fetchInvoicesByIdAction(id))
        },
        fetchSellersAction: () => {
          dispatch(fetchSellersAction())
        },
        fetchCustomersAction: () => {
          dispatch(fetchCustomersAction())
        }
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default(withConnect)(Invoices);