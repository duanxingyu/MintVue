// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
import mui from 'vue-awesome-mui'
// 将API方法绑定到全局
Vue.prototype.$api = api
import utils from './utils/index.js'
import store from './store/store'


Vue.prototype.$utils=utils
//引入Mint UI组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import vuex from 'vuex'

Vue.use(Mint);
Vue.use(vuex)
Vue.use(mui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
