import Joi from "joi";

export const answerValidator = Joi.object({
    id:Joi.string().required().messages({
        "string.empty":"id cannot be empty"
    }),
    answer:Joi.string().required().messages({
        "string.empty":"Provide the answer"
    }),
    question_id:Joi.string().required().messages({
        "string.empty":"Give your answer a question id"
    }),
    user_id :Joi.string().required().messages({
        "string.empty":"User id is very much required"
    })


})