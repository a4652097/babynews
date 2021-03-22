<template>
  <div class="category">
    <van-sidebar v-model="activeKey" @change="onChange">
      <div v-for="category in categories" :key="category.id" @click="getChildCategory(category.id)">
        <van-sidebar-item :title="category.name" />
      </div>
    </van-sidebar>
    <van-grid :gutter="10" icon-size="8rem" :border=false>
      <van-grid-item v-for="category in child_categories" :key="category.id" :icon="category.image" :text="category.name"/>
    </van-grid>
  </div>
</template>

<script>
import { getCategoryList, getChildCategory } from '@/api'
export default {
  name: 'index',
  data () {
    return {
      activeKey: '',
      categories: [],
      child_categories: []
    }
  },
  mounted () {
    this.getCategoryList()
    this.$store.commit('change_active', 1)
  },
  methods: {
    onChange () {
    },
    getChildCategory (id) {
      getChildCategory({ id: id }).then(res => {
        console.log('获取的id' + id)
        if (res.data.success) {
          this.child_categories = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getCategoryList () {
      getCategoryList({}).then(res => {
        if (res.data.success) {
          this.categories = res.data.data
          this.child_categories = res.data.data[0].child
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>

</style>
