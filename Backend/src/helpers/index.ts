import Joi, { ref } from 'joi'




export const RegistrationSchema= Joi.object({
    username:Joi.string().required(),
    email:Joi.string().required().email().messages({
       'string.empty':' Please add a valid Email',
       'string.email':'Not a Valid Email'
   }),
   password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$'))
})