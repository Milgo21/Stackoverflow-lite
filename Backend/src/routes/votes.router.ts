import { Router } from "express";
import { addVote, getVoteById, getVotestoanAnswer, updateVote } from "../controllers/votes";
const votesRouter = Router()

votesRouter.post('', addVote);
votesRouter.patch('/answer/:id',updateVote)  
votesRouter.get('/:id',getVoteById)  
votesRouter.get('/answer/:id',getVotestoanAnswer)  
export default votesRouter
