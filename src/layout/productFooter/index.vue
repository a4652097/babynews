<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" @click="onClickIcon"/>
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon"/>
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" @click="onClickIcon"/>
    <van-goods-action-button type="warning" text="加入购物车" @click="onClickIcon"/>
    <van-goods-action-button type="danger" text="立即购买" @click="onClickIcon"/>
  </van-goods-action>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'index',
  methods: {
    onClickIcon () {
      Toast('暂未实现')
    }
  }
}
</script>

<style scoped>

</style>
