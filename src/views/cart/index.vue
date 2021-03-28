<template>
  <div class="cart">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" @change="product_type" />
      <van-dropdown-item v-model="value2" :options="option2" @change="product_sort"/>
    </van-dropdown-menu>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div v-for="product in products" :key="product.id" class="cart_list">
          <div class="card">
  <!--          商品卡片-->
            <van-card
              :price="product.price"
              :desc="product.description"
              :title="product.title"
              :thumb="product.image"
            >
            <template #tags>
              <van-tag plain type="danger">热卖</van-tag>
              <van-tag plain type="danger">新品</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" type="info">结算</van-button>
              <van-button size="mini" type="danger">取消</van-button>
            </template>
            </van-card>
          </div>
          <div class="stepper">
            <!--          步进器-->
            <van-field name="stepper" label="">
              <template #input>
                <van-stepper v-model="product.number" />
              </template>
            </van-field>
          </div>
          <div  class="checkbox">
            <!--          复选框-->
            <van-field name="checkboxGroup" label="">
              <template #input>
                <template>
                  <van-checkbox :name="product.id"></van-checkbox>
                </template>
              </template>
            </van-field>
          </div>
        </div>
      </van-checkbox-group>
    <van-submit-bar :price="price_sum" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { getSortProduct, payOrder } from '@/api'

import { Toast } from 'vant'
export default {
  name: 'index',
  data () {
    return {
      products: [],
      result: [],
      stepper: [],
      checked: false,
      value1: 'all',
      value2: 'default',
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
  computed: {
    // 计算选中商品总价
    price_sum: function () {
      var sum = 0
      this.result.map(item => {
        console.log('xxx', this.result)
        sum += this.products.filter(product => product.id === item)[0].number * this.products.filter(product => product.id === item)[0].price
      })
      sum = sum * 100
      return sum
    }
  },
  methods: {
    checkAll () {
      if (this.result.length === this.products.length) {
        this.$refs.checkboxGroup.toggleAll()
      } else {
        this.$nextTick(() => {
          console.log('全选', this.$refs.checkboxGroup)
          this.$refs.checkboxGroup.toggleAll(true)
        })
      }
    },
    getSortProduct () {
      getSortProduct({}).then(res => {
        if (res.data.success) {
          this.products = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    product_type () {
      console.log(this.value1)
      this.getSortProduct(this.value1)
    },
    product_sort () {
      console.log(this.value2)
      this.getSortProduct(this.value2)
    },
    onSubmit (values) {
      if (this.result.length === 0) {
        Toast.fail('请选中需要提交的商品')
      } else {
        console.log('复选', this.result.length)
        console.log('数量', this.products)
        var data = []
        // 遍历data赋值
        this.result.map(item => {
          let a = {}
          a.id = item
          a.number = this.products.filter(product => product.id === item)[0].number
          a = JSON.stringify(a)
          data.push(a)
        })
        payOrder({
          data: data
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },

  mounted () {
    this.$store.commit('change_active', 2)
    this.getSortProduct()
  }
}
</script>

<style scoped>

</style>
