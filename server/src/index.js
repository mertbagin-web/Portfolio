import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.get("/api/projects", (_req, res) => {
  res.json([
    { id: 1, title: "Projekt Alpha", status: "placeholder" },
    { id: 2, title: "Projekt Beta", status: "placeholder" }
  ]);
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
