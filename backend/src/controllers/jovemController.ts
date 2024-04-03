import { Request, Response } from "express";
import mongoose from "mongoose";
import Logger from "../database/logger";
import { Jovem, IJovem } from "../models/Jovem";

const JovemController = {
  async createJovem(req: Request, res: Response) {
    const { name, email, idea, phone, age, nicho, budget, company } = req.body;
    console.log(name, email, idea, phone, age, nicho, budget, company);

    const jovemObj: IJovem = {
      name,
      email,
      idea,
      phone,
      age,
      nicho,
      budget,
      company,
    };

    if (await Jovem.findOne({ $or: [{ email: email }] })) {
      return res.status(422).json("Email já cadastrado!");
    } else {
      try {
        const jovem = await Jovem.create(jovemObj);

        // const zap = await sender.sendText(telefone, message);

        Logger.info("Cadastrado com sucesso!");
        return res.status(201).json({
          success: true,
          msg: "Cadastrado com sucesso!",
          jovem: jovem,
        });
      } catch (error) {
        Logger.error(error);
        return res
          .status(500)
          .json({ success: false, msg: "Ops, algo deu errado" });
      }
    }
  },
};

export default JovemController;
