import { Router } from "express";
import { addComment, deleteComment, getAllCommentByAnswerId, getAllComments, getCommentsByUserId, getSingleComment } from "../controllers/comments";
import { verifyToken } from "../middlewares/verifyToken";

const commentRouter = Router()
commentRouter.post('',verifyToken, addComment)
commentRouter.get('', getAllComments)
commentRouter.get('/user/:id', getCommentsByUserId)
commentRouter.get('/:id', getSingleComment)
commentRouter.delete('/:id', deleteComment)
commentRouter.get('/answer/:id', getAllCommentByAnswerId)


export default commentRouter