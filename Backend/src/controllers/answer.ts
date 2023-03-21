import {Request, Response} from 'express'
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers"
import { answerValidator } from '../helpers/answer';


interface ExtendedRequest extends Request{
    body:{
        answer:string,
        question_id:string ,
        user_id:string
    
    },
    // params:{id:String}
    // info:Question
    }

// Answer a question 
export const answerQuestion =async (req:Request, res:Response) => {
    try {
        const id = uuid()
        const{ answer, question_id} = req.body
        const newanswer = {
            id:id,
            answer,
            question_id, 
            user_id:req.body.user.id
        }
        const  {error} = answerValidator.validate(newanswer);
        if (error) {
            return res.status(422).json(error.details[0].message);
        } 
            const answered = await _db.exec('insertAnswer',{id,answer,question_id,user_id:newanswer.user_id})
        if (answered) {
            res.status(200).json({message: "You answer was well received"})
        } else {
            res.status(500).json({message:"Cannot answer questiona at this moment"})
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get all answers 
export const getAllAnswers =async (req:ExtendedRequest, res:Response) => {
    try {
        const answers = await (await _db.exec("getAllAnswers")).recordset
        if(!answers){
            res.status(404).json({message:"Answers are 404 at the moment"})
        }
        res.status(200).json(answers)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get answers by question id 

export const getAnswersByQuestionId =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const questionFound = await _db.exec('getQuestionById', {id})
        // console.log(questionFound);
        
        if (questionFound) {
            const question_id = req.params.id
            const answers = await (await _db.exec('getAnwersByQuestionId', {question_id})).recordset
            if (answers) {
                res.status(200).json(answers)
            } else {
                res.status(404).json({message: "Question does not have answers"})
            }
        } else {
                res.status(404).json({message: "Question does not exist"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get answers by answer user id

export const getAnswersByUserId =async (req:ExtendedRequest,res:Response) => {

    try {
        const id = req.params.id
        const user_id = req.params.id
        const userFound = await (await _db.exec('getUserById', {id})).recordset
        if (userFound) {
            const answers = (await _db.exec('getAnswersByUserId', {user_id})).recordset
            if (answers) {
                res.status(200).json(answers)
            } else {
                res.status(404).json({message: "There are no given answers by this user"})
            }
        } else {
            res.status(404).json({message: "User does not exist"})
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get answer by answer id

export const getAnswerById =async (req:ExtendedRequest, res:Response) => {
    try {
        
        const id = req.params.id
        const answer = await (await _db.exec('getAnswerById',{id})).recordset
        if(answer.length > 0){
            res.status(200).json(answer)
        }else{

            res.status(404).json({message:"Answer not found"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Highlight an answer 

export const highlightAnswer =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const answerFound = (await _db.exec('getAnswerById', {id})).recordset
        // console.log(answerFound);
        
        if (answerFound.length > 0) {
            const highlight = await _db.exec('highlightAnswer', {id})
            if (highlight) {
                res.status(200).json({message:"Answer highlighted"})
            } else {
                res.status(200).json({messages:"Cannot highlight at the moment"})
            }
        } else {
            res.status(404).json({message: "No such answer exists"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// Delete an answer 

export const deleteAnswer =async (req:ExtendedRequest, res:Response) => {
    try {
        const id =req.params.id
        const answerFound = await (await _db.exec('getAnswerById',{id})).recordset
        if (answerFound.length > 0) {
            await _db.exec('deleteAnswer', {id})
            res.status(200).json({message: "Answer has been deleted"})
        } else {
            res.status(404).json({message: "Answer does not exist"})
        }

    } catch (error) {
        res.status(500).json(error)
    }
}