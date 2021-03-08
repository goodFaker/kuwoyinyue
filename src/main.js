import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as API from '@/api'

import HeaderNav from './components/Header/Header'

Vue.component('HeaderNav',HeaderNav)

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$API = API

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
