import Cookies from 'js-cookie'

const tokenKey = 'token'
const saveData = {}

saveData.getToken = () => {
  return Cookies.get(tokenKey)
}

saveData.setToken = (token) => {
  return Cookies.set(tokenKey, token)
}

saveData.removeToken = () => {
  return Cookies.remove(tokenKey)
}

saveData.setStorage = (key, value) => {
  return sessionStorage.setItem(key, value)
}

saveData.getStorage = (key) => {
  return sessionStorage.getItem(key)
}

export default saveData
