import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectSellers = state => state.sellers

const selectSellersList = () => createSelector(selectSellers, selectSellers => get(selectSellers, 'sellers'))
const selectSellerById = () => createSelector(selectSellers, selectSellers => get(selectSellers, 'seller'))
const selectIsLoading = () => createSelector(selectSellers, selectSellers => get(selectSellers, 'isLoading'))

export { selectSellersList, selectSellerById, selectIsLoading }

