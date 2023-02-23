import { types } from '../constants'

import { getCustomers, getCustomersById, createCustomer, updateCustomer, deleteCustomer } from "../../services"

const fetchCustomersRequest = () => {
    return {
        type: types.FETCH_CUSTOMERS_REQUEST
    }
}

const fetchCustomersSuccess = (data) => {
    return {
        type: types.FETCH_CUSTOMERS_SUCCESS,
        payload: data
    }
}

const fetchCustomersByIdFailure = (data) => {
    return {
        type: types.FETCH_CUSTOMERS_BY_ID_FAILURE,
        payload: data
    }
}

const fetchCustomersByIdRequest = () => {
    return {
        type: types.FETCH_CUSTOMERS_BY_ID_REQUEST
    }
}

const fetchCustomersByIdSuccess = (data) => {
    return {
        type: types.FETCH_CUSTOMERS_BY_ID_SUCCESS,
        payload: data
    }
}

const fetchCustomersFailure = (data) => {
    return {
        type: types.FETCH_CUSTOMERS_FAILURE,
        payload: data
    }
}

const createCustomerRequest = () => {
    return {
        type: types.CREATE_CUSTOMERS_REQUEST
    }
}

const createCustomerSuccess = () => {
    return {
        type: types.CREATE_CUSTOMERS_SUCCESS,
    }
}

const createCustomerFailure = (data) => {
    return {
        type: types.CREATE_CUSTOMERS_FAILURE,
        payload: data
    }
}

const updateCustomerRequest = () => {
    return {
        type: types.UPDATE_CUSTOMERS_REQUEST
    }
}

const updateCustomerSuccess = () => {
    return {
        type: types.UPDATE_CUSTOMERS_SUCCESS,
    }
}

const updateCustomerFailure = (data) => {
    return {
        type: types.UPDATE_CUSTOMERS_FAILURE,
        payload: data
    }
}

const deleteCustomerRequest = () => {
    return {
        type: types.DELETE_CUSTOMERS_REQUEST
    }
}

const deleteCustomerSuccess = () => {
    return {
        type: types.DELETE_CUSTOMERS_SUCCESS,
    }
}

const deleteCustomerFailure = (data) => {
    return {
        type: types.DELETE_CUSTOMERS_FAILURE,
        payload: data
    }
}


export const fetchCustomersAction = () => {
    return async(dispatch) => {
        dispatch(fetchCustomersRequest())
        try {
            const data = await getCustomers()
            dispatch(fetchCustomersSuccess(data))
        } catch(err) {
            dispatch(fetchCustomersFailure(err))
        }
    }
}

export const fetchCustomersByIdAction = (id) => {
    return async(dispatch) => {
        dispatch(fetchCustomersByIdRequest())
        try {
            const data = await getCustomersById(id)
            console.log(data)
            dispatch(fetchCustomersByIdSuccess(data))
        } catch(err) {
            dispatch(fetchCustomersByIdFailure(err))
        }
    }
}

export const createCustomerAction = (payload) => {
    return async(dispatch) => {
        dispatch(createCustomerRequest())
        try {
            await createCustomer(payload);
            dispatch(createCustomerSuccess())
        } catch(err) {
            dispatch(createCustomerFailure(err))
        }
    }
}

export const updateCustomerAction = (payload, id) => {
    return async(dispatch) => {
        dispatch(updateCustomerRequest())
        try {
            await updateCustomer(payload, id);
            dispatch(updateCustomerSuccess())
        } catch(err) {
            dispatch(updateCustomerFailure(err))
        }
    }
}

export const deleteCustomerAction = (id) => {
    return async(dispatch) => {
        dispatch(deleteCustomerRequest())
        try {
            await deleteCustomer(id);
            dispatch(deleteCustomerSuccess())
        } catch(err) {
            dispatch(deleteCustomerFailure(err))
        }
    }
}