import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import axios from 'axios'
import 'lib-flexible'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import '@/filter'
import 'mint-ui/lib/style.css'
import './assets/css/index.css'
import './assets/css/normalize.css'
Vue.prototype.$http = axios
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(ElementUI)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
