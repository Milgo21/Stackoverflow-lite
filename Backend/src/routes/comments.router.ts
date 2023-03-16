import { Router } from "express";
import { addComment, deleteComment, getAllCommentByAnswerId, getAllComments, getCommentsByUserId, getSingleComment } from "../controllers/comments";

const commentRouter = Router()
commentRouter.post('', addComment)
commentRouter.get('', getAllComments)
commentRouter.get('/user/:id', getCommentsByUserId)
commentRouter.get('/:id', getSingleComment)
commentRouter.delete('/:id', deleteComment)
commentRouter.get('/answer/:id', getAllCommentByAnswerId)


export default commentRouter