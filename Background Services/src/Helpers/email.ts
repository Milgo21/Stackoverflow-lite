import nodemailer from 'nodemailer'
import mailConfig from '../Config/emailconfig';


function createTransporter(config: any) {
    return nodemailer.createTransport(config);
  }
  
export const sendEmail = async(messageOptions:any)=>{
      let transporter =createTransporter(mailConfig)
      await transporter.verify()
      await transporter.sendMail(messageOptions, (err, info)=>{
          console.log(info);
      })
}

export default sendEmail