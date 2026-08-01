import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import chatRouter from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------
// Health Check
// ------------------------------

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio AI Backend Running",
  });
});

// ------------------------------
// Resume Route
// ------------------------------

app.get("/resume", (req, res) => {
  res.sendFile(
    path.join(__dirname, "Updated_Resume.pdf")
  );
});

// ------------------------------
// AI Chat Route
// ------------------------------

app.use("/api/chat", chatRouter);

// ------------------------------
// Start Server
// ------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});