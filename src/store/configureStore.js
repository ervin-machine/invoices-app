import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import createReducer from "../reducers"

export default function configureStore(initialState = {}) {
    const store = createStore(
        createReducer(),
        initialState,
        applyMiddleware(thunk)
    )

    return store
}