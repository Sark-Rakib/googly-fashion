import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userUid: { type: String, required: true, index: true },
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  size: { type: String, default: "" },
  color: { type: String, default: "" },
  name: { type: String, default: "" },
  price: { type: Number, default: 0 },
  image: { type: String, default: "" },
  stock: { type: Number, default: 0 },
}, { timestamps: true });

const CartItem = mongoose.model("CartItem", cartItemSchema);

export const getCart = async (req, res) => {
  try {
    const items = await CartItem.find({ userUid: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { product_id, quantity, size, color, name, price, image, stock } = req.body;

    const existing = await CartItem.findOne({
      userUid: req.user.id,
      product_id,
      size: size || "",
      color: color || "",
    });

    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      const items = await CartItem.find({ userUid: req.user.id });
      return res.json(items);
    }

    await CartItem.create({
      userUid: req.user.id,
      product_id,
      quantity,
      size: size || "",
      color: color || "",
      name: name || "",
      price: price || 0,
      image: image || "",
      stock: stock || 0,
    });

    const items = await CartItem.find({ userUid: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    await CartItem.findOneAndUpdate(
      { _id: req.params.id, userUid: req.user.id },
      { quantity }
    );
    const items = await CartItem.find({ userUid: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    await CartItem.findOneAndDelete({ _id: req.params.id, userUid: req.user.id });
    const items = await CartItem.find({ userUid: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await CartItem.deleteMany({ userUid: req.user.id });
    res.json([]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
