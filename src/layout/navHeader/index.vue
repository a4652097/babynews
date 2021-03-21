<template>
  <header>
    <van-nav-bar
      :title="$route.meta.title"
      left-text="返回"
      right-text="按钮"
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
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style scoped>

</style>
