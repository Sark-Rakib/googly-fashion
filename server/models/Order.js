import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    size: { type: String, default: "" },
    color: { type: String, default: "" },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    userId: { type: String, default: null, index: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true, index: true },
    phone: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    paymentMethod: {
      type: String,
      enum: ["cod", "bkash", "nagad", "bank"],
      default: "cod",
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Unpaid"],
      default: "Pending",
    },
    orderStatus: {
      type: String,
      enum: [
        "Order Placed",
        "Confirmed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
      ],
      default: "Order Placed",
    },
    address: { type: String, required: true },
    products: [orderItemSchema],
    subtotal: { type: Number, required: true },
    deliveryCharge: { type: Number, default: 0 },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
