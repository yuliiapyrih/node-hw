const db = require('../dataBase').getInstance();


module.exports={
    getInfoUsersWithCar:()=>  {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    findUserWithCarById:(id_user)=>{
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
    
    getInfoUserWithCarById:(id_user)=> {
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

    insertCar:(id_user,model)=>{
        const CarModel = db.getModel('Car');
        
        return CarModel.create(
            {
                model:modelCar,
                user_id:id_user
            });
    }
}