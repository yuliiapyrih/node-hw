const Joi = require('joi');

module.exports = Joi.object({
    id_user: Joi.number().greater(0).integer()
        .required()
});