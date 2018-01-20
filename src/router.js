import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Halo from './components/halo.vue'
/*import Hello from './components/hello.vue'*/
const Hello = () => import('./components/hello.vue')
const Item = () => import('./components/Item.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Halo },
      { path: '/hello/:id', component: Hello },
      { path: '/item/:id', component: Item }
    ]
  })
}