import { Router } from "express";
import { getReviewsByProduct, createReview, deleteReview } from "../controllers/reviewController.js";
import { verifyToken, optionalAuth } from "../middleware/auth.js";

const router = Router();

router.get("/product/:productId", getReviewsByProduct);
router.post("/", optionalAuth, createReview);
router.delete("/:id", verifyToken, deleteReview);

export default router;
