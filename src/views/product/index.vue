<template>
<div class="product_info">
  <van-swipe :autoplay="3000" indicator-color="white" class="banner">
    <van-swipe-item v-for="(image, index) in product.banner" :key="index">
      <img v-lazy="image" class="banner-img"/>
    </van-swipe-item>
  </van-swipe>
  <div class="info">
    <p class="price">￥<b>{{product.price}}</b><b class="old_price">原价:￥{{product.old_price}}</b></p>
    <b class="title">{{product.title}}</b>
    <p class="description">{{product.description}}</p>
    <p><b><van-icon name="shop" />商品详情</b></p>
  </div>

  <div class="image_info">
    <van-image v-for="image in product.info" :key="image.index"
               width="100%"
               height="30rem"
               fit="contain"
               :src="image"
    />
  </div>
  <ProductFooter></ProductFooter>
</div>
</template>

<script>
import ProductFooter from '@/layout/productFooter/index.vue'
import { getProduct } from '@/api'
export default {
  name: 'index',
  data () {
    return {
      product: []
    }
  },
  components: {
    ProductFooter
  },
  methods: {
    // 获取商品详情
    getProduct (id) {
      getProduct({ id }).then(res => {
        if (res.data.success) {
          this.product = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    console.log('商品id', this.$route.params.id)
    this.getProduct(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
