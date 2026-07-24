import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUser,
  updateProfile,
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "../controllers/authController.js";
import { verifyToken, adminOnly } from "../middleware/auth.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, getUser);
router.put("/profile", verifyToken, updateProfile);

// Admin user management
router.get("/users", verifyToken, adminOnly, getAllUsers);
router.put("/users/:id/role", verifyToken, adminOnly, updateUserRole);
router.delete("/users/:id", verifyToken, adminOnly, deleteUser);

export default router;
