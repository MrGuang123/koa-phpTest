const Router = require('koa-router')
const dataModel = require('../models')
const router = new Router()

router.get('/index', async (ctx, next) => {
  const data = await dataModel.countData()
  ctx.body = await ctx.render('thumbs', { count: data.count })
})

router.get('/add-one', async (ctx, next) => {
  var result = await dataModel.addData()
  ctx.body = result
})

router.get('/get-count', async (ctx, next) => {
  var result = await dataModel.countData()
  ctx.body = result
})

module.exports = router
