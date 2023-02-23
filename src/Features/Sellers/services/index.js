import axiosClient from "../../../utils/axios"

const FETCH_SELLERS_ENDPOINT = '/sellers'

export const getSellers = () => {
    return axiosClient.get(FETCH_SELLERS_ENDPOINT)
}

export const getSellersById = (id) => {
    return axiosClient.get(`${FETCH_SELLERS_ENDPOINT}/${id}`)
}


export const createSeller = (payload) => {
    return axiosClient.post(FETCH_SELLERS_ENDPOINT, payload)
}

export const updateSeller = (payload, id) => {
    return axiosClient.put(`${FETCH_SELLERS_ENDPOINT}/${id}`, payload)
}

export const deleteSeller = (id) => {
    return axiosClient.delete(`${FETCH_SELLERS_ENDPOINT}/${id}`)
}

