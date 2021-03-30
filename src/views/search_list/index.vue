<template>
  <div>
    <navHeader></navHeader>
    <Search></Search>
    <ProductList></ProductList>
  </div>
</template>

<script>
import navHeader from '@/layout/navHeader/index.vue'
import ProductList from '@/components/ProductList.vue'
import Search from '@/components/Search.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    ProductList, Search, navHeader
  }
}
</script>

<style scoped>

</style>
