const carService = require('../services/car.service');

const { ErrorHandler, errors } = require('../error');
const { BAD_REQUEST } = require('../configs/errors-code');
const { idValidator, newCarValidator } = require('../validators');

module.exports={
    checkUserWithCarId: async (req,res,next) => {
        try {
            const { id_user } = req.params;

            const { error } = idValidator.validate(id_user);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            const findUserId = await carService.findUserById(id_user);

            if(!!findUserId){
                throw new ErrorHandler(errors.HAS_NO_USER.message, errors.HAS_NO_USER.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    isInfoCar: (req,res,next) => {
        try {
            const { error } = newCarValidator.validate(req.body);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (error) {
            next(error);
        }
    }
};