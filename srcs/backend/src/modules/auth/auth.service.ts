import { googleClient } from "../../config/oauth.ts";
import { findOrCreateGoogleUser } from "../user/user.repository.ts";

export async function handleGoogleCallback(code: string) {
  const { tokens } = await googleClient.getToken(code);
  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token!,
    audience: googleClient._clientId,
  });

  const payload = ticket.getPayload();
  if (!payload || !payload.sub || !payload.email) {
    throw new Error("Invalid Google payload");
  }

  const user = await findOrCreateGoogleUser(payload.sub, payload.email, payload.name);

  return user;
}
