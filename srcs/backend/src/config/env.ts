import { readSecret } from "../lib/secrets.ts"

const dbPassword = readSecret("/run/secrets/postgres_user_password")
const jwtSecret = readSecret("/run/secrets/jwt_secret")

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  nodeEnv: required("NODE_ENV"),

  postgres: {
    user: required("POSTGRES_USER"),
    host: required("POSTGRES_HOST"),
    db: required("POSTGRES_DB"),
    port: Number(required("POSTGRES_PORT")),
    url: `postgresql://${required("POSTGRES_USER")}:${dbPassword}@database:${required("POSTGRES_PORT")}/${required("POSTGRES_DB")}?schema=public`,
  },

  google: {
    callbackUrl: required("GOOGLE_CALLBACK_URL"),
  },

  frontend: {
    url: required("FRONTEND_URL"),
    port: required("FRONTEND_PORT"),
  },

  backend: {
    port: required("BACKEND_PORT"),
  },

  jwt: {
    secret: jwtSecret,
  },
};

