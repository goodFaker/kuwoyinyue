import Vue from 'vue'
import VueRouter from 'vue-router'
// import { compile } from "vue/types/umd";
import routes from './routes'
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push

VueRouter.prototype.push = function(option, onComplete = () => {}, onAbort) {
  return originPush.call(this, option, onComplete, onAbort)
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(option, onComplete = () => {}, onAbort) {
  return originReplace.call(this, option, onComplete, onAbort)
}

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
