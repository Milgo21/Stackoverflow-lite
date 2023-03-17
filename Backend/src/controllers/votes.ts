import {Request, Response} from 'express'
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers"
import { voteValidator } from '../helpers/votes'



interface ExtendedRequest extends Request{
    body:{vote:number, answer_id:string,user_id:string
    },
    // params:{id:String}
    // info:Question
    }



    // Add a new vote
export const addVote =async (req:Request, res:Response) => {
    try {
        const id = uuid()
        const {vote, answer_id,user_id} = req.body
        const {error} = voteValidator.validate(req.body)
        if(error){
            res.status(422).json(error.details[0].message);
        }
        const upvoteSuccess = (await _db.exec('insertOrUpdateVote', { id, vote, answer_id, user_id })).recordset[0]
        if (upvoteSuccess) {
            res.status(200).json(upvoteSuccess)
        } else {
            res.status(500).json({message:"Cannot vote, co ask chebukati"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}




// Get a vote by id 
export const getVoteById =async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const singleVote = (await _db.exec('getVoteById',{id})).recordset[0]
        if (singleVote) {
            res.status(200).json(singleVote)
        } else {
            res.status(404).json({message: "No such vote existss"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get all votes by answer id 
export const getVotestoanAnswer =async (req:Request,res:Response) => {
    try {
        const answer_id = req.params.id
        const answerVotes = (await _db.exec('getVotesByAnswerId', { answer_id })).recordset[0]
        if (answerVotes) {
            res.status(200).json(answerVotes)
        } else {
            res.status(404).json({message: "No one has bothered to vote for this answer"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}




//update vote ,can be downvote or upvote

export const updateVote =async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {vote, answer_id,user_id} = req.body
        const voteExists = (await _db.exec('getVoteById',{id})).recordset
        if (voteExists.length > 0) {


            const {error} = voteValidator.validate(req.body)
            if(error){
                res.status(422).json(error.details[0].message);
                
            }else{

            const voteUpdated = await (await _db.exec('insertOrUpdateVote',{id,vote, answer_id,user_id})).recordset[0]
            if (voteUpdated) {
                res.status(200).json(voteUpdated)
            } else {
                res.status(500).json({message: "There was an error updating"})
            }
            }


        } else {
            res.status(404).json({message: "No such vote exist"})
        }


    } catch (error) {
        res.status(500).json(error)
    }
}