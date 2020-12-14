const Joi = require('joi');

const {EMAIL,PASSWORD}=require('../configs/regex-user')

module.exports = Joi.object({
    name: Joi.string().trim().min(6)
            .max(15).alphanum().
            required(),
    email: Joi.string().trim().
            regex(EMAIL).required(),
    password: Joi.string().trim().
            min(8).regex(PASSWORD).required()
});