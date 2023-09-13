const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  sku: String,
  description: String,
  instock: Number,
});

module.exports = mongoose.model("Inventory", InventorySchema);
