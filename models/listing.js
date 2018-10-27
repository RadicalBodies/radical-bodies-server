const mongoose = require('mongoose')

const ListingSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      phone: String,
      tokenId: String,
      description: String,
      price: Number,
    },
    { timestamps: true },
)

const Listing = mongoose.model('Listing', ListingSchema)
module.exports = mongoose.model('Listing')

