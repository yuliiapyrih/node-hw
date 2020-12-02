const { Router }= require('express');
const userController=require('../controllers/user.controller');
const userMiddleware=require('../middlewares/user.middleware')
const userRouter=Router();

userRouter.get('/:id_user',userMiddleware.isLogin,userController.getUsers);
userRouter.delete('/', userController.deleteUser)

module.exports=userRouter;

