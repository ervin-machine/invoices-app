import produce from 'immer'
import { types } from '../constants'

export const initialState = {
    sellers: [],
    error: false,
    isLoading: true,
    seller: []
}

const sellersReducer = (state = initialState, action) => 
    produce(state, draft => {
        switch(action.type) {
            case types.FETCH_SELLERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_SELLERS_SUCCESS:
                draft.isLoading = false;
                draft.sellers = [...state.sellers, ...action.payload];
                break;
            case types.FETCH_SELLERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.FETCH_SELLERS_BY_ID_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.FETCH_SELLERS_BY_ID_SUCCESS:
                draft.isLoading = false;
                draft.seller =  action.payload;
                break;
            case types.FETCH_SELLERS_BY_ID_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.CREATE_SELLERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.CREATE_SELLERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.CREATE_SELLERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break;
            case types.UPDATE_SELLERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.UPDATE_SELLERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.UPDATE_SELLERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            case types.DELETE_SELLERS_REQUEST:
                draft.isLoading = true;
                draft.error = false;
                break;
            case types.DELETE_SELLERS_SUCCESS:
                draft.isLoading = false;
                break;
            case types.DELETE_SELLERS_FAILURE:
                draft.isLoading = false;
                draft.error = true;
                break
            default:
                break;
        }
    })


export default sellersReducer