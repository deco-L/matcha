#!/bin/sh

DB_PASSWORD=$(cat /run/secrets/postgres_user_password)

export DATABASE_URL="postgresql://${POSTGRES_USER}:${DB_PASSWORD}@database:${POSTGRES_PORT}/${POSTGRES_DB}"

npx prisma generate
npx prisma migrate deploy

npm run dev
