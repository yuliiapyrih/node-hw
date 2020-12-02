const { Router }= require('express');
const loginController=require('../controllers/login.controller');
const loginMiddleware=require('../middlewares/login.middleware');

const loginRouter=Router();

loginRouter.get('/',loginController.pageLogin);
loginRouter.post('/',loginMiddleware.isDataBase,loginMiddleware.checkEmailAndPassword,loginMiddleware.isFindUser,loginController.loginUser);

module.exports=loginRouter;