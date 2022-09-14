const Joi = require('@hapi/joi')
const userSchema = Joi.object({
    userName:  Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    DOB: Joi.date().less('12-31-2020').required(),
    userPassword: Joi.string().min(5).max(15).required(),
    profilePicture: Joi.string().required()
})

module.exports={
    userSchema
}