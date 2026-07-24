import { Router } from "express";
import {
  trackOrder,
  getOrderById,
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
  updatePaymentStatus,
} from "../controllers/orderController.js";
import { verifyToken, adminOnly } from "../middleware/auth.js";

const router = Router();

router.post("/track", trackOrder);
router.get("/user/orders", verifyToken, getOrdersByUser);
router.get("/", verifyToken, adminOnly, getAllOrders);
router.get("/:orderId", getOrderById);
router.post("/", createOrder);
router.put("/:orderId/status", verifyToken, adminOnly, updateOrderStatus);
router.put("/:orderId/payment", verifyToken, adminOnly, updatePaymentStatus);

export default router;
