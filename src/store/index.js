import Vue from 'vue'
import Vuex from 'vuex'

import mainstore from './mainstore'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      mainstore
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
