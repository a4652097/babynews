import axios from 'axios'

// 创建axios
const service = axios.create({
  // 请求地址
  baseURL: process.env.VUE_APP_URL,
  headers: {
    'X-Requested-with': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('<请求数据>')
  console.log(config.data)
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log(error)
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('<返回数据>')
  console.log(response.data)
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error)
})

export default service
