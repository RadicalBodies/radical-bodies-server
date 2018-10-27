const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')

const index = require('./routes/index')
const listings = require('./routes/listings')
const purchases = require('./routes/purchases')

mongoose.connect('mongodb://127.0.0.1:27017/radicalbodies', { useNewUrlParser: true })

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
app.use(cors())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(listings.routes(), listings.allowedMethods())
app.use(purchases.routes(), purchases.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
