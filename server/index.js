require("dotenv").config();
const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Autorization"],
};
const app = express();
const router = require("./app/routers/api/router");

// Check database connection
require("./database/client").checkConnection();

app.use(cors(corsOptions));
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
