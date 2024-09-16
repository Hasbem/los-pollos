import argon2 from "argon2";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const userLogin = req.user;
  const verified = await argon2.verify(
    userLogin.hashed_password,
    req.body.password
  );
  if (!verified) {
    return res.sendStatus(422);
  }

  delete userLogin.hashed_password;
  const token = jwt.sign({ sub: userLogin.id }, process.env.APP_SECRET, {
    expiresIn: "30d", // '30d' est plus conventionnel pour les jours que '30day'
  });

  res.cookie("auth_token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    expires: dayjs().add(1, "hours").toDate(),
  });

  return res.json({ userLogin });
};

const loginSuccess = (req, res) => res.sendStatus(200);

const logout = (req, res) => res.clearCookie("auth_token").sendStatus(200);

export { login, loginSuccess, logout };
