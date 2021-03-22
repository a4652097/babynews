import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 0
  },
  mutations: {
    change_active (state, params) {
      // 变更状态
      state.active = params
    }

  },
  actions: {
  },
  modules: {
  }
})
