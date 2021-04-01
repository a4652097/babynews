<template>
  <div>
    <Search></Search>
    <ProductList></ProductList>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import Search from '@/components/Search.vue'
export default {
  name: 'index',
  data () {
    return {
      sort: '',
      type: ''
    }
  },
  components: {
    ProductList, Search
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
