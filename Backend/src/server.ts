import express, {json} from 'express'
import cors from 'cors'
import userRouter from './routes/userroute.js';
const app = express()

app.use(json())
app.use(cors())

app.use('/auth/users', userRouter)



app.listen(process.env.PORT || 4000, ()=>{
    console.log('running on port 4000');
    
})


