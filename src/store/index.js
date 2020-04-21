import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    test: 0
  },
  mutations: {
    setTest (state, value) {
      state.test = value
    }
  },
  actions: {
  },
  modules: {
  }
})
