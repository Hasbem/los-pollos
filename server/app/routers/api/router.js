const express = require("express");

const productController = require("../../controllers/productController");
const userController = require("../../controllers/userController");
const authController = require("../../controllers/authController");
const {
  getUserByEmail,
  hashPassword,
  verifyToken,
} = require("../../services/authMiddleware");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// Routes pour les produits
router.get("/products", productController.getProducts);

// Routes pour les utilisateurs
router.post("/login", getUserByEmail, authController.login);
router.post("/users", hashPassword, userController.addUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);

// Routes pour l'authentification
router.get("/logout", verifyToken, authController.logout);
router.get("/verify-auth", verifyToken, authController.loginSuccess);

/* ************************************************************************* */

module.exports = router;
