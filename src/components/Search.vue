<template>
  <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
  </form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: this.$store.state.query
    }
  },
  methods: {
    onSearch (val) {
      this.$store.commit('change_query', val)
      this.$router.push({ path: 'search_list' })
    }
  }
}
</script>

<style scoped>

</style>
