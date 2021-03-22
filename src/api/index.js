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
