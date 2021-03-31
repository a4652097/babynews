<template>
  <van-grid :gutter="10" :border="false" class="gird">
    <van-grid-item v-for="data in datas" :key="data.index" :to="{ path: 'search_list', params: {type: data.query} }">
      <van-image
        round
        width="5rem"
        height="5rem"
        lazy-load :src="data.url"
      />
      <p>{{data.name}}</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: 'Gird',
  data () {
    return {
      datas: [
        {
          url: require('../assets/images/discount.jpg'),
          name: '折扣商品',
          query: 'off'
        },
        {
          url: require('../assets/images/activ.jpg'),
          name: '活动商品',
          query: 'activity'
        },
        {
          url: require('../assets/images/new.jpg'),
          name: '商品上新',
          query: 'new'
        },
        {
          url: require('../assets/images/recharge.jpg'),
          name: '热销商品',
          query: 'hot'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
