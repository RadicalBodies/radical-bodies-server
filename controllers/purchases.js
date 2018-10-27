const Purchase = require('../models/purchase.js')

async function find (ctx) {
  // Find a single listing
  ctx.body = await Purchase.findById(ctx.params.id)
}

async function findAll (ctx) {
  // Fetch all from the database and return as payload
  ctx.body = await Purchase.find({})
}

async function create (ctx) {
  console.log('Creating new purchase with data:', ctx.request.body)
  const newData = new Purchase(ctx.request.body)
  console.log('Created purchase:', newData)
  const savedData = await newData.save()
  ctx.body = savedData
}

async function update (ctx) { }

async function destroy (ctx) { }

module.exports = {
  find,
  findAll,
  create,
  update,
  destroy,
}
