const Joi = require('joi');

const { PASSWORD } = require('../configs/regex-user')

module.exports = Joi.object({
    name: Joi.string().trim().min(6).max(15)
        .alphanum(),
    password: Joi.string().trim().min(8)
        .regex(PASSWORD)
});