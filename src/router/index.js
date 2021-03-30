import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {

    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'category',
        name: 'category',
        meta: { title: '分类' },
        component: () => import('@/views/category/index.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: { title: '购物车' },
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: 'personal',
        name: 'personal',
        meta: { title: '我的' },
        component: () => import('@/views/personal/index.vue')
      },
      {
        path: 'my_address',
        name: 'my_address',
        meta: { title: '收货地址' },
        component: () => import('@/views/my_address/index.vue')
      },
      {
        path: 'about',
        name: 'about',
        meta: { title: '关于我们' },
        component: () => import('@/views/about/index.vue')
      }
    ]
  },
  {
    path: '/orders',
    component: () => import('@/views/orders/index.vue'),
    children:
    [
      {
        path: '/orders/:type',
        name: 'orders',
        meta: { title: '我的订单' },
        component: () => import('@/components/OrderList.vue')
      }
    ]
  },
  {
    path: '/edit_address/:id',
    name: 'edit_address',
    meta: { title: '新增/修改地址' },
    component: () => import('@/views/my_address/add_address/index.vue')
  },
  {
    path: '/search_list',
    component: () => import('@/views/search_list/index.vue'),
    meta: { title: '搜索' },
    children:
    [
      {
        path: 'product_list/:query',
        name: 'p_list',
        component: () => import('@/components/ProductList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
