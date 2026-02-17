import { pool } from "../../db/pool";

export async function findOrCreateGoogleUser(
  googleId: string,
  email: string,
  name: string
) {
  const existing = await pool.query(
    "SELECT * FROM User WHERE google_id = $1",
    [googleId]
  );

  if (existing.rows.length > 0) {
    return existing.rows[0];
  }

  const inserted = await pool.query(
    `INSERT INTO User (google_id, email, name, provider)
     VALUES ($1, $2, $3, 'google')
     RETURNING *`,
    [googleId, email, name]
  );

  return inserted.rows[0];
}

