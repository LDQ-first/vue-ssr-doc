import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router.js'

export function createApp (context) {
  const router = createRouter()
  const app = new Vue({
    /*data: {
      url: context.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`*/
    render: h => h(App),
    router
  })
  return { app, router }
}