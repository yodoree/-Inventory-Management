import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  imageUrl: String,
  title: { type: String, required: true, trim: true, maxLength: 80 },
  createdAt: { type: Date, required: true, default: Date.now },
  count: { type: Number, required: true, default: 0 },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
