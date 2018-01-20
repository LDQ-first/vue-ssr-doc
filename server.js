const Vue = require('vue')
const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})
//const createApp = require('./src/app.js')
// const createApp = require('./dist/main.server.js').default
const createApp = require('./dist/main.server.js').default
console.log('createApp: ', createApp)

server.use('/dist', express.static('./dist'))

server.get('*', (req, res) => {
 /* const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  const context = {
    title: 'vue ssr app',
    meta: `
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="renderer" content="webkit">
    `
  }
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })*/
  const context = { 
    title: 'vue ssr app',
    meta: `
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="renderer" content="webkit">
    `,
    url: req.url 
  } 
  const app = createApp(context)
  renderer.renderToString(app, context, (err, html) => {
      // 处理错误……
      if (err) {
        console.log('err: ', err)
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
 /* createApp(context).then(app => {
     renderer.renderToString(app, context, (err, html) => {
      // 处理错误……
      if (err) {
        console.log('err: ', err)
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
  })*/
 
})
server.listen(8080)
console.log("open http://localhost:8080")
