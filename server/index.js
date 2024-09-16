import "dotenv/config"; // Assure-toi de charger les variables d'environnement
import express from "express";

import path from "path";
import { fileURLToPath } from "url";
import router from "./app/routers/api/router.js"; // Assure-toi que ce fichier utilise l'exportation par défaut
import client from "./database/client.js"; // Assure-toi que ce fichier utilise l'exportation par défaut

// Configuration de __dirname pour les chemins relatifs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Check database connection
client.checkConnection(); // Appel de la méthode checkConnection de l'objet client

// Middleware pour définir le type MIME des fichiers JavaScript
app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  next();
});

// Middleware pour servir des fichiers statiques, si nécessaire
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/", router);

// Get the port from the environment variables
const port = process.env.APP_PORT || 3310;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
