import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export class Request {
  private instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      return config
    })

    // 响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'get' })
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'post' })
  }

  put(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'put' })
  }

  delete(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'delete' })
  }

  patch(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'patch' })
  }
}
