<template>
  <van-swipe :autoplay="3000" indicator-color="white" class="banner">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" class="banner-img"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { getBanner } from '@/api'
export default {
  name: 'Banner',
  data () {
    return {
      images: []
    }
  },
  mounted () {
    this.getBanner()
  },
  methods: {
    getBanner () {
      getBanner({}).then(res => {
        if (res.data.success) {
          this.images = res.data.data.image
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
