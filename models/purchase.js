const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      phone: String,
      // tokenId: String,
      description: String,
      // price: Number,
    },
    { timestamps: true },
)

const Purchase = mongoose.model('Purchase', PurchaseSchema)
module.exports = mongoose.model('Purchase')

