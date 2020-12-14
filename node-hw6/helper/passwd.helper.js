const bcrypt = require('bcrypt');

const {errors:{NOT_VALID_EMAIL_OR_PASSWD},ErrorHandler} = require('../error')

module.exports={
    hash: (password) => bcrypt.hash(password,10),
    compare: async (password, hash) => {
        const isPasswordEquals = await bcrypt.compare(password, hash);

        if (!isPasswordEquals) {
            throw new ErrorHandler(NOT_VALID_EMAIL_OR_PASSWD.message, NOT_VALID_EMAIL_OR_PASSWD.code);
        }
    }
}