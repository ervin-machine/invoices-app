import React from 'react'
import "./SellerErrorNotification.css"
import ToastNotification from '../../../PublicComponents/ToastNotification'

function SellerErrorNotification(props) {
    const { errors } = props
  return (
    <div className='seller-error-notification-container'>
            {errors.companyName ? <ToastNotification message={errors.companyName} /> : null}
            {errors.hqAddress ? <ToastNotification message={errors.hqAddress} /> : null}
            {errors.isActive ? <ToastNotification message={errors.isActive} /> : null}
    </div>
  )
}

export default SellerErrorNotification