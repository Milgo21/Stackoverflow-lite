import {Request, Response} from 'express'
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers"
import { answerValidator } from '../helpers/answer';
import { Question } from '../models/questioninterface';


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
export const answerQuestion =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = uuid()
        const{ answer, question_id, user_id} = req.body
        const  {error} = answerValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error.details[0].message);
        } 
            const answered = await _db.exec('insertAnswer',{id,answer,question_id,user_id})
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