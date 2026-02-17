import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signJwt(payload: object) {
  return jwt.sign(payload, env.jwt.secret, {
    expiresIn: "7d",
  });
}

