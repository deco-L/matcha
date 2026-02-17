import { OAuth2Client } from "google-auth-library";
import { readSecret } from "../lib/secrets";
import { env } from "./env";

const clientId = readSecret("/run/secrets/google_client_id");
const clientSecret = readSecret("/run/secrets/google_client_secret");

export const googleClient = new OAuth2Client(
  clientId,
  clientSecret,
  env.google.callbackUrl
);

export { clientId };

