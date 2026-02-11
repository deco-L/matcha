import { Pool } from "pg";
import fs from "fs";

const password = fs
  .readFileSync("/run/secrets/postgres_user_password", "utf8").trim();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: password,
  port: Number(process.env.POSTGRES_PORT) || 5432,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
