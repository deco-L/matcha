import expressPkg from "express";
const { Request, Response } = expressPkg;

import crypto from "crypto";
import { googleClient } from "../../config/oauth.ts";
import { handleGoogleCallback } from "./auth.service.ts";
import { signJwt } from "../../lib/jwt.ts";
import { env } from "../../config/env.ts";

export function googleLogin(req: typeof Request, res: typeof Response) {
  const state = crypto.randomUUID();

  const url = googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    state,
  });

  res.redirect(url);
}

export async function googleCallback(req: typeof Request, res: typeof Response) {
  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).send("Invalid code");
  }

  // Prisma 対応: handleGoogleCallback 内で findOrCreateGoogleUser を呼ぶ
  const user = await handleGoogleCallback(code);

  const token = signJwt({ userId: user.id });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  res.redirect(env.frontend.url);
}
