const usersInfo = require('../dataBase/usersInfo');

module.exports={

    getInfoUsers:()=> userInfo,
    
    getInfoUserById:(id_user)=> userInfo[id_user],

    delUser:(email)=>{
        usersInfo.splice(userInfo.indexOf(email),1);
    },

    insertUser:(info)=>{
        userInfo.push(info);
    }
}