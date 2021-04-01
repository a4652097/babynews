<template>
  <div class="order">
    <van-tabs v-model="active">
      <van-tab title="所有订单" :to="{ name: 'orders', params: {type: 0} }"></van-tab>
      <van-tab title="待付款" :to="{ name: 'orders', params: { type: 1 }}"></van-tab>
      <van-tab title="待发货" :to="{ name: 'orders', params: { type: 2 }}"></van-tab>
      <van-tab title="待收货" :to="{ name: 'orders', params: { type: 3 }}"></van-tab>
      <van-tab title="待评价" :to="{ name: 'orders', params: { type: 4 }}"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      active: 0
    }
  },
  methods: {
  },
  mounted () {
    // 控制van-tabs组件样式
    this.active = this.$route.params.type
  }
}
</script>

<style scoped>

</style>
