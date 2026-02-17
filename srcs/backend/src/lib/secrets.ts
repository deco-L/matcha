import fs from "fs";

export function readSecret(path: string): string {
  return fs.readFileSync(path, "utf8").trim();
}

