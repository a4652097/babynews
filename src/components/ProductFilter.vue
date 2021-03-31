<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="type" :options="option1" @change="product_type" />
      <van-dropdown-item v-model="sort" :options="option2" @change="product_sort"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  data () {
    return {
      type: 'all',
      sort: 'default',
      option1: [
        { text: '全部商品', value: 'all' },
        { text: '新款商品', value: 'new' },
        { text: '活动商品', value: 'activity' }
      ],
      option2: [
        { text: '默认排序', value: 'default' },
        { text: '好评排序', value: 'good' },
        { text: '销量排序', value: 'sales' }
      ]
    }
  },
  methods: {
    product_type () {
      console.log(this.type)
      // 通过emit去传值
      this.$emit('type', this.type)
    },
    product_sort () {
      console.log(this.sort)
      // 通过emit去传值
      this.$emit('sort', this.sort)
    }
  }
}
</script>

<style scoped>

</style>
