import argon2 from "argon2";
import jwt from "jsonwebtoken";
import tables from "../../database/tables.js"; // Assurez-vous que le chemin est correct

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies?.auth_token; // Utilisez req.cookies pour accéder aux cookies
    if (!token) {
      console.error("No auth token found");
      return res.sendStatus(401);
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET);
    console.info("Token verified:", req.auth);
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.sendStatus(401);
  }
};

export const getUserByEmail = async (req, res, next) => {
  try {
    const user = await tables.users.readWithPassword(req.body.email); // Utilisez `tables.users`

    if (!user) {
      return res.sendStatus(422);
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

export const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await argon2.hash(req.body.password, hashingOptions);
    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
