import { app } from "./app.ts";
import { env } from "./config/env.ts"

const PORT = env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
