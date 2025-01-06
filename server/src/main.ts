import express from "express";
import type { RequestHandler } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Définir la fonction sayWelcome
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

// Route GET /
app.get("/", sayWelcome);
app.listen(PORT, () => {
  console.error(`Server is running on http://localhost:${PORT}`);
});
