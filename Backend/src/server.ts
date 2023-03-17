import express, {json} from 'express'
import cors from 'cors'
import userRouter from './routes/userroute.js';
import questionRouter from './routes/question.router.js';
import answerRouter from './routes/answer.router.js';
import commentRouter from './routes/comments.router.js';
import votesRouter from './routes/votes.router.js';
const app = express()

app.use(json())
app.use(cors())

app.use('/auth/users', userRouter)
app.use('/auth/question', questionRouter)
app.use('/auth/answer', answerRouter)
app.use('/auth/comment', commentRouter)
app.use('/auth/vote', votesRouter)


app.listen(process.env.PORT || 4000, ()=>{
    console.log('running on port 4000');
    
})


