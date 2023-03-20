import sendEmail from "../Helpers/email";
import { sqlConfig } from "../Config";
import mssql from 'mssql'
import dotenv from 'dotenv'
import path from 'path'
import Jwt from 'jsonwebtoken'
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
const resetPasswordEmail =async () => {
    const pool = await mssql.connect(sqlConfig)
    const forgotUsers:User[] = (await pool.request().query('SELECT * FROM Users WHERE forgot_sent = 1')).recordset
    // console.log(forgotUsers);
    for(let user of forgotUsers){
        const secret = process.env.JWT_SECRET + user.password
        const payload = {
            email: user.email,
            id: user.id
        }
        const token = Jwt.sign(payload, secret, {expiresIn: "15m"})
        const link = `https://localhost:4000/reset/${token}`
        // console.log(link);
        ejs.renderFile("Templates/resetPassword.ejs", {name: user.username, link}, async (error,html)=>{
            const message = {
                from:process.env.EMAIL,
                to:user.email,
                subject: "You password reset request",
                html
            };
            try {
                await sendEmail(message)
                await pool.request().query(`UPDATE Users SET forgot_sent=0 WHERE id = '${user.id}'`)
                console.log(user.id + "maembe");
                
            } catch (error) {
                throw new Error("Error resetting password");
            }
        })
    }
    
}

export default resetPasswordEmail