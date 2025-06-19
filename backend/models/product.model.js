import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["accessories", "mens", "womens", "kids"], //only these values allowed
  },
});

export default mongoose.model("Product", productSchema);
