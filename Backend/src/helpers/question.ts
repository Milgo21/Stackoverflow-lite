import Joi, {ref} from "joi";

export const QuestionValidator = Joi.object({
    id:Joi.string().required().messages({
        "string.empty":"Id cannot be empty"
    }),
    question_title:Joi.string().required().messages({
        "string.empty":"Give your question a title"
    }),
    question_desc:Joi.string().required().messages({
        "string.empty":"Give your question a description"
    }),
    question_trial :Joi.string().required().messages({
        "string.empty":"Trial is required"
    }),
    question_tags :Joi.string().required().messages({
        "string.empty":"Tags are required"
    }),
    user_id :Joi.string().required().messages({
        "string.empty":"User id is very much required"
    }),


})


export const updateQuestionValidator = Joi.object({
    question_title:Joi.string().required().messages({
        "string.empty":"Give your question a title"
    }),
    question_desc:Joi.string().required().messages({
        "string.empty":"Give your question a description"
    }),
    question_trial :Joi.string().required().messages({
        "string.empty":"Trial is required"
    }),
    question_tags :Joi.string().required().messages({
        "string.empty":"Tags are required"
    })


})