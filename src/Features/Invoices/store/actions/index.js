import { types } from '../constants'

import { getInvoices, getInvoicesById, createInvoice, updateInvoice, deleteInvoice } from "../../services"

const fetchInvoicesRequest = () => {
    return {
        type: types.FETCH_INVOICES_REQUEST
    }
}

const fetchInvoicesSuccess = (data) => {
    return {
        type: types.FETCH_INVOICES_SUCCESS,
        payload: data
    }
}

const fetchInvoicesByIdFailure = (data) => {
    return {
        type: types.FETCH_INVOICES_BY_ID_FAILURE,
        payload: data
    }
}

const fetchInvoicesByIdRequest = () => {
    return {
        type: types.FETCH_INVOICES_BY_ID_REQUEST
    }
}

const fetchInvoicesByIdSuccess = (data) => {
    return {
        type: types.FETCH_INVOICES_BY_ID_SUCCESS,
        payload: data
    }
}

const fetchInvoicesFailure = (data) => {
    return {
        type: types.FETCH_INVOICES_FAILURE,
        payload: data
    }
}

const createInvoiceRequest = () => {
    return {
        type: types.CREATE_INVOICES_REQUEST
    }
}

const createInvoiceSuccess = () => {
    return {
        type: types.CREATE_INVOICES_SUCCESS,
    }
}

const createInvoiceFailure = (data) => {
    return {
        type: types.CREATE_INVOICES_FAILURE,
        payload: data
    }
}

const updateInvoiceRequest = () => {
    return {
        type: types.UPDATE_INVOICES_REQUEST
    }
}

const updateInvoiceSuccess = () => {
    return {
        type: types.UPDATE_INVOICES_SUCCESS,
    }
}

const updateInvoiceFailure = (data) => {
    return {
        type: types.UPDATE_INVOICES_FAILURE,
        payload: data
    }
}

const deleteInvoiceRequest = () => {
    return {
        type: types.DELETE_INVOICES_REQUEST
    }
}

const deleteInvoiceSuccess = () => {
    return {
        type: types.DELETE_INVOICES_SUCCESS,
    }
}

const deleteInvoiceFailure = (data) => {
    return {
        type: types.DELETE_INVOICES_FAILURE,
        payload: data
    }
}


export const fetchInvoicesAction = () => {
    return async(dispatch) => {
        dispatch(fetchInvoicesRequest())
        try {
            const data = await getInvoices()
            dispatch(fetchInvoicesSuccess(data))
        } catch(err) {
            dispatch(fetchInvoicesFailure(err))
        }
    }
}

export const fetchInvoicesByIdAction = (id) => {
    return async(dispatch) => {
        dispatch(fetchInvoicesByIdRequest())
        try {
            const data = await getInvoicesById(id)
            console.log(data)
            dispatch(fetchInvoicesByIdSuccess(data))
        } catch(err) {
            dispatch(fetchInvoicesByIdFailure(err))
        }
    }
}

export const createInvoiceAction = (payload) => {
    return async(dispatch) => {
        dispatch(createInvoiceRequest())
        try {
            await createInvoice(payload);
            dispatch(createInvoiceSuccess())
        } catch(err) {
            dispatch(createInvoiceFailure(err))
        }
    }
}

export const updateInvoiceAction = (payload, id) => {
    return async(dispatch) => {
        dispatch(updateInvoiceRequest())
        try {
            await updateInvoice(payload, id);
            dispatch(updateInvoiceSuccess())
        } catch(err) {
            dispatch(updateInvoiceFailure(err))
        }
    }
}

export const deleteInvoiceAction = (id) => {
    return async(dispatch) => {
        dispatch(deleteInvoiceRequest())
        try {
            await deleteInvoice(id);
            dispatch(deleteInvoiceSuccess())
        } catch(err) {
            dispatch(deleteInvoiceFailure(err))
        }
    }
}