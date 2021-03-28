<template>
  <div>
    <div v-for="order in orders" :key="order.id">
        <van-card
          :num="order.number"
          :price="order.price"
          :desc="order.description"
          :title="order.title"
          :thumb="order.image"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">查看物流</van-button>
            <van-button size="mini">确认收货</van-button>
          </template>
        </van-card>
    </div>
  </div>
</template>

<script>
import { orderList } from '@/api'
export default {
  name: 'OrderList',
  data () {
    return {
      orders: []
    }
  },
  methods: {
    orderList (type) {
      orderList({ type }).then(res => {
        if (res.data.success) {
          this.orders = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  // 监听路由参数改变后重新驱动视图
  watch: {
    $route: function (newUrl, oldUrl) {
      if (newUrl !== oldUrl) {
        // 此处调用接口
        this.orderList(this.$route.params.type)
      }
    }
  },
  mounted () {
    this.orderList(this.$route.params.type)
  }
}

</script>

<style scoped>

</style>
