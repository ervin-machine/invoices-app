import produce from 'immer'
import { types } from '../constants'

export const initialState = {
    customers: [],
    error: false,
    isLoading: true,
    customer: []
}

const customersReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch(action.type) {
            case types.FETCH_CUSTOMERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_CUSTOMERS_SUCCESS:
                draft.isLoading = false;
                draft.customers = [...state.customers, ...action.payload];
                break;
            case types.FETCH_CUSTOMERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.FETCH_CUSTOMERS_BY_ID_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_CUSTOMERS_BY_ID_SUCCESS:
                draft.isLoading = false;
                draft.customer = action.payload;
                break;
            case types.FETCH_CUSTOMERS_BY_ID_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.CREATE_CUSTOMERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.CREATE_CUSTOMERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.CREATE_CUSTOMERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.UPDATE_CUSTOMERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.UPDATE_CUSTOMERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.UPDATE_CUSTOMERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            case types.DELETE_CUSTOMERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.DELETE_CUSTOMERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.DELETE_CUSTOMERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            default:
                break;
        }
    })


export default customersReducer