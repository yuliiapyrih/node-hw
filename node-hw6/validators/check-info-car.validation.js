const Joi = require('joi');

module.exports = Joi.object({
    modelCar: Joi.string().trim().alphanum().
            required()
});