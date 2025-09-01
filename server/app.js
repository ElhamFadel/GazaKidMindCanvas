import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { join } from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import env2 from "env2";

env2(".env");

const app = express();
const { NODE_ENV } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.disable("x-powered-by");

app.use([
  compression(),
  cors(),
  cookieParser(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ extended: false }),
]);

app.set("port", process.env.PORT || 8000);

app.use("/api/v1/", routes);

if (NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}

export default app;
