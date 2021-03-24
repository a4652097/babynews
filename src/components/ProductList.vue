<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-grid :gutter="10" :column-num="2" :center=false>
        <van-grid-item v-for="product in products" :key="product.index" calss="list">
          <van-image lazy-load :src="product.image" />
          <p class="procut_title">{{product.title}}</p>
          <p class="price">￥{{product.price}}</p>
        </van-grid-item>
      </van-grid>
    </van-list>

  </div>
</template>

<script>
import { getProductList } from '@/api'

export default {
  name: 'ProductList',
  data () {
    return {
      products: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    onLoad () {
      // 异步更新数据
      this.getProductList()
    },

    getProductList () {
      setTimeout(() => {
        getProductList({}).then(res => {
          if (res.data.success) {
            console.log(res.data.data[0])
            this.products = this.products.concat(res.data.data)
          } else {
            console.log('错误处理')
          }
        }).catch(err => {
          console.log(err)
        })
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.products.length >= 20) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
