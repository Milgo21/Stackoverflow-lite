import sendEmail from "../Helpers/email";
import { sqlConfig } from "../Config";
import mssql from 'mssql'
import dotenv from 'dotenv'
import path from 'path'
import ejs from 'ejs'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })


interface User{
id:string,
username:string,
email:string,
password:string,
is_deleted:string,
is_admin:string,
date_created:string,
welcome_sent: boolean,
forgot_sent :boolean
}


const newUserMail =  async () => {
    const pool = await mssql.connect(sqlConfig)
    const users: User[] = await (await pool.request().query("SELECT * FROM Users WHERE welcome_sent ='0'")).recordset

    for (let user of users) {
        ejs.renderFile('Templates/welcomeEmail.ejs', { name: user.username }, async (error: any, html: any) => {
            // console.log("html",html);
            // console.log("error",error);
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Welcome to Stackoverflow",
                html
            };

            try {
                await sendEmail(message)
                await pool.request().query(`UPDATE Users SET welcome_sent = 1 WHERE id ='${user.id}'`)
            } catch (error) {
                console.log(error);

            }
        })
    }
}

export default newUserMail