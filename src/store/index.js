import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 0,
    query: ''
  },
  mutations: {
    change_active (state, params) {
      // εζ΄ηΆζ
      state.active = params
    },
    change_query (state, params) {
      state.query = params
    }

  },
  actions: {
  },
  modules: {
  }
})
