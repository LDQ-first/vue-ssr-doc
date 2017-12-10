import Vue from 'vue'
import App from './App.vue'

export function createApp (context) {
  const app = new Vue({
    /*data: {
      url: context.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`*/
    render: h => h(App)
  })
  return { app }
}