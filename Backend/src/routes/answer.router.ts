import { Router } from "express";
import { answerQuestion, getAllAnswers, getAnswersByQuestionId } from "../controllers/answer";


const answerRouter = Router()
answerRouter.post('', answerQuestion)
answerRouter.get('', getAllAnswers)
answerRouter.get('/question/:id', getAnswersByQuestionId)

export default answerRouter