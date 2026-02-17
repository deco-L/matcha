import express from "express";
import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes";
import { query } from "./database";
import { env } from "./config/env";

const app = express();
const PORT = env.backend.port || 8080;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

app.get("/test-db", async (req: Request, res: Response) => {
  try {
    const result = await query("SELECT NOW() AS now");
    res.json({ success: true, now: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
