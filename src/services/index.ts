import { BASE_URL, TIMEOUT } from './config/config'
import { Request } from './request/request'

const ajax = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

export default ajax
