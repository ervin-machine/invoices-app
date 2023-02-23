import produce from 'immer'
import { types } from '../constants'

export const initialState = {
    invoices: [],
    error: false,
    isLoading: true,
    invoice: {}
}

const invoicesReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch(action.type) {
            case types.FETCH_INVOICES_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_INVOICES_SUCCESS:
                draft.isLoading = false;
                draft.invoices = [...state.invoices, ...action.payload];
                break;
            case types.FETCH_INVOICES_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.FETCH_INVOICES_BY_ID_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_INVOICES_BY_ID_SUCCESS:
                draft.isLoading = false;
                draft.invoice = action.payload;
                break;
            case types.FETCH_INVOICES_BY_ID_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.CREATE_INVOICES_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.CREATE_INVOICES_SUCCESS:
                draft.isLoading = false;
                break;
            case types.CREATE_INVOICES_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.UPDATE_INVOICES_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.UPDATE_INVOICES_SUCCESS:
                draft.isLoading = false;
                break;
            case types.UPDATE_INVOICES_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            case types.DELETE_INVOICES_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.DELETE_INVOICES_SUCCESS:
                draft.isLoading = false;
                break;
            case types.DELETE_INVOICES_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            default:
                break;
        }
    })


export default invoicesReducer