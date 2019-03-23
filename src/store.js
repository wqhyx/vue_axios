import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setusername (state, name) {
      state.username = name
    }
  },
  actions: {
    commitUsername: ({ commit }, name) => commit('setusername', name)
  }
})
