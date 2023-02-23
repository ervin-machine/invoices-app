import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSellersList, selectSellerById, selectIsLoading } from './store/selectors';
import { fetchSellersAction, createSellerAction, updateSellerAction, deleteSellerAction, fetchSellersByIdAction } from "./store/actions"
import { selectInvoicesList } from '../Invoices/store/selectors'
import { fetchInvoicesAction } from '../Invoices/store/actions'

import AddSeller from './Components/AddSeller'
import VerifyDelete from '../PublicComponents/VerifyDelete'
import ListActions from '../PublicComponents/ListActions';
import SellerList from './Components/SellerList';
import ModalBackground from "../PublicComponents/ModalBackdrop"
import Loader from "../../Layout/Loader"
import { useParams } from 'react-router-dom';
import "./Sellers.css"

function Sellers(props) {
  const { sellers, fetchSellersAction, createSellerAction, updateSellerAction, deleteSellerAction, fetchSellersByIdAction, seller, invoices, fetchInvoicesAction, isLoading } = props
  const [isAddSellerOpened, setIsAddSellerOpened] = useState(false)
  const [isDeleteSellerOpened, setIsDeleteSellerOpened] = useState(false)
  const [isAddMode, setIsAddMode] = useState(false)
  const [selectedSellers, setSelectedSeller] = useState([])
  let { id } = useParams();

  const handleOpenAddSeller = () => {
    setIsAddSellerOpened(!isAddSellerOpened)
    setIsAddMode(true)
  }

  const handleOpenDeleteSeller = () => {
    setIsDeleteSellerOpened(!isDeleteSellerOpened)
  }

  const handleOpenEditSeller = () => {
    setIsAddMode(false)
    setIsAddSellerOpened(!isAddSellerOpened)
  }

  const handleSelect = (Seller) => {
    const newSeller = [...selectedSellers, Seller]
    setSelectedSeller(newSeller)
  }

  const handleDeleteSelected = (id) => {
    const deleteTask = selectedSellers.filter((seller) => {
      if (seller.id !== id) {
          return seller;
      }
      return 0;
    })
    setSelectedSeller(deleteTask)
  }

  useEffect(() => {
    fetchSellersAction();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetchInvoicesAction();
    if(window.location.href === `http://localhost:3000/sellers/${id}`) {
      fetchSellersByIdAction(id)
      setTimeout(() => {
        setIsAddSellerOpened(true)
      }, 1000)
    }
    // eslint-disable-next-line
  }, [])

  return isLoading ? <Loader /> :
    <div>
      {isAddSellerOpened || isDeleteSellerOpened ? <ModalBackground /> : null}
      {isAddSellerOpened ? <AddSeller 
          handleOpen={handleOpenAddSeller} 
          handleAdd={createSellerAction} 
          handleEdit={updateSellerAction} 
          isAddMode={isAddMode}
          selected={selectedSellers[0] || seller}
        /> 
        : null}
        {isDeleteSellerOpened ? <VerifyDelete 
          handleOpen={handleOpenDeleteSeller} 
          handleDelete={deleteSellerAction} 
          selected={selectedSellers}
          invoices={invoices}
          fetchInvoicesAction={fetchInvoicesAction}
          whatsDelete="seller"
        /> : null }
      <div className='sellers-container'>
        <h1 className='sellers-header-text'>Sellers</h1>
        <ListActions handleOpenAdd={handleOpenAddSeller} path={`/sellers/${selectedSellers[0]?.id}`} handleOpenEdit={handleOpenEditSeller} handleOpenDelete={handleOpenDeleteSeller} selected={selectedSellers} editId={selectedSellers[0]?.id} />
        <SellerList sellers={sellers} handleSelect={handleSelect} handleDelete={handleDeleteSelected} selectedSeller={selectedSellers} />
    </div>
    </div>
}

const mapStateToProps = createStructuredSelector({
  sellers: selectSellersList(),
  seller: selectSellerById(),
  invoices: selectInvoicesList(),
  isLoading: selectIsLoading()
})

const mapDispatchToProps = dispatch => {
    return {
        fetchSellersAction: () => {
          dispatch(fetchSellersAction())
        },
        createSellerAction: (payload) => {
          dispatch(createSellerAction(payload))
        },
        updateSellerAction: (payload, id) => {
          dispatch(updateSellerAction(payload, id))
        },
        deleteSellerAction: (id) => {
          dispatch(deleteSellerAction(id))
        },
        fetchSellersByIdAction: (id) => {
          dispatch(fetchSellersByIdAction(id))
        },
        fetchInvoicesAction: () => {
          dispatch(fetchInvoicesAction())
        }
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default(withConnect)(Sellers);