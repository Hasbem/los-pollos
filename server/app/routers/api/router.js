import express from "express";
import {
  login,
  loginSuccess,
  logout,
} from "../../controllers/authController.js";
import getProducts from "../../controllers/productController.js";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
} from "../../controllers/userController.js";
import {
  getUserByEmail,
  hashPassword,
  verifyToken,
} from "../../services/authMiddleware.js";

const router = express.Router();

// Routes pour les produits
router.get("/products", getProducts);

// Routes pour les utilisateurs
router.post("/login", getUserByEmail, login);
router.post("/users", hashPassword, addUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser); // Ajouter la route pour supprimer un utilisateur

// Routes pour l'authentification
router.get("/logout", verifyToken, logout);
router.get("/verify-auth", verifyToken, loginSuccess);

export default router;
