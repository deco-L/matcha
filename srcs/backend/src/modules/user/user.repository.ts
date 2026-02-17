import { prisma } from "../../lib/prisma.ts";

export async function findOrCreateGoogleUser(
  googleId: string,
  email: string,
  name?: string
) {
  let user = await prisma.user.findUnique({
    where: { googleId },
  });

  if (user) return user;

  user = await prisma.user.create({
    data: {
      googleId,
      email,
      name,
      provider: "google",
    },
  });

  return user;
}
