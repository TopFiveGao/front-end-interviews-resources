import axios, { type AxiosRequestConfig } from 'axios'

const instance = axios.create({
    baseURL: '/'
})

instance.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
    return response
}, (err) => {
    return Promise.reject(err)
})

interface Http {
    
}


export default instance