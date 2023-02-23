import React, { useEffect, useState } from 'react'
import "./VerifyDelete.css"
import ToastNotification from '../ToastNotification'

function VerifyDelete(props) {
  const { handleOpen, handleDelete, selected, fetchInvoicesAction, invoices, whatsDelete } = props
  const [isError, setIsError] = useState(false)

  const handleDeleteItem = () => {

    const postsIdsArray = selected.map((post) => post.id)

    setTimeout(() => {
      window.location.reload(true);
    }, 2000)

    if(whatsDelete !== "invoice") {
      return postsIdsArray.forEach((id) => invoices.some(invoice => id === invoice.customerName?.id) ? setIsError(true) : handleDelete(id))
    }

    if(whatsDelete === "invoice") {
      return postsIdsArray.forEach((id) => handleDelete(id))
    }
    
  }

  useEffect(() => {
    if(whatsDelete !== "invoice") {
      fetchInvoicesAction();
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(isError) {
        setIsError(false)
      }
    }, 3000)
  }, [isError])

  return (
    <div>
      {isError ? 
        <div className='verify-delete-error'>
          <ToastNotification message="Cannot delete customer / seller that is existing in invoice" />
        </div> : null}
      <div className='delete-container'>
        <h2>Are you sure</h2>
        <div>
            <button className='verify-yes-button' onClick={handleDeleteItem}>
                Yes
            </button>
            <button className='verify-no-button' onClick={handleOpen}>
                No
            </button>
        </div>
    </div>
    </div>
    
  )
}

export default VerifyDelete