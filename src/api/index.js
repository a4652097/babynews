import request from './request'

// 获取banner图接口
export const getBanner = (params) =>
  request({
    url: 'banner',
    method: 'get',
    params
  })
// 获取商品列表接口
export const getProductList = (params) =>
  request({
    url: '/products',
    method: 'get',
    params
  })
// 获取商品分类接口
export const getCategoryList = (params) =>
  request({
    url: '/category',
    method: 'get',
    params
  })
// 获取商品2级分类接口
export const getChildCategory = (params) =>
  request({
    url: '/child_category',
    method: 'get',
    params
  })
// 获取排序后的商品列表
export const getSortProduct = (params) =>
  request({
    url: '/sort',
    method: 'get',
    params
  })
// 提交订单
export function payOrder (data) {
  return request({
    url: '/pay_order',
    method: 'post',
    data
  })
}
// 我的订单
export function orderList (params) {
  return request({
    url: '/orders',
    method: 'get',
    params
  })
}
// 新增/修改收货地址
export function addAddress (data) {
  return request({
    url: '/add_address',
    method: 'post',
    data
  })
}
// 获取收货地址
export function address (params) {
  return request({
    url: '/address',
    method: 'get',
    params
  })
}
