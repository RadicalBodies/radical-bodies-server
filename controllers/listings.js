const Listing = require('../models/listing.js')

async function find (ctx) {
  // Find a single listing
  ctx.body = await Listing.findById(ctx.params.id)
}

async function findAll (ctx) {
  // Fetch all from the database and return as payload
  ctx.body = await Listing.find({})
}

async function create (ctx) {
  console.log('Creating new listing with data:', ctx.request.body)
  const newData = new Listing(ctx.request.body)
  console.log('Created listing:', newData)
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
