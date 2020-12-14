const db = require('../dataBase').getInstance();


module.exports={
    getInfoUsers:()=>  {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    findUser:(emailUser)=>{
        const UserModel = db.getModel('User');

        return UserModel.findOne(
            {
                where:{
                    email:emailUser
                }
            });
    },

    findUserById:(id_user)=>{
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findOne(
            {
                where:{
                    id:id_user
                },
                include: [{ model: UserModel, as: 'user' }]
            });
    },
    
    getInfoUserById:(id_user)=> {
        const UserModel = db.getModel('User');

        return UserModel.findOne(
            {
                where:{
                    id:id_user
                }
            });
    },

    delUser:(id_user)=>{
        const UserModel = db.getModel('User');
        
        return UserModel.destroy(
            {
                where:{
                    id:id_user
                }
            });
    },


    insertUser:(info)=>{
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        UserModel.create(
            {
                nameuser:info.name,
                email: info.email,
                password: info.password
            });
        CarModel.create(
            {
                model:info.car.model
            });
            return
    }
}