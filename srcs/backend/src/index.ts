import express from "express";
import { query } from "./database.ts";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/test-db", async (req, res) => {
  try {
    const result = await query("SELECT NOW() AS now");
    res.json({ success: true, now: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
