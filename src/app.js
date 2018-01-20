import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

export function createApp (context) {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()
  // 同步路由状态(route state)到 store
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    /*data: {
      url: context.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`*/
    render: h => h(App),
    router,
    store
  })
  // 暴露 app, router 和 store
  return { app, router, store }
}