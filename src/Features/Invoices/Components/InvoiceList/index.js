import React, {useState} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Pagination from '../../../PublicComponents/Pagination';
import "./InvoiceList.css"
import { Link } from 'react-router-dom';

function InvoiceList(props) {
    const { invoices, handleSelect, selectedInvoice, handleDelete } = props
    const [currentInvoices, setCurrentInvoices] = useState([])

    const updateSelectedInvoice = (invoice, id) => {
      return selectedInvoice.some(selected => selected.id === invoice.id) ? handleDelete(id) : handleSelect(invoice)
    }

  return (
    <div>
        <div className='invoices-column-content'>
            <p className='invoice-column-item'>Seller</p>
            <p className='invoice-column-item'>Customer</p>
            <p className='invoice-column-item'>Date</p>
            <p className='invoice-column-item'>Amount</p>
        </div>
          {currentInvoices && currentInvoices.map((invoice, index) => {return (
            <div key={index} timeout={700}>
            <div className='invoices-header-list-1' style={{ backgroundColor: selectedInvoice.some(selected => selected.id === invoice.id) ? "#90EE90" : "white" }} key={index} onClick={() => updateSelectedInvoice(invoice, invoice.id)}>
              <a className='redirect-link' href={`http://localhost:3000/sellers/${invoice.sellerName?.id}`}><p className='invoice-row-item'>{invoice.sellerName?.companyName}</p></a>
              <a className='redirect-link' href={`http://localhost:3000/customers/${invoice.customerName?.id}`}><p className='invoice-row-item'>{invoice.customerName?.name + " " + invoice.customerName?.surname}</p></a>
              <p className='invoice-row-item'>{invoice.date}</p>
              <p className='invoice-row-item'>{invoice.amount}$</p>
            </div>
            </div>
          )})}
        <Pagination items={invoices} setCurrentItems={setCurrentInvoices} />
    </div>
  )
}

export default InvoiceList