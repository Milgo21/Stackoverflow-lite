import { Router } from "express";
import { askQuestion, deleteQuestion, getallQuestionFullDetails, getAllSingleUserQuizs, getQuestions, getSingleQuestion, getSIngleQuestionFullDetails, updateQuestion } from "../controllers/question";
import { verifyToken } from "../middlewares/verifyToken";
const questionRouter = Router()

questionRouter.post('/ask',verifyToken, askQuestion);
questionRouter.get('', getQuestions);
questionRouter.get('/:id', getSingleQuestion);
questionRouter.get('/all/quiz', verifyToken, getAllSingleUserQuizs);
questionRouter.delete('/:id', deleteQuestion);
questionRouter.put('/:id', updateQuestion);
questionRouter.get('/full/:id', getSIngleQuestionFullDetails);
questionRouter.get('/full/all/q', getallQuestionFullDetails);
export default questionRouter