import {Request, Response} from 'express'
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers"
import {QuestionValidator, updateQuestionValidator} from '../helpers/question'
import { Question, QuestionAsked } from '../models/questioninterface';


interface ExtendedRequest extends Request{
    body:{question_title:string,question_desc:string , question_trial:string , question_tags:string , user_id:string
    },
    // params:{id:String}
    // info:Question
    }



// Ask a question
export const askQuestion =async (req:Request, res:Response ) => {
    try {
        const id = uuid()

        const {question_title,question_desc , question_trial , question_tags } = req.body
        const question:QuestionAsked ={
            id:id,
            question_title,
            question_desc,
            question_trial ,
            question_tags,
            user_id:req.body.user.id
        }
        const {error} = QuestionValidator.validate(question)
            if (error)
                return res.status(422).json(error.details[0].message);
        const newQuestion = await (await _db.exec("insertOrUpdateQuestion",{id,question_title,question_desc , question_trial , question_tags , user_id:req.body.user.id})).recordset[0]
        if (newQuestion) {
            
            res.status(201).json(newQuestion)
        } else {
            res.status(500).json({message:"Cannot ask question"})
        }


    } catch (error) {
        res.status(500).json(error)
    }
}


// Get all questions

export const getQuestions =async (req:ExtendedRequest, res:Response) => {
    try {
        const questions = (await _db.exec("getAllQuestions")).recordset
        if (questions) {
            res.status(200).json(questions)
        } else {
            res.status(200).json({message:"There are no questions"})
        }



    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a single question 

export const getSingleQuestion =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const singleQuestion = await (await _db.exec('getQuestionById',{id})).recordset[0];
        if (!singleQuestion) {
            res.status(500).json({message:"Enter a valid id"})
        } else {
            res.status(200).json(singleQuestion)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// Delete a question 

export const deleteQuestion =async (req:ExtendedRequest, res:Response) => {
    try {
        const id =req.params.id
        const questionFound = await _db.exec('getQuestionById',{id});
        if (!questionFound) {
            await _db.exec('deleteQuestion',{id})
            res.status(200).json({message:"Question deleted succesfully"})
        } else {
            res.status(404).json({message: "Question is 404, enter valid id"})
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// Update a single question

export const updateQuestion =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const {question_title,question_desc , question_trial , question_tags } = req.body
        const {error} = updateQuestionValidator.validate(req.body)
        if (error)
            return res.status(422).json(error.details[0].message);
            const questionFound:Question = await (await _db.exec('getQuestionById',{id})).recordset[0];
        if (!questionFound) {
            res.status(404).json({message: "Question is 404, cannot update a question that is absent"})
        } else {
            await _db.exec('updateQuestion',{id,question_title,question_desc , question_trial , question_tags })
            res.status(200).json({message:"Question updated succesfully"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get full question details 

export const getSIngleQuestionFullDetails =async (req:Request, res:Response) => {
    try {
        const question_id = req.params.id
        const fullq = (await _db.exec('GetQuestionDetails', { question_id })).recordset
        if (fullq.length < 1) {
            res.status(404).json({message: "Question is 404, cannot get details"})
        } else {
            res.status(200).json(fullq)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}