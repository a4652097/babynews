<template>
  <van-grid :gutter="10" :column-num="2">
    <van-grid-item v-for="product in products" :key="product.index" calss="list">
      <van-image lazy-load :src="product.image" />
      <p class="procut_title">{{product.title}}</p>
      <p class="price">￥{{product.price}}</p>
    </van-grid-item>

  </van-grid>
</template>

<script>
import { getProductList } from '@/api'

export default {
  name: 'ProductList',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      getProductList({}).then(res => {
        if (res.data.success) {
          console.log(res.data.data[0])
          this.products = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
