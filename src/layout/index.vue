<template>
  <div>
    <NavHeader></NavHeader>
    <!-- 内容 -->
    <section class="app_main">
      <!-- 主体视图 -->
      <router-view></router-view>
    </section>
    <NavFooter></NavFooter>
  </div>
  <!-- 导航 -->

</template>

<script>
export default {
  name: 'index',
  components: {
    NavHeader: () => import('./navHeader/index.vue'),
    NavFooter: () => import('./navFooter/index.vue')
  }
}
</script>

<style scoped>

</style>
