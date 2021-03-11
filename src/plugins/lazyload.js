import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
 
// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
  error: 'dist/error.png',
  loading: require('../../public/images/lazyload.gif'),
  attempt: 1
})