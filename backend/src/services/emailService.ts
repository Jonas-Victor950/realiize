import nodemailer from "nodemailer";

// Configurações do serviço de e-mail (no exemplo, usei o Gmail)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "jonasvpsouza950@gmail.com",
    pass: "toni ocdi igau murp",
  },
});

// Função para enviar e-mail
export async function sendEmail(emailText: any) {
  // Configurações do e-mail a ser enviado
  const info = await transporter
    .sendMail({
      from: '"Jonas Victor 👻" <jonasvpsouza950@gmail.com>', // sender address
      to: "jonasvictor950@gmail.com", // list of receivers
      subject: "Documento para Aprovação - BRC", // Subject line
      text: `${emailText}`, // plain text body
      html: `${emailText}`, // html body
    })
    .then(() => console.log("Email enviado com sucesso!"))
    .catch((err) => console.log("Erro ao enviar email: ", err));
}
