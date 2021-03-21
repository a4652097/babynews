<template>
<div>
  <Search></Search>
  <banner></banner>
  <Gird></Gird>
  <ProductList></ProductList>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Search from '@/components/Search.vue'
import Gird from '@/components/Gird.vue'
import ProductList from '@/components/ProductList.vue'
export default {
  name: 'home',
  components: {
    Banner, Search, ProductList, Gird
  }
}
</script>

<style scoped>

</style>
