import { app } from "./app";
import { env } from "./config/env"

const PORT = env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
