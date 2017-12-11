import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Halo from './components/halo.vue'
const Hello = () => import('./components/hello.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Halo },
      { path: '/hello/:id', component: Hello }
    ]
  })
}