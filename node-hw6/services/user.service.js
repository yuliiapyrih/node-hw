const db = require('../dataBase').getInstance();

module.exports = {
    getInfoUsers:()=>  {
        const UserModel = db.getModel('User');

        return UserModel.findAll({});
    },

    findUser:(email)=>{
        const UserModel = db.getModel('User');

        return UserModel.findOne(
            {
                where:{
                    email:email
                }
            });
    },

    findUserById: (id_user) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne(
            {
                where:{
                    id:id_user
                }
            });
    },
    
    getInfoUserById: (id_user) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne(
            {
                where:{
                    id:id_user
                }
            });
    },

    delUser: (id_user) => {
        const UserModel = db.getModel('User');
        
        return UserModel.destroy(
            {
                where:{
                    id:id_user
                }
            });
    },

    insertUser: (info) => {
        const UserModel = db.getModel('User');

        return UserModel.create(
            {
                nameuser: info.name,
                email: info.email,
                password: info.password
            });
    },

    updateInfoUser: (id_user, info) => {
        const UserModel = db.getModel('User');

        return UserModel.update(
            info,
            { 
                where: {
                     id: id_user 
                    } 
            }
        )
    
    }
};