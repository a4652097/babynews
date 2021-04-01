<template>
  <div class="personal">
    <div class="head_image">
      <van-image
        round
        width="8rem"
        height="8rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <p>吃蘑菇的大灰狼</p>
    </div>
    <van-cell-group title="">
      <van-cell title="收货地址" is-link to="/my_address" />
      <div class="order_type">
        <van-cell value="所有订单" is-link :to="{ name: 'orders', params: {type: 0} }">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">我的订单</span>
          </template>
        </van-cell>

        <van-grid :border="false">
          <van-grid-item icon="pending-payment" text="待付款" :to="{ name: 'orders', params: {type: 1} }"/>
          <van-grid-item icon="send-gift-o" text="待发货" :to="{ name: 'orders', params: {type: 2} }"/>
          <van-grid-item icon="logistics" text="待收货" :to="{ name: 'orders', params: {type: 3} }"/>
          <van-grid-item icon="comment-o" text="待评价" :to="{ name: 'orders', params: {type: 4} }"/>
        </van-grid>
      </div>
    </van-cell-group>
    <van-cell-group title="关于">
      <van-cell title="帮助反馈" is-link to="/personal/about" />
      <van-cell title="关于我们" is-link to="/personal/about" />
    </van-cell-group>
    <van-button @click="logout" type="danger" block class="logout">登出</van-button>
  </div>

</template>

<script>
import { Notify } from 'vant'
import util from '@/utils/index.js'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      util.saveData.removeToken()
      this.$router.push({ name: 'home' })
      Notify({ type: 'success', message: '登出成功' })
    }
  },
  mounted () {
    this.$store.commit('change_active', 3)
  }
}
</script>

<style scoped>

</style>
