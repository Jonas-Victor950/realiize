import express from "express";
import JovemController from "../controllers/jovemController";
const routerJovem = express.Router();

routerJovem.post("/jovem", JovemController.createJovem);

export default routerJovem;
