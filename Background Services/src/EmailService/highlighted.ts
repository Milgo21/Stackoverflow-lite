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
interface Answer{
id :string
answer:string 
user_id :string
question_id:string 
is_highlighted:boolean
is_deleted:boolean
is_sent:boolean
date_created:string
}
interface HighlightUser{
    username:string
    email:string
}

const highlightedEmail =async () => {
    const pool = await mssql.connect(sqlConfig)
    const highlightedAnswers:Answer[] = (await pool.request().query("SELECT * FROM Answers WHERE is_highlighted ='1'")).recordset
    // console.log(highlightedAnswers);
    const highlightedUsers:HighlightUser[]= (await pool.request().execute('getHiglightedUser')).recordset
    // console.log(highlightedUsers);
    for (let answer of highlightedAnswers){
        // console.log(answer);
        for (let user of highlightedUsers){
            ejs.renderFile('Templates/highlighted.ejs', {name: user.username},async function (error:any,html:any) {
                console.log(html);
                
                const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Congrats your answer worked!!!!!",
                html
                };

                try {
                    await sendEmail(message);
                    await pool.request().query(`UPDATE Answers SET is_sent=1 WHERE id = '${answer.id}'`)
                } catch (error) {
                    console.log(error + "highlight");
                    
                }
            })
        }

    }
}


export default highlightedEmail