<template>
  <footer>
    <van-tabbar v-model="active" :placeholder=true>
      <van-tabbar-item icon="home-o" @click="home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" @click="category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" @click="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="personal">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  name: 'footer-nav',
  data () {
    return {
      active: this.$store.state.active
    }
  },
  methods: {
    home () {
      this.$router.push('../home')
    },
    category () {
      this.$router.push('../category')
    },
    cart () {
      this.$router.push('../cart')
    },
    personal () {
      this.$router.push('../personal')
    }
  }
}
</script>

<style scoped>

</style>
