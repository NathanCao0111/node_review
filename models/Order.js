const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  item: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
