const mongoose = require("mongoose");

const { Schema } = mongoose;
const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "/placeholder/250.png",
  },
  type: {
    // should be make validation for type enums
    type: String,
    required: true,
  },
  rarity: {
    // same of `type`
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Card", cardSchema);
