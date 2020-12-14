const { Router } = require('express');

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id_user', userMiddleware.checkUserId, userController.getUserById);

userRouter.post('/', userMiddleware.isInfoUser,userMiddleware.isCreatedUser, userController.createUser);

userRouter.put('/:id_user', userMiddleware.checkUserId, userMiddleware.checkUpdateInfo, userController.updateUser)

userRouter.delete('/:id_user', userMiddleware.checkUserId, userController.deleteUser)

module.exports = userRouter;

