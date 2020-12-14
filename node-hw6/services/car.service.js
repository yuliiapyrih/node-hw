const db = require('../dataBase').getInstance();


module.exports = {
    getUsersWithCar: () => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    findUserById: (id_user) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findOne(
            {
                where:{
                    user_id:id_user
                },
                include: [{ model: UserModel, as: 'user' }]
            });
    },
    
    getInfoById: (id_user) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findOne(
            {
                where:{
                    user_id:id_user
                },
                include: [{ model: UserModel, as: 'user' }]
            });
    },

    insertCar: (id_user, modelCar) => {
        const CarModel = db.getModel('Car');
        
        return CarModel.create(
            {
                model:modelCar,
                user_id:id_user
            });
    }
};