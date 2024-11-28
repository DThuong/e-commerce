import axios from "../axios"

export const apigetProduct = (params) => axios({
    url: '/product/',
    method: 'GET',
    params
})