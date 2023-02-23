import React, { useState } from 'react'
import "./CustomerList.css"
import Pagination from '../../../PublicComponents/Pagination'

function CustomerList(props) {
    const { customers, handleSelect, selectedCustomer, handleDelete } = props
    const [currentCustomers, setCurrentCustomers] = useState([])

    const updateSelectedCustomer = (customer, id) => {
      return selectedCustomer.some(selected => selected.id === customer.id) ? handleDelete(id) : handleSelect(customer)
    }

  return (
    <div>
        <div className='customers-column-content'>
            <p className='customer-column-item'>Name</p>
            <p className='customer-column-item'>Surname</p>
            <p className='customer-column-item'>Address</p>
            <p className='customer-column-item'>Age</p>
        </div>
        {currentCustomers && currentCustomers.map((customer, index) => {return (
          <div className='customers-header-list-1' style={{ backgroundColor: selectedCustomer.some(selected => selected.id === customer.id) ? "#90EE90" : "white" }} key={index} onClick={() => updateSelectedCustomer(customer, customer.id)}>
            <p className='customer-row-item'>{customer.name}</p>
            <p className='customer-row-item'>{customer.surname}</p>
            <p className='customer-row-item'>{customer.address}</p>
            <p className='customer-row-item'>{customer.age}</p>
        </div>
        )})}
        <Pagination items={customers} setCurrentItems={setCurrentCustomers} />
    </div>
  )
}

export default CustomerList