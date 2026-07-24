import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    compare_price: { type: Number, default: null },
    image: { type: String, default: "" },
    images: [{ type: String }],
    category_name: { type: [String], required: true, index: true },
    category_id: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    review_count: { type: Number, default: 0 },
    stock: { type: Number, default: 0, min: 0 },
    sizes: [{ type: String }],
    colors: [{ type: String }],
    featured: { type: Boolean, default: false },
    brand: { type: String, default: "", index: true },
  },
  { timestamps: true }
);

productSchema.index({ name: "text", description: "text", brand: "text" });

const Product = mongoose.model("Product", productSchema);

export default Product;
