import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

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
        component: () => import('../views/home/index')
      },
      {
        path: 'category',
        name: 'category',
        meta: { title: '分类' },
        component: () => import('../views/category/index')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: { title: '购物车' },
        component: () => import('../views/cart/index')
      },
      {
        path: 'personal',
        name: 'personal',
        meta: { title: '我的' },
        component: () => import('../views/personal/index')
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
