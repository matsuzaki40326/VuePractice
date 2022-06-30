import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    increment( state ) {
      state.count++
    },
    addCount( state, payload ) { //第2引数はオブジェクト
      state.count += payload.value
    }
  },
  actions: {
    // incrementAction( context ){
    //   context.commit('increment')
    // },
    incrementAction( {commit} ){
      commit('increment')
    },
    addCountAction( {commit}, payload ) {
      commit('addCount', payload)
    }
  },
  modules: {
  }
})
