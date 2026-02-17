import { Pool } from "pg";
import fs from "fs";
import { env } from "./config/env"

const password = fs
  .readFileSync("/run/secrets/postgres_user_password", "utf8").trim();

const pool = new Pool({
  user: env.postgres.user,
  host: env.postgres.host,
  database: env.postgres.db,
  password: password,
  port: env.postgres.port || 5432,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
