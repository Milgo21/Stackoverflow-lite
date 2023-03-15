import { Router } from "express";
import { askQuestion, deleteQuestion, getQuestions, getSingleQuestion } from "../controllers/question";
const questionRouter = Router()

questionRouter.post('/ask', askQuestion);
questionRouter.get('', getQuestions);
questionRouter.get('/:id', getSingleQuestion);
questionRouter.delete('/:id', deleteQuestion);

export default questionRouter