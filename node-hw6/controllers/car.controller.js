const carService = require('../services/car.service');

module.exports = {
    getUsersWithCar: async (req,res) => {
        try {
            const usersWithCar = await carService.getInfo();
            
            res.json(usersWithCar);
        } catch (e) {
            next(e);
        }
    },

    getUserWithCarById: async (req,res) => {
        try {
            const { id_user } = req.params;

            const userById = await carService.getInfoById(id_user);
            
            res.json(userById);
        } catch (error) {
            next(error);
        }
    },
    
    createCar: async (req,res) => {
        try {
            const { modelCar } = req.body;

            const { id_user } = req.params;

            await carService.insertCar(id_user, modelCar);

            res.json("Car created");
        } catch (error) {
            next(error);
        }
    }
};