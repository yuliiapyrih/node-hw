const { Router } = require('express');

const carController = require('../controllers/car.controller');
const carMiddleware = require('../middlewares/car.middleware');

const carRouter = Router();

carRouter.get('/',carController.getUsersWithCar);
carRouter.get('/:id_user',carMiddleware.checkUserWithCarId,carController.getUserWithCarById);

carRouter.post('/:id_user',carMiddleware.isInfoCar,carController.createCar);

module.exports = carRouter;