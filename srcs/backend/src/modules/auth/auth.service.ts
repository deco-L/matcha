import { googleClient, clientId } from "../../config/oauth";
import { findOrCreateGoogleUser } from "../user/user.repository";

export async function handleGoogleCallback(code: string) {
  const { tokens } = await googleClient.getToken(code);
  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token!,
    audience: clientId,
  });

  const payload = ticket.getPayload()!;

  const user = await findOrCreateGoogleUser(
    payload.sub,
    payload.email!,
    payload.name!
  );

  return user;
}
