import { Router } from "express";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, addToCart);
router.delete("/", verifyToken, clearCart);
router.put("/:id", verifyToken, updateCartItem);
router.delete("/:id", verifyToken, removeCartItem);

export default router;
