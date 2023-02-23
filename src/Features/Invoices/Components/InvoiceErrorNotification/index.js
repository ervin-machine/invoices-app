import React from 'react'
import "./InvoiceErrorNotification.css"
import ToastNotification from '../../../PublicComponents/ToastNotification'

function InvoiceErrorNotification(props) {
    const { errors, isActiveError } = props
  return (
    <div className='invoice-error-notification-container'>
            {errors.customerName ? <ToastNotification message={errors.customerName} /> : null}
            {errors.sellerName ? <ToastNotification message={errors.sellerName} /> : null}
            {errors.date ? <ToastNotification message={errors.date} /> : null}
            {errors.amount ? <ToastNotification message={errors.amount} /> : null}
            {isActiveError ? <ToastNotification message={"Cannot create invoice with inactive seller"} /> : null}
    </div>
  )
}

export default InvoiceErrorNotification