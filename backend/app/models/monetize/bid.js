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
  starting_price: {
    type: Number,
    required: true,
  },
  offers: [
    {
      user_id: {
        // should be required, for this test project default null
        type: Schema.Types.ObjectId,
        default: null,
      },
      price: {
        type: Number,
        required: true,
      },
      date: {
        type: Schema.Types.Date,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Bid", bidSchema);
