import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCustomersList, selectCustomerById, selectIsLoading } from './store/selectors';
import { fetchCustomersAction, createCustomerAction, updateCustomerAction, deleteCustomerAction, fetchCustomersByIdAction } from "./store/actions"
import { selectInvoicesList } from '../Invoices/store/selectors'
import { fetchInvoicesAction } from '../Invoices/store/actions'

import AddCustomer from './Components/AddCustomer'
import VerifyDelete from '../PublicComponents/VerifyDelete'
import ListActions from '../PublicComponents/ListActions';
import CustomerList from './Components/CustomerList';
import ModalBackdrop from '../PublicComponents/ModalBackdrop';
import Loader from '../../Layout/Loader';
import { useParams } from 'react-router-dom';
import "./Customers.css"

function Customers(props) {
  const { customers, fetchCustomersAction, createCustomerAction, updateCustomerAction, deleteCustomerAction, fetchCustomersByIdAction, customer, fetchInvoicesAction, invoices, isLoading } = props
  const [isAddCustomerOpened, setIsAddCustomerOpened] = useState(false)
  const [isDeleteCustomerOpened, setIsDeleteCustomerOpened] = useState(false)
  const [isAddMode, setIsAddMode] = useState(false)
  const [selectedCustomers, setSelectedCustomer] = useState([])
  let { id } = useParams();

  const handleOpenAddCustomer = () => {
    setIsAddCustomerOpened(!isAddCustomerOpened)
    setIsAddMode(true)
  }

  const handleOpenDeleteCustomer = () => {
    setIsDeleteCustomerOpened(!isDeleteCustomerOpened)
  }

  const handleOpenEditCustomer = () => {
    setIsAddMode(false)
    setIsAddCustomerOpened(!isAddCustomerOpened)
  }

  const handleSelect = (Customer) => {
    const newCustomer = [...selectedCustomers, Customer]
    setSelectedCustomer(newCustomer)
  }

  const handleDeleteSelected = (id) => {
    const deleteTask = selectedCustomers.filter((customer) => {
      if (customer.id !== id) {
          return customer;
      }
      return 0;
    })
    setSelectedCustomer(deleteTask)
  }

  useEffect(() => {
    fetchCustomersAction();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetchInvoicesAction();
    if(window.location.href === `http://localhost:3000/customers/${id}`) {
      fetchCustomersByIdAction(id)
      setTimeout(() => {
        setIsAddCustomerOpened(true)
      }, 1000)
    }
    // eslint-disable-next-line
  }, [])

  return isLoading ? <Loader /> :
    <div>
      {isAddCustomerOpened || isDeleteCustomerOpened ? <ModalBackdrop /> : null}
      {isAddCustomerOpened ? <AddCustomer 
          handleOpen={handleOpenAddCustomer} 
          handleAdd={createCustomerAction} 
          handleEdit={updateCustomerAction} 
          isAddMode={isAddMode}
          selected={selectedCustomers[0] || customer}
        /> 
        : null}
        {isDeleteCustomerOpened ? <VerifyDelete 
          handleOpen={handleOpenDeleteCustomer} 
          handleDelete={deleteCustomerAction} 
          selected={selectedCustomers}
          invoices={invoices}
          fetchInvoicesAction={fetchInvoicesAction}
          whatsDelete="customer"
        /> : null }
      <div className='customers-container'>
        <h1 className='customers-header-text'>Customers</h1>
        <ListActions handleOpenAdd={handleOpenAddCustomer} path={`/customers/${selectedCustomers[0]?.id}`} handleOpenEdit={handleOpenEditCustomer} handleOpenDelete={handleOpenDeleteCustomer} selected={selectedCustomers} editId={selectedCustomers[0]?.id} />
        <CustomerList customers={customers} handleSelect={handleSelect} handleDelete={handleDeleteSelected} selectedCustomer={selectedCustomers} />
    </div>
    </div>
}

const mapStateToProps = createStructuredSelector({
  customers: selectCustomersList(),
  customer: selectCustomerById(),
  invoices: selectInvoicesList(),
  isLoading: selectIsLoading()
})

const mapDispatchToProps = dispatch => {
    return {
        fetchCustomersAction: () => {
          dispatch(fetchCustomersAction())
        },
        createCustomerAction: (payload) => {
          dispatch(createCustomerAction(payload))
        },
        updateCustomerAction: (payload, id) => {
          dispatch(updateCustomerAction(payload, id))
        },
        deleteCustomerAction: (id) => {
          dispatch(deleteCustomerAction(id))
        },
        fetchCustomersByIdAction: (id) => {
          dispatch(fetchCustomersByIdAction(id))
        },
        fetchInvoicesAction: () => {
          dispatch(fetchInvoicesAction())
        }
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default(withConnect)(Customers);