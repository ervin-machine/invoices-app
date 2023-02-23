import React from 'react'
import "./ToastNotification.css"

function ToastNotification(props) {
    const { message } = props
  return (
    <div className='toast-notification-content'>
        <p className='error-message'>{message}</p>
    </div>
  )
}

export default ToastNotification