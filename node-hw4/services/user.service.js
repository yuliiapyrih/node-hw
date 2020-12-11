const db = require('../dataBase').getInstance();

const UserModel = db.getModel('User');

module.exports={
    getInfoUsers:()=>  {
        return UserModel.findAll();
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
        return UserModel.findOne(
            {
                where:{
                    id:id_user
                }
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