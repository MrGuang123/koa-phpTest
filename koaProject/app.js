const Koa = require('koa')
const serve = require('koa-static')
const render = require('koa-swig')
const co = require('co')
const path = require('path')
const mainRoutes = require('./router')

const app = new Koa()

// 设置静态资源地址
app.use(serve(__dirname + '/public'))

// 设置swig模板
app.context.render = co.wrap(
  render({
    root: path.join(__dirname, 'views'),
    cache: false,
    ext: 'html'
  })
)

// 使用引入的路由
app.use(mainRoutes.routes()).use(mainRoutes.allowedMethods())

// 其他未处理的路由返回404
app.use(async ctx => {
  ctx.throw(404, '好像走丢了')
})

app.listen(3000)
module.exports = app
