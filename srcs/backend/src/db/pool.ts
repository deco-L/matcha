import { Pool } from "pg";
import { env } from "../config/env"
import fs from "fs";

const password = fs.readFileSync(
  "/run/secrets/postgres_user_password",
  "utf8"
).trim();

export const pool = new Pool({
  user: env.postgres.user,
  host: env.postgres.host,
  database: env.postgres.db,
  password,
  port: Number(env.postgres.port) || 5432,
});

