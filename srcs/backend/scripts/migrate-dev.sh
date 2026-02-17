#!/bin/sh
set -e

DB_PASSWORD=$(cat /run/secrets/postgres_user_password)

export DATABASE_URL="postgresql://${POSTGRES_USER}:${DB_PASSWORD}@database:5432/${POSTGRES_DB}"

npx prisma migrate dev "$@"
