import React, { useEffect, useState } from 'react'
import "./AddInvoice.css"
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import InvoiceErrorNotification from '../InvoiceErrorNotification';
import { InvoiceSchema } from '../../schema';

function AddInvoice(props) {
  const { selected, handleAdd, handleOpen, handleEdit, isAddMode, fetchSellersAction, sellers, fetchCustomersAction, customers} = props
  const [errors, setErrors] = useState([])
  const [isSubmited, setIsSubmited] = useState(false)
  const [isActiveError, setIsActiveError] = useState(false)
  const baseurl = "http://localhost:3000"

    const initialValues = {
        sellerName: null,
        customerName: null,
        date: '',
        amount: '',
    };


    const FormSelectSeller = ({setFieldValue, values}) => {
        
    return (
      <>
        <select 
            className={'form-control'} 
            onChange={(e) => setFieldValue("sellerName", JSON.parse(e.target.value))}
        >
            <option></option>
            {sellers.map((seller, index) => (
                <option value={JSON.stringify(seller)} key={index}>{seller.companyName}</option>
            ))}   
        </select>
      </>
    );
  };

  const FormSelectCustomer = ({setFieldValue}) => {
    
    return (
    <>
        <select
            className={'form-control'} 
            onChange={(e) => {
                setFieldValue("customerName", JSON.parse(e.target.value))
            }}
        >
            <option></option>
            {customers.map((customer, index) => (
                <option value={JSON.stringify(customer)} key={index}>{customer.name + " " + customer.surname}</option>
            ))}   
        </select>
    </>
    );
   };

    const onSubmit = async (values, action) => {
    const jobValues = { ...values }

    if(isActiveError) {
        return;
    }

    if (isAddMode) {
        await handleAdd(jobValues)
    } else if (!isAddMode) {
        await handleEdit(jobValues, selected.id.toString())
    }
        window.location.href = `${baseurl}/invoices`
    }

    useEffect(() => {
        fetchSellersAction()
        fetchCustomersAction()
        // eslint-disable-next-line
    }, [])


  useEffect(() => {
    setTimeout(() => {
      if(isSubmited) {
        setIsSubmited(false)
      }
    }, 3000)
  }, [isSubmited])

  return (
    <div>
        {isSubmited ? <InvoiceErrorNotification errors={errors} isActiveError={isActiveError} /> : null}
        <div className='add-invoice-container'>
            <h2 className='add-invoice-header-text'>{isAddMode ? "Create" : "Edit"} an invoice</h2>
            <Link to="/invoices"><h3 className='add-invoice-close' onClick={handleOpen}>X</h3></Link>
            <div className='add-invoice-form-content'>
            <Formik initialValues={isAddMode ? initialValues : selected} validationSchema={InvoiceSchema} onSubmit={onSubmit}>
                {({ errors, touched, isSubmitting, values, setFieldValue }) => {

                    if(isSubmitting) {
                        setErrors(errors)
                        setIsSubmited(true)
                    }

                    if(!errors?.sellerName && !values?.sellerName?.isActive) {
                        setIsActiveError(true)
                    }

                    else {
                        setIsActiveError(false)
                    }

                    return (
                        <Form>
                            <div className="form-col">
                                <div className="form-row">
                                    <label className='form-label'>Seller</label>
                                    <FormSelectSeller setFieldValue={setFieldValue} values={values} />
                                </div>
                                <div className="form-row">
                                    <label className='form-label'>Customer</label>
                                    <FormSelectCustomer setFieldValue={setFieldValue} />
                                </div>
                                <div className="form-row">
                                    <label className='form-label'>Date</label>
                                    <Field name="date" type="date"pattern="\d{4}-\d{2}-\d{2}" className={'form-control'} />
                                </div>
                                </div>
                            <div className="form-col">
                                <div className="form-row">
                                    <label className='form-label'>Amount</label>
                                    <Field name="amount" type="text" className={'form-control'} />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <Link to="/invoices"><button style={{ backgroundColor: "#FFD580" }} className="form-button" onClick={handleOpen}>
                                    Discard
                                </button></Link>
                                <button style={{ backgroundColor: "#90EE90"}} className="form-button" type="submit" disabled={isSubmitting}>
                                    {isSubmitting}
                                    {isAddMode ? "Create" : "Save"}
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            </div>
        </div>
    </div> 
  )
}

export default AddInvoice