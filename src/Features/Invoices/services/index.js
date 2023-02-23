import axiosClient from "../../../utils/axios"

const FETCH_INVOCIES_ENDPOINT = '/invoices'

export const getInvoices = () => {
    return axiosClient.get(FETCH_INVOCIES_ENDPOINT)
}

export const getInvoicesById = (id) => {
    return axiosClient.get(`${FETCH_INVOCIES_ENDPOINT}/${id}`)
}


export const createInvoice = (payload) => {
    return axiosClient.post(FETCH_INVOCIES_ENDPOINT, payload)
}

export const updateInvoice = (payload, id) => {
    return axiosClient.put(`${FETCH_INVOCIES_ENDPOINT}/${id}`, payload)
}

export const deleteInvoice = (selected) => {
    return axiosClient.delete(`${FETCH_INVOCIES_ENDPOINT}/${selected}`)
}

