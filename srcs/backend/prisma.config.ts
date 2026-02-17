import "dotenv/config";
import { env } from "./src/config/env.ts";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env.postgres.url,
  },
});
