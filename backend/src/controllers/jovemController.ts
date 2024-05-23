import { Request, Response } from "express";
import mongoose from "mongoose";
import Logger from "../database/logger";
import { Jovem, IJovem } from "../models/Jovem";
import { sendEmail } from "../services/emailService";

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
      return res.status(422).json({ errors: ["Email já cadastrado!"] });
    } else {
      try {
        const jovem = await Jovem.create(jovemObj);
        console.log(jovem);

        let emailText = null;
        let emailSubject = null;

        if (jovem.idea === null) {
          emailText = `
        <p>Fala lindooo </p>
        <p>Nome: ${jovem?.name} </p>
        <p>Email: ${jovem?.email} </p>
        <p>Telefone: ${jovem?.phone} </p>
        <p>Nicho: ${jovem?.nicho} </p>
        <p>Budget: ${jovem?.budget} </p>
        <p>Empresa ${jovem?.company} </p>
        `;

          emailSubject = "Cadastro de Cliente";
        } else {
          emailText = `
          <p>Fala lindooo </p>
          <p>Nome: ${jovem?.name} </p>
          <p>Email: ${jovem?.email} </p>
          <p>Ideia: ${jovem?.idea} </p>
          <p>Telefone: ${jovem?.phone} </p>
          <p>Idade: ${jovem?.age} </p>
        `;

          emailSubject = "Cadastro de Jovem";
        }

        const send = await sendEmail(emailText, emailSubject);

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
