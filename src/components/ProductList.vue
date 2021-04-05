<template>
  <div>
    <van-list
      v-model="loading"
      :immediate-check = false
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-grid :gutter="10" :column-num="2" :center=false>
        <van-grid-item v-for="product in products" :key="product.index" calss="list" :to="{ name: 'product_info', params: {id: product.id} }">
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
      page: 1,
      per: 4,
      loading: false,
      finished: false,
      keyword: ''
    }
  },
  mounted () {
    this.getProductList()
  },
  // 监听路由参数改变后重新驱动视图
  watch: {
    '$store.state.query': function (newFlag, oldFlag) {
      // 需要执行的代码
      this.page = 1
      this.getProductList()
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      this.page += 1
      this.getProductList()
    },

    getProductList () {
      console.log('搜索关键字', this.$store.state.query)
      console.log('页数', this.page)
      const query = this.$store.state.query
      const page = this.page
      getProductList({ query: query, page: page, per: this.per }).then(res => {
        if (res.data.success) {
          this.products = this.products.concat(res.data.data)
          //   // 加载状态结束
          this.loading = false
        } else {
          // 数据全部加载完成
          if (this.products === null) {
            this.finished = true
          }
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
