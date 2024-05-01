// ENV variable
require("dotenv").config();

// Import Logger
import Logger from "./database/logger";

// Import DB
import mongoDB from "./database/app";

// Import middlewares
import handleError from "./middlewares/handleError";

import express from "express";
import cors from "cors";
import routerJovem from "./routes/jovem.routes";

// Routes

async function main() {
  const app = express();
  const port = 4000;

  app.get("/", (req, res) => {
    res.send("Olá realiize!");
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(routerJovem);

  app.use(handleError);

  app.listen(port, async () => {
    Logger.info(`🚀 Projeto rodando no endereço: http://127.0.0.1:${port}`);

    mongoDB.createConection();
  });
}

main().catch((error) => {
  Logger.error("🥵 Erro!");
  Logger.error(error);
});
