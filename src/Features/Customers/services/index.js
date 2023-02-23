import axiosClient from "../../../utils/axios"

const FETCH_CUSTOMERS_ENDPOINT = '/customers'

export const getCustomers = () => {
    return axiosClient.get(FETCH_CUSTOMERS_ENDPOINT)
}

export const getCustomersById = (id) => {
    return axiosClient.get(`${FETCH_CUSTOMERS_ENDPOINT}/${id}`)
}


export const createCustomer = (payload) => {
    return axiosClient.post(FETCH_CUSTOMERS_ENDPOINT, payload)
}

export const updateCustomer = (payload, id) => {
    return axiosClient.put(`${FETCH_CUSTOMERS_ENDPOINT}/${id}`, payload)
}

export const deleteCustomer = (id) => {
    return axiosClient.delete(`${FETCH_CUSTOMERS_ENDPOINT}/${id}`)
}

