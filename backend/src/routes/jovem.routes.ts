import express from "express";
import JovemController from "../controllers/jovemController";
const routerJovem = express.Router();

routerJovem.post("/api/user", JovemController.createJovem);

export default routerJovem;
