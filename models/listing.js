const mongoose = require('mongoose')

const ListingSchema = new mongoose.Schema(
    {
      name: { Type: String },
      email: { Type: String },
      phone: { Type: String },
      tokenId: { Type: String },
    },
    { timestamps: true },
)

const Listing = mongoose.model('Listing', ListingSchema)
module.exports = mongoose.model('Listing')

