import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式文件
import './style/index.scss'

// vant组件
import { Empty, Icon, GoodsAction, GoodsActionIcon, GoodsActionButton, AddressEdit, Tab, Tabs, AddressList, Cell, CellGroup, Field, Stepper, CheckboxGroup, Checkbox, Form, SubmitBar, DropdownItem, DropdownMenu, List, Tag, Col, Row, Sidebar, SidebarItem, Card, Grid, GridItem, Button, NavBar, Tabbar, TabbarItem, Search, Swipe, SwipeItem, Lazyload, Image as VanImage } from 'vant'

// 使用vant组件
Vue.use(Empty)
Vue.use(Icon)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(AddressEdit)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(AddressList)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(CheckboxGroup)
Vue.use(Field)
Vue.use(Stepper)
Vue.use(Form)
Vue.use(Checkbox)
Vue.use(SubmitBar)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(List)
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
