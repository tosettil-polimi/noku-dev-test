const mongoose = require("mongoose");
const Card = require("../nft/card");

const { Schema } = mongoose;
const bidSchema = new Schema({
  card: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Card,
  },
  expiration_date: {
    type: Schema.Types.Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Sell", bidSchema);
