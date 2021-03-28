<template>
  <header>
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </header>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'header-nav',
  data () {
    return {
    }
  },

  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      Toast('设置')
    }
  }
}
</script>

<style scoped>

</style>
