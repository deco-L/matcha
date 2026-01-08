import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/healthz", (_req, res) => {
  res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`backend listening on port ${PORT}`);
});
