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
    secret: process.env.JWT_SECRET!,
  },
};

