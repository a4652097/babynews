<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
import util from '@/utils/index.js'
import { Notify } from 'vant'
import { login } from '@/api'
export default {
  name: 'index',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (user) {
      login({ user }).then(res => {
        this.$router.push({ name: 'home' })
        util.saveData.setToken(res.data.data.token)
        Notify({ type: 'success', message: '登录成功' })
      }).catch(error => {
        console.log('错误信息', error)
      })
    }
  }
}
</script>

<style scoped>

</style>
