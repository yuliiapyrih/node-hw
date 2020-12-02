const usersInfo = require('../dataBase/usersInfo');
const userInfo= require('../dataBase/usersInfo');

module.exports={

    getInfoUsers:()=> userInfo,
    
    getInfoUserById:(id_user)=> userInfo[id_user],

    delUser:(email)=>{
        usersInfo.splice(userInfo.indexOf(userInfo.email),1);
    }
}