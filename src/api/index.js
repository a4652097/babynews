import request from './request'

// 获取banner图接口
export const getBanner = (params) =>
  request({
    url: 'banner',
    method: 'get',
    params
  })g
// 获取商品列表接口
export const getProductList = (params) =>
  request({
    url: '/products',
    method: 'get',
    params
  })
