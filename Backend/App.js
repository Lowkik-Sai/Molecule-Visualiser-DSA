const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./mainRouter");

app.use(express.json());
app.use(cors());
require("dotenv").config();

// ✅ Change "/" to "/api"
app.use("/api", mainRouter);

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Welcome to Molecule Visualizer" });
});

// ✅ EXPORT APP (Required for Vercel)
module.exports = app;
