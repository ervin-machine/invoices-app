import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectCustomers = state => state.customers

const selectCustomersList = () => createSelector(selectCustomers, selectCustomers => get(selectCustomers, 'customers'))
const selectCustomerById = () => createSelector(selectCustomers, selectCustomers => get(selectCustomers, 'customer'))
const selectIsLoading = () => createSelector(selectCustomers, selectCustomers => get(selectCustomers, 'isLoading'))

export { selectCustomersList, selectCustomerById, selectIsLoading }

