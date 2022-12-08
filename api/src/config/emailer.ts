import nodemailer from "nodemailer";

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3ed050cff83cbc",
      pass: "eeb750987ba081",
    },
  });
  return transport;
};

export const sendMail = async (emails: Array<string>, message: string) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: "<example@example.com>",
    to: emails,
    subject: "Welcome",
    html: message,
  });

  console.log(info);
};
