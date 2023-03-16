import {Request, Response} from 'express'
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers"
import { commentValidator } from '../helpers/comments'
interface ExtendedRequest extends Request{
    body:{
        comment:string,
        answer_id:string ,
        user_id:string
    
    }
    }

    // Add a new comment
export const addComment =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = uuid()
        const {comment, answer_id, user_id} = req.body
        const {error} = commentValidator.validate(req.body)
        if(error){
            return res.status(422).json(error.details[0].message);
        }
        const newComment = (await _db.exec('insertComment', { id, comment, answer_id, user_id })).recordset
        if(newComment){
            res.status(200).json(newComment)
        }else{
            res.status(500).json({message: "Cannot comment at the moment"})
        }


    } catch (error) {
        res.status(500).json(error)
    }
}

// Get all questions related to one answer using answer id 
export const getAllCommentByAnswerId =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const answer_id = req.params.id
        // getAllCommentsByAnswerId
        const answerFound = await (await _db.exec('getAnswerById',{id})).recordset[0];
        // console.log(answerFound);
        
        if (answerFound) {
            const comments = (await _db.exec('getAllCommentsByAnswerId', { answer_id })).recordset
            res.status(200).json(comments)
        } else {
            res.status(404).json({message: "No such answer exists"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



// Get a single comment by its id 
export const getSingleComment =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id 
        const comment = await (await _db.exec('getCommentById', {id})).recordset[0];
        if (comment) {
            res.status(200).json(comment)
        } else {
            res.status(404).json({message: "No such comment exists"})
        }



    } catch (error) {
        res.status(500).json(error)
    }
}


// Get all comments
export const getAllComments =async (req:ExtendedRequest, res:Response) => {
    try {
        const comments = (await _db.exec('getAllComments')).recordset
        if (comments) {
            res.status(200).json(comments)
        } else {
            res.status(404).json({message: "No comments exist"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get comments by user --comments for a single user
export const getCommentsByUserId =async (req:ExtendedRequest, res:Response) => {
const id = req.params.id
const user_id = req.params.id
try {
        
    // const userFound = await _db.exec('',{id})
    const userFound = (await _db.exec('getUserById', { id })).recordset[0]
        if (userFound) {
            const comments = (await _db.exec('getAllCommentsByUserId', { user_id })).recordset
            if (comments.length > 0) {
                res.status(200).json(comments)
            } else {
                res.status(404).json({message: "This user has not made any comments"})
            }
        }else{
            res.status(404).json({message: "User does not exist"})
        }
} catch (error) {
    res.status(500).json(error)
}

    
}


// Delete a comment 

export const deleteComment =async (req:ExtendedRequest, res:Response) => {
    const id = req.params.id 
    try {
        const commentFound = (await _db.exec('getCommentById', { id })).recordset[0]
        if (commentFound) {
            await _db.exec('deleteComment',{id})
            res.status(200).json({message: "Comment deleted successfully"})
        } else {
            res.status(404).json({message: "Comment does not exist bruvvvv"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}