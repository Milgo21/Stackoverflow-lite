import { Router } from "express";
import { askQuestion, deleteQuestion, getQuestions, getSingleQuestion, getSIngleQuestionFullDetails, updateQuestion } from "../controllers/question";
import { verifyToken } from "../middlewares/verifyToken";
const questionRouter = Router()

questionRouter.post('/ask',verifyToken, askQuestion);
questionRouter.get('', getQuestions);
questionRouter.get('/:id', getSingleQuestion);
questionRouter.delete('/:id', deleteQuestion);
questionRouter.put('/:id', updateQuestion);
questionRouter.get('/full/:id', getSIngleQuestionFullDetails);
export default questionRouter