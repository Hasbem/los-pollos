const express = require("express");

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

// Routes pour l'authentification
router.post("/login", getUserByEmail, authController.login);
router.post("/users", hashPassword, userController.addUser);
router.get("/logout", verifyToken, authController.logout);
router.get("/verify-auth", verifyToken, authController.loginSuccess);

/* ************************************************************************* */

module.exports = router;