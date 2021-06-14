import Vue from 'vue'
import Vuex from 'vuex'

import invoiceGeneratorModule from './invoice-generator'
import timeManagerModule from './time-manager'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    invoiceGeneratorModule,
    timeManagerModule
  }
})
