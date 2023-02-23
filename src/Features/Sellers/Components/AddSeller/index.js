import React, { useEffect, useState } from 'react'
import "./AddSeller.css"
import { Formik, Field, Form } from 'formik';
import SellerErrorNotification from '../SellerErrorNotification';
import { Link } from 'react-router-dom';
import { SellerSchema } from '../../schema';

function AddSeller(props) {
  const { selected, handleAdd, handleOpen, handleEdit, isAddMode } = props
  const [errors, setErrors] = useState([])
  const [isSubmited, setIsSubmited] = useState(false)
  const baseurl = "http://localhost:3000"

    const initialValues = {
        companyName: '',
        hqAddress: '',
        isActive: false,
    };

    const onSubmit = async (values, action) => {
        const jobValues = { ...values }

        if (isAddMode) {
            await handleAdd(jobValues)
        } else if (!isAddMode) {
            await handleEdit(jobValues, 1)
        }

        window.location.href = `${baseurl}/sellers`
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
        {isSubmited ? <SellerErrorNotification errors={errors} /> : null}
    <div className='add-seller-container'>
        <h2 className='add-seller-header-text'>{isAddMode ? "Create" : "Edit"} an seller</h2>
        <Link to="/sellers"><h3 className='add-seller-close' onClick={handleOpen}>X</h3></Link>
        <div className='add-seller-form-content'>
        <Formik initialValues={isAddMode ? initialValues : selected} validationSchema={SellerSchema} onSubmit={onSubmit}>
            {({ errors, isSubmitting }) => {

                if(isSubmitting) {
                    setErrors(errors)
                    setIsSubmited(true)
                }
                return (
                    <Form>
                        <div className="form-col">
                            <div className="form-row">
                                <label className='form-label'>Company Name</label>
                                <Field name="companyName" type="text" className={'form-control'}>
                                </Field>
                            </div>
                            <div className="form-row">
                                <label className='form-label'>Address</label>
                                <Field name="hqAddress" type="text" className={'form-control'} />
                            </div>
                        </div>
                        <div className="form-col">
                            <div className="form-row">
                                <label className='form-label'>Is Active</label>
                                <Field name="isActive" type="checkbox" className={'form-control'} />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <Link to="/sellers">
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

export default AddSeller