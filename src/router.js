import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import otherRoutes from '@/views/test/route'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const merge = function () {
  return Array.prototype.concat.apply([], arguments)
}

// 合并路由
routes = merge(routes, otherRoutes)

export default new Router({
  /** 去掉url上的 # 号 */
  mode: 'history',
  routes
})
