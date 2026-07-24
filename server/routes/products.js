import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductBySlug,
  getFeaturedProducts,
  getRelatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { verifyToken, adminOnly } from "../middleware/auth.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/slug/:slug", getProductBySlug);
router.get("/:id", getProductById);
router.get("/:id/related", getRelatedProducts);

router.post("/", verifyToken, adminOnly, createProduct);
router.put("/:id", verifyToken, adminOnly, updateProduct);
router.delete("/:id", verifyToken, adminOnly, deleteProduct);

export default router;
