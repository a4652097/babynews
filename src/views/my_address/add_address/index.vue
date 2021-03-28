<template>
<div>
  <navHeader></navHeader>
  <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :address-info="addressInfo"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    ref="address"
  />
</div>
</template>

<script>
import navHeader from '@/layout/navHeader/index.vue'
import areaList from '@/utils/area.js'
import { Toast } from 'vant'
import { addAddress } from '@/api'
export default {
  name: 'index',
  data () {
    return {
      areaList: areaList,
      searchResult: [],
      data: [],
      addressInfo: {}
    }
  },
  components: {
    navHeader
  },
  mounted () {
    console.log(this.$route.params.data)
    this.data = this.$route.params.data
    this.set_addressInfo(this.data)
  },
  methods: {
    set_addressInfo (data) {
      console.log('data', data)
      if (data) {
        this.addressInfo =
          {
            id: data.id,
            name: data.name,
            tel: data.tel,
            areaCode: data.areaCode,
            province: data.province,
            city: data.city,
            county: data.county,
            postalCode: data.postalCode,
            isDefault: data.isDefault,
            addressDetail: data.address
          }
      }
    },
    onSave (values) {
      console.log(values.city)
      const data = {
        name: values.name,
        tel: values.tel,
        province: values.province,
        city: values.city,
        county: values.county,
        addressDetail: values.addressDetail,
        postalCode: values.postalCode,
        areaCode: values.areaCode,
        isDefault: values.isDefault
      }
      this.addAddress(data)
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    addAddress (data) {
      addAddress({ data }).then(response => {
        Toast(response.data.message)
        this.$router.push({ name: 'my_address' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
