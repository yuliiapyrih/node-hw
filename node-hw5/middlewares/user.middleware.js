const userService = require('../services/user.service');
const {ErrorHandler,errors:{NOT_VALID_BODY,NOT_VALID_ID,USER_ALREADY_EXISTS,HAS_NO_USER}} = require('../error');
const errors = require('../error/errors');

module.exports={

    checkUserId:async (req,res,next)=>{
        try {
            const {id_user}=req.params;

            if(id_user<1){
                throw new ErrorHandler(NOT_VALID_ID.message,NOT_VALID_ID.code);
            }

            const findUserId= await userService.findUserById(email);

            if(!!findUserId){
                throw new ErrorHandler(HAS_NO_USER.message,HAS_NO_USER.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    isInfoUser:(req,res,next)=>{
        try {
            const user=req.body;

            if(!user.email ||  !user.name){
                throw new ErrorHandler(NOT_VALID_BODY.message,NOT_VALID_BODY.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    },
    isCreatedUser:async (req,res,next)=>{
        try {
            const {email}=req.body;
            
            const findUs= await userService.findUser(email);

            if(!!findUs){
                throw new ErrorHandler(USER_ALREADY_EXISTS.message,USER_ALREADY_EXISTS.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    } 
}