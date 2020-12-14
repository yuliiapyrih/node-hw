const { BAD_REQUEST, FORBIDDEN } = require('../configs/errors-code');

module.exports = {
    NOT_VALID_ID:{
        message:'The parameter is less than 1!!!',
        code:BAD_REQUEST
    },

    HAS_NO_USER: {
        message:'Does not have a user with this id!',
        code:FORBIDDEN
    },

    NOT_VALID_BODY: {
        message:'You have not filled out the form!!!!!!',
        code:BAD_REQUEST
    },

    USER_ALREADY_EXISTS: {
        message:'There is already a user with this id!',
        code:FORBIDDEN
    },

    NOT_VALID_EMAIL_OR_PASSWD: {
        message:'Not valid email or password!!!!!!',
        code:BAD_REQUEST
    }
};