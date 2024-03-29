import Joi from "joi";

export const commentValidator = Joi.object({

    id:Joi.string().required().messages({
        "string.empty":"id cannot be empty"
    }),
    comment:Joi.string().required().messages({
        "string.empty":"Provide a comment"
    }),
    answer_id:Joi.string().required().messages({
        "string.empty":"Give the  answer id its referencing"
    }),
    user_id :Joi.string().required().messages({
        "string.empty":"User id is very much required"
    })

})