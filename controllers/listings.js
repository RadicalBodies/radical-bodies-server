const Listing = require('../models/listing.js')

async function findAll (ctx) {
  // Fetch all from the database and return as payload
  ctx.body = await Listing.find({})
}

async function create (ctx) {
  const newData = new Listing(ctx.request.body)
  const savedData = await newData.save()
  ctx.body = savedData
}

module.exports = {
  findAll,
  create,
}
