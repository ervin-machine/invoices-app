import React from 'react'
import "./CustomerErrorNotification.css"
import ToastNotification from '../../../PublicComponents/ToastNotification'

function CustomerErrorNotification(props) {
    const { errors } = props
  return (
    <div className='customer-error-notification-container'>
            {errors.name ? <ToastNotification message={errors.name} /> : null}
            {errors.surname ? <ToastNotification message={errors.surname} /> : null}
            {errors.address ? <ToastNotification message={errors.address} /> : null}
            {errors.age ? <ToastNotification message={errors.age} /> : null}
    </div>
  )
}

export default CustomerErrorNotification