import express from "express";
import cron from 'node-cron'

const app = express()



app.listen(4500, ()=>{
    console.log('Background s is running on port 4500...');
    
})