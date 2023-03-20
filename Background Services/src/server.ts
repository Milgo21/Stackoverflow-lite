import express from "express";
import cron from 'node-cron'
import newUserMail from "./EmailService/mailservice";

const app = express()


cron.schedule('*/10 * * * * *', async() => {
    // console.log('running a task every 10 Second');  
    await newUserMail();
    
});
app.listen(4500, ()=>{
    console.log('Background service is running on port 4500...');
    
})