import express from "express";
import cron from 'node-cron'
import highlightedEmail from "./EmailService/highlighted";
import newUserMail from "./EmailService/mailservice";
import resetPasswordEmail from "./EmailService/resetPassword";

const app = express()


cron.schedule('*/10 * * * * *', async() => {
    // console.log('running a task every 10 Second');  
    await newUserMail();
    await highlightedEmail();
    await resetPasswordEmail();
    
});
app.listen(4500, ()=>{
    console.log('Background service is running on port 4500...');

})