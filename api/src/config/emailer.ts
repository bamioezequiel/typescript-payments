import nodemailer from "nodemailer";

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "gmail",
    port: 2525,
    auth: {
      user: "ezetestpf@gmail.com",
      pass: "test123456789",
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
