import Joi from "joi";

export const voteValidator = Joi.object({
    vote:Joi.number().required().messages({
        "string.empty":"Provide a comment"
    }),
    answer_id:Joi.string().required().messages({
        "string.empty":"Give the answer id the vote is referencing"
    }),
    user_id :Joi.string().required().messages({
        "string.empty":"User id is very much required"
    })

})

// votes INT NOT NULL,
// answer_id VARCHAR(255) NOT NULL,
// user_id VARCHAR(255) NOT NULL,