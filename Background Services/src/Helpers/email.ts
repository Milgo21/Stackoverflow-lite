import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
console.log(process.env.SMTP_USER_EMAIL);
console.log(process.env.SMTP_USER_EMAIL);
const config = {
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
};

function createTransporter(config: any) {
  return nodemailer.createTransport(config);
}

export const sendEmail = async(messageOptions:any)=>{
    let transporter =createTransporter(config)
    await transporter.verify()
    await transporter.sendMail(messageOptions, (err, info)=>{
        console.log(info);
        
    })
}