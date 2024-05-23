import nodemailer from "nodemailer";
import authDB from "../database/default";

// Configurações do serviço de e-mail (no exemplo, usei o Gmail)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: authDB.email,
    pass: authDB.code,
  },
});

// Função para enviar e-mail
export async function sendEmail(emailText: any, emailSubject: any) {
  console.log("message", emailText.idea, emailText);
  // Configurações do e-mail a ser enviado

  const info = await transporter
    .sendMail({
      from: '"Jonas Victor 👻" <jonasvpsouza950@gmail.com>', // sender address
      to: "realiize.comercial@gmail.com", // list of receivers
      subject: `${emailSubject}`, // Subject line
      text: `${emailText}`, // plain text body
      html: `${emailText}`, // html body
    })
    .then(() => console.log("Email enviado com sucesso!"))
    .catch((err) => console.log("Erro ao enviar email: ", err));
}
