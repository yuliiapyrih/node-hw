const { Router }= require('express');

const userController=require('../controllers/user.controller');
const userMiddleware=require('../middlewares/user.middleware');

const userRouter=Router();

userRouter.get('/:id_user',userMiddleware.isLogin,userController.getUsers);

userRouter.post('/',userMiddleware.isDataBase,userMiddleware.isInfoUser,userMiddleware.isCreatedUser,userController.createUser);

userRouter.delete('/', userController.deleteUser)

module.exports=userRouter;

