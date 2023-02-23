import React, { useEffect, useState } from 'react'
import "./AddCustomer.css"
import Alert from 'react-bootstrap/Alert';
import { Formik, Field, Form } from 'formik';
import CustomerErrorNotification from '../CustomerErrorNotification';
import { CustomerSchema } from '../../schema';
import { Link } from 'react-router-dom';

function AddCustomer(props) {
  const { selected, handleAdd, handleOpen, handleEdit, isAddMode } = props
  const [errors, setErrors] = useState([])
  const [isSubmited, setIsSubmited] = useState(false)
  const baseurl = "http://localhost:3000"

    const initialValues = {
        name: '',
        surname: '',
        address: '',
        age: '',
    };

    const onSubmit = async (values, action) => {
        const jobValues = { ...values }

        if (isAddMode) {
          await handleAdd(jobValues)
        } else if (!isAddMode) {
          await handleEdit(jobValues, 1)
        }

        window.location.href = `${baseurl}/customers`
    }

    useEffect(() => {
        setTimeout(() => {
          if(isSubmited) {
            setIsSubmited(false)
          }
        }, 3000)
      }, [isSubmited])

  return (
    <div>
        {isSubmited ? <CustomerErrorNotification errors={errors} /> : null}
    <div className='add-customer-container'>
        <h2 className='add-customer-header-text'>{isAddMode ? "Create" : "Edit"} an customer</h2>
        <Link to="/customers"><h3 className='add-customer-close' onClick={handleOpen}>X</h3></Link>
        <div className='add-customer-form-content'>
        <Formik initialValues={isAddMode ? initialValues : selected} validationSchema={CustomerSchema} onSubmit={onSubmit}>
            {({ errors, isSubmitting }) => {
                
                if(isSubmitting) {
                    setErrors(errors)
                    setIsSubmited(true)
                }

                return (
                    <Form>
                        <div className="form-col">
                            <div className="form-row">
                                <label className='form-label'>Name</label>
                                <Field name="name" type="text" className={'form-control'}>
                                </Field>
                                <Alert variant={"warning"} show={true}>
                                </Alert>
                                
                            </div>
                            <div className="form-row">
                                <label className='form-label'>Surname</label>
                                <Field name="surname" type="text" className={'form-control'} />
                            </div>
                            <div className="form-row">
                                <label className='form-label'>Address</label>
                                <Field name="address" type="text" className={'form-control'} />
                            </div>
                        </div>
                        <div className="form-col">
                            <div className="form-row">
                                <label className='form-label'>Age</label>
                                <Field name="age" type="text" className={'form-control'} />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <Link to="/customers">
                            <button style={{ backgroundColor: "#FFD580" }} className="form-button" onClick={handleOpen}>
                                Discard
                            </button>
                            </Link>
                            <button style={{ backgroundColor: "#90EE90"}} className="form-button" type="submit" disabled={isSubmitting}>
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
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

export default AddCustomer