import { Request, Response } from "express";
import crypto from "crypto";
import { googleClient } from "../../config/oauth";
import { handleGoogleCallback } from "./auth.service";
import { signJwt } from "../../lib/jwt";
import { env } from "../../config/env";

export function googleLogin(req: Request, res: Response) {
  const state = crypto.randomUUID();

  const url = googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    state,
  });

  res.redirect(url);
}

export async function googleCallback(req: Request, res: Response) {
  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).send("Invalid code");
  }

  const user = await handleGoogleCallback(code);

  const token = signJwt({ userId: user.id });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  res.redirect(env.frontend.url);
}
