import axios, { type AxiosResponse, type AxiosRequestConfig, type InternalAxiosRequestConfig } from 'axios'


const instance = axios.create({
    baseURL: '/api'
})

// 添加拦截处理
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    console.log('axios请求拦截')
    return config
}, (error: any) => Promise.reject(`axios请求失败${error}`))

instance.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: any) => Promise.reject(`axios响应失败${error}`))

// 自定义数据类型
interface Data {
    [key: string]: unknown
}
// 自定义访问接口
interface Http {
    get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>,
    post(url: string, data?: Data, config?: AxiosRequestConfig): Promise<AxiosResponse>,
    put(url: string, data?: Data, config?: AxiosRequestConfig): Promise<AxiosResponse>,
    patch(url: string, data?: Data, config?: AxiosRequestConfig): Promise<AxiosResponse>,
    delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse>,
}
// 创建接口对象
export const http: Http = {
    get(url, config) {
        console.log('请求地址', url)
        return instance.get(url, { ...config })
    },
    post(url, data, config) {
        console.log('请求地址', url)
        return instance.post(url, data, { ...config })
    },
    put(url, data, config) {
        return instance.put(url, data, { ...config })
    },
    patch(url, data, config) {
        return instance.patch(url, data, { ...config })
    },
    delete(url, config) {
        return instance.delete(url, { ...config })
    }
}