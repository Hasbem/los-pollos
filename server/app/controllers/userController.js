const tables = require("../../database/tables");

const getUsers = async (req, res) => {
  try {
    console.log("Requête reçue pour obtenir les utilisateurs");
    const users = await tables.users.getUsers();
    console.log("Utilisateurs récupérés:", users);
    res.json(users);
  } catch (err) {
    console.error("Erreur lors de la récupération des utilisateurs:", err);
    res.status(500).send("Internal Server Error");
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await tables.users.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await tables.users.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.json({ message: "Utilisateur supprimé" });
    }
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res) => {
  const user = req.body;

  if (typeof user !== "object" || user === null) {
    console.error("req.body is not a valid object:", user);
    return res.sendStatus(400);
  }

  console.info("User object to insert:", user);

  try {
    const result = await tables.users.insert(user);
    if (result && typeof result.insertId !== "undefined") {
      return res.sendStatus(201);
    }
    console.error("Insert result does not contain insertId:", result);
    return res.sendStatus(500);
  } catch (err) {
    console.error("Error during insert:", err);
    return res.sendStatus(500);
  }
};

module.exports = { getUserById, getUsers, addUser, deleteUser };
