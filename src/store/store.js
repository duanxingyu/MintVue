import Vue from 'vue'
import vuex from 'vuex'
import * as getters from '../store/getters'
import * as mutations from '../store/mutations'
Vue.use(vuex)

export default new vuex.Store({
  state:{
    title:''
  },
  getters,
  mutations
})
