const db = require('../dataBase').getInstance();

const UserModel = db.getModel('User');
const CarModel = db.getModel('Car');

module.exports={
    getInfoUsers:()=>  {
        return CarModel.findAll({
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    findUser:(emailUser)=>{
        return UserModel.findOne(
            {
                where:{
                    email:emailUser
                }
            });
    },

    findUserById:(id_user)=>{
        return CarModel.findOne(
            {
                where:{
                    id:id_user
                },
                include: [{ model: UserModel, as: 'user' }]
            });
    },
    
    getInfoUserById:(id_user)=> {
        return UserModel.findOne(
            {
                where:{
                    id:id_user
                }
            });
    },

    delUser:(id_user)=>{
        return UserModel.destroy(
            {
                where:{
                    id:id_user
                }
            });
    },


    insertUser:(info)=>{
        return UserModel.create(
            {
                nameuser:info.name,
                email: info.email
            });
    }
}