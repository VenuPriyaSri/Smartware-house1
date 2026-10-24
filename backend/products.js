const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: String,
  sku: String,
  warehouseLocation: String,
  availableQty: { type: Number, default: 0 },
  reservedQty: { type: Number, default: 0 },
  damagedQty: { type: Number, default: 0 },
  reorderLevel: { type: Number, default: 10 },
  reorderQty: { type: Number, default: 50 },
  stockStatus: { type: String, default: "In Stock" }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
