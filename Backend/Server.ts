const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example API route
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Cloud Run!" });
  });

  // Handle Next.js pages
  server.all("*", (req, res) => handle(req, res));

  server.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});