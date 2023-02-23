import { combineReducers } from "redux"

import invoicesReducer from "../Features/Invoices/store/reducers"
import sellersReducer from "../Features/Sellers/store/reducers"
import customersReducer from "../Features/Customers/store/reducers"

export default function createReducer(injectReducers = {}) {
    const rootReducer = combineReducers({
        invoices: invoicesReducer,
        sellers: sellersReducer,
        customers: customersReducer,
        ...injectReducers
    })

    return rootReducer
}