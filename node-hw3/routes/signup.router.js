const { Router }= require('express');
const signupController=require('../controllers/signup.controller');
const signupMiddleware=require('../middlewares/signup.middleware');

const signupRouter=Router();

signupRouter.get('/',signupController.getUserPage);
signupRouter.post('/',signupMiddleware.isDataBase,signupMiddleware.isInfoUser,signupMiddleware.isCreatedUser,signupController.createUser);

module.exports=signupRouter;