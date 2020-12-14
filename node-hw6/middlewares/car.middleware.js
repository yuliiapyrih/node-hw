const carService = require('../services/car.service');

const {ErrorHandler,errors:{NOT_VALID_BODY,NOT_VALID_ID,HAS_NO_USER}} = require('../error');
const {checkId,checkCar}=require('../validators');

module.exports={

    checkUserWithCarId:async (req,res,next)=>{
        try {
            const {id_user}=req.params;

            const {error} = checkId.validate(id_user);

            if(error){
                throw new ErrorHandler(NOT_VALID_ID.message,NOT_VALID_ID.code);
            }

            const findUserId= await carService.findUserWithCarById(id_user);

            if(!!findUserId){
                throw new ErrorHandler(HAS_NO_USER.message,HAS_NO_USER.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    isInfoCar:(req,res,next)=>{
        try {
            const {error}=checkCar.validate(req.body);

            if(error){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    }
}