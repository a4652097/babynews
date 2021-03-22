import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式文件
import './style/index.scss'

// vant组件
import { Tag, Col, Row, Sidebar, SidebarItem, Card, Grid, GridItem, Button, NavBar, Tabbar, TabbarItem, Search, Swipe, SwipeItem, Lazyload, Image as VanImage } from 'vant'

// 使用vant组件
Vue.use(Tag)
Vue.use(VanImage)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Card)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
