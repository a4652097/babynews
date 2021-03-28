<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>

</template>

<script>
import { address } from '@/api'
export default {
  name: 'index',
  data () {
    return {
      chosenAddressId: '1',
      list: [],
      disabledList: []
    }
  },
  methods: {
    onAdd () {
      this.$router.push({ name: 'edit_address', params: { id: 'add' } })
    },
    onEdit (item, index) {
      this.$router.push({ name: 'edit_address', params: { id: item.id, data: item } })
    },
    address () {
      address({}).then(res => {
        this.list = res.data.data.list
        this.disabledList = res.data.data.disabledList
      })
    }
  },
  mounted () {
    this.address()
  }
}
</script>

<style scoped>

</style>
