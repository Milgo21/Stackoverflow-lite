import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const mailConfig = {
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
};


export default mailConfig