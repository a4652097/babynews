<template>
  <div>
    <NavHeader></NavHeader>
    <!-- 内容 -->
    <section class="app_main">
      <!-- 主体视图 -->
      <router-view></router-view>
    </section>
  </div>
  <!-- 导航 -->

</template>

<script>
export default {
  name: 'show',
  components: {
    NavHeader: () => import('./navHeader/index.vue')
  }
}
</script>

<style scoped>

</style>
