<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field name="checkboxGroup" label="复选框组" >
      <template #input>
        <van-checkbox-group v-model="checkboxGroup" direction="horizontal" ref="checkboxGroup">
          <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
          <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
    <van-button type="primary" @click="checkAll">全选</van-button>
    <van-submit-bar :price="2222" button-text="提交订单" @submit="onSubmit">
    </van-submit-bar>
  </van-form>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      username: '',
      password: '',
      checkbox: false,
      checkboxGroup: []
    }
  },
  methods: {
    checkAll () {
      console.log('ddd', this.$refs.checkboxGroup)
      this.$refs.checkboxGroup.toggleAll(true)
    },
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped>

</style>
