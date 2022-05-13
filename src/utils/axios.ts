import axios, { AxiosRequestConfig } from 'axios'
import { ElNotification } from 'element-plus'
import { useAuthStore } from '@/stores'
import { getToken } from './auth'

const authStore = useAuthStore()
const server = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5 * 1000,
})

server.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    if (authStore.token) {
      request.headers['X-Token'] = getToken()
    }
    return request
  },
  (error) => {
    console.log(error) // for debug return Promise.reject(error) },
  }
)

server.interceptors.response.use(
  (response: AxiosRequestConfig) => {
    const res = response.data
    if (res.code !== 200) {
      console.log('接口信息报错', res.message)
      ElNotification({
        title: 'Warning',
        message: res.message,
        type: 'warning',
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('接口信息报错' + error)
    return Promise.reject(error)
  }
)

export default server
