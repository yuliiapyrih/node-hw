const userService = require('../services/user.service');

const { ErrorHandler, errors: { NOT_VALID_BODY, NOT_VALID_ID, USER_ALREADY_EXISTS, HAS_NO_USER } } = require('../error');
const { newUserValidator, idValidator, updateUserValidator } = require('../validators');
const { BAD_REQUEST } = require('../configs/errors-code')

module.exports = {
    checkUserId: async (req,res,next) => {
        try {
            const { id_user } = req.params;

            const { error} = idValidator.validate(id_user);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            const findUserId= await userService.findUserById(id_user);

            if(!!findUserId){
                throw new ErrorHandler(HAS_NO_USER.message, HAS_NO_USER.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    checkUpdateInfo: async (req,res,next) => {
        try {
            const { error } = updateUserValidator.validate(req.body);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e)
        }
    },

    isInfoUser: (req,res,next) => {
        try {
            const { error } = newUserValidator.validate(req.body);

            if(error){
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    isCreatedUser: async (req,res,next) => {
        try {
            const { email } = req.body;
            
            const isFind = await userService.findUser(email);

            if(!!isFind){
                throw new ErrorHandler(USER_ALREADY_EXISTS.message, USER_ALREADY_EXISTS.code);
            }

            next();
        } catch (error) {
            next(error);
        }
    } 
};