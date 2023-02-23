import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectInvoices = state => state.invoices

const selectInvoicesList = () => createSelector(selectInvoices, selectInvoices => get(selectInvoices, 'invoices'))
const selectInvoiceById = () => createSelector(selectInvoices, selectInvoices => get(selectInvoices, 'invoice'))
const selectIsLoading = () => createSelector(selectInvoices, selectInvoices => get(selectInvoices, 'isLoading'))

export { selectInvoicesList, selectInvoiceById, selectIsLoading }

