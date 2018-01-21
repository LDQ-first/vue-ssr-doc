const Vue = require('vue')
const express = require('express')
const server = express()


const LRU = require('lru-cache')

const microCache = LRU({
  max: 100,
  maxAge: 10000  // 重要提示：条目在 10 秒后过期。
})

const isCacheable = req => {
  // 实现逻辑为，检查请求是否是用户特定(user-specific)。
  // 只有非用户特定(non-user-specific)页面才会缓存
  // Array.some / any
  return true   // 每个页面都换缓存
}



const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')



const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8'), // （可选）页面模板
  clientManifest, // （可选）客户端构建 manifest
  // cache: microCache  // 缓存组件
})
//const createApp = require('./src/app.js')
// const createApp = require('./dist/main.server.js').default
// const createApp = require('./dist/main.server.js').default
// console.log('createApp: ', createApp)

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
  const cacheable = isCacheable(req)
  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      console.log("------ hit ------")
      return res.end(hit)
    }
  }
  const context = { 
    title: 'vue ssr app',
    meta: `
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="renderer" content="webkit">
    `,
    url: req.url 
  } 
  /*const app = createApp(context)
  renderer.renderToString(app, context, (err, html) => {
      // 处理错误……
      if (err) {
        console.log('err: ', err)
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })*/
  // createApp(context).then(app => {
  //   renderer.renderToString(app, context, (err, html) => {
     renderer.renderToString(context, (err, html) => {
      // 处理错误……
      if (err) {
        console.log('err: ', err)
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
      if (cacheable) {
        microCache.set(req.url, html)
      }
    })
  // })
 
})
server.listen(8080)
console.log("open http://localhost:8080")
