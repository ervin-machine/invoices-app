import { types } from '../constants'

import { getSellers, getSellersById, createSeller, updateSeller, deleteSeller } from "../../services"

const fetchSellersRequest = () => {
    return {
        type: types.FETCH_SELLERS_REQUEST
    }
}

const fetchSellersSuccess = (data) => {
    return {
        type: types.FETCH_SELLERS_SUCCESS,
        payload: data
    }
}

const fetchSellersByIdFailure = (data) => {
    return {
        type: types.FETCH_SELLERS_BY_ID_FAILURE,
        payload: data
    }
}

const fetchSellersByIdRequest = () => {
    return {
        type: types.FETCH_SELLERS_BY_ID_REQUEST
    }
}

const fetchSellersByIdSuccess = (data) => {
    return {
        type: types.FETCH_SELLERS_BY_ID_SUCCESS,
        payload: data
    }
}

const fetchSellersFailure = (data) => {
    return {
        type: types.FETCH_SELLERS_FAILURE,
        payload: data
    }
}

const createSellerRequest = () => {
    return {
        type: types.CREATE_SELLERS_REQUEST
    }
}

const createSellerSuccess = () => {
    return {
        type: types.CREATE_SELLERS_SUCCESS,
    }
}

const createSellerFailure = (data) => {
    return {
        type: types.CREATE_SELLERS_FAILURE,
        payload: data
    }
}

const updateSellerRequest = () => {
    return {
        type: types.UPDATE_SELLERS_REQUEST
    }
}

const updateSellerSuccess = () => {
    return {
        type: types.UPDATE_SELLERS_SUCCESS,
    }
}

const updateSellerFailure = (data) => {
    return {
        type: types.UPDATE_SELLERS_FAILURE,
        payload: data
    }
}

const deleteSellerRequest = () => {
    return {
        type: types.DELETE_SELLERS_REQUEST
    }
}

const deleteSellerSuccess = () => {
    return {
        type: types.DELETE_SELLERS_SUCCESS,
    }
}

const deleteSellerFailure = (data) => {
    return {
        type: types.DELETE_SELLERS_FAILURE,
        payload: data
    }
}


export const fetchSellersAction = () => {
    return async(dispatch) => {
        dispatch(fetchSellersRequest())
        try {
            const data = await getSellers()
            dispatch(fetchSellersSuccess(data))
        } catch(err) {
            dispatch(fetchSellersFailure(err))
        }
    }
}

export const fetchSellersByIdAction = (id) => {
    return async(dispatch) => {
        dispatch(fetchSellersByIdRequest())
        try {
            const data = await getSellersById(id)
            console.log(data)
            dispatch(fetchSellersByIdSuccess(data))
        } catch(err) {
            dispatch(fetchSellersByIdFailure(err))
        }
    }
}

export const createSellerAction = (payload) => {
    return async(dispatch) => {
        dispatch(createSellerRequest())
        try {
            await createSeller(payload);
            dispatch(createSellerSuccess())
        } catch(err) {
            dispatch(createSellerFailure(err))
        }
    }
}

export const updateSellerAction = (payload, id) => {
    return async(dispatch) => {
        dispatch(updateSellerRequest())
        try {
            await updateSeller(payload, id);
            dispatch(updateSellerSuccess())
        } catch(err) {
            dispatch(updateSellerFailure(err))
        }
    }
}

export const deleteSellerAction = (id) => {
    return async(dispatch) => {
        dispatch(deleteSellerRequest())
        try {
            await deleteSeller(id);
            dispatch(deleteSellerSuccess())
        } catch(err) {
            dispatch(deleteSellerFailure(err))
        }
    }
}