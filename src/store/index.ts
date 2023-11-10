import Vue from 'vue'
import Vuex from 'vuex'
import adaptiveStore from './modules/adaptiveStore.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    adaptive: adaptiveStore
  }
})
