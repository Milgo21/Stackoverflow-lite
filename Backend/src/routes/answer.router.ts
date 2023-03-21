import { Router } from "express";
import { answerQuestion, deleteAnswer, getAllAnswers, getAnswerById, getAnswersByQuestionId, getAnswersByUserId, highlightAnswer } from "../controllers/answer";
import { verifyToken } from "../middlewares/verifyToken";


const answerRouter = Router()
answerRouter.post('',verifyToken, answerQuestion)
answerRouter.get('', getAllAnswers)
answerRouter.get('/:id', getAnswerById)
answerRouter.delete('/:id', deleteAnswer)
answerRouter.get('/question/:id', getAnswersByQuestionId)
answerRouter.get('/user/:id', getAnswersByUserId)
answerRouter.put('/highlight/:id', highlightAnswer)
export default answerRouter