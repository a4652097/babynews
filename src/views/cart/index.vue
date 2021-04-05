<template>
  <div class="cart">
    <ProductFilter @sort="change_sort" @type="change_type"></ProductFilter>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div v-for="product in products" :key="product.id" class="cart_list">
        <div class="card">
<!--          商品卡片-->
          <van-card
            :price="product.price"
            :desc="product.description"
            :title="product.title"
            :thumb="product.image"
            @click-thumb="to_product(product.product_id)"
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
import ProductFilter from '@/components/ProductFilter.vue'
import { Toast } from 'vant'
import debounce from '@/utils/index.js'
export default {
  name: 'index',
  components: {
    ProductFilter
  },
  data () {
    return {
      products: [],
      result: [],
      stepper: [],
      checked: false,
      sort: '',
      type: ''
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
    to_product (id) {
      this.$router.push({ name: 'product_info', params: { id: id } })
    },
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

    // 获取我的购物车商品
    getSortProduct (sort, type) {
      getSortProduct({ sort, type }).then(res => {
        if (res.data.success) {
          this.products = res.data.data
        } else {
          console.log('错误处理')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 改变商品排序后触发
    change_sort (sort) {
      console.log('sort', sort)
      this.sort = sort
      this.getSortProduct(this.sort, this.type)
    },
    // 改变商品类型后触发
    change_type (type) {
      console.log('type', type)
      this.type = type
      this.getSortProduct(this.sort, this.type)
    },
    onSubmit (values) {
      if (this.result.length === 0) {
        Toast.fail('请选中需要提交的商品')
      } else {
        debounce.debounce(() => {
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
        }, 1000)
      }
    }
  },

  mounted () {
    this.$store.commit('change_active', 2)
    this.getSortProduct(this.sort, this.type)
  }
}
</script>

<style scoped>

</style>
