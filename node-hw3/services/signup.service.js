const userInfo= require('../dataBase/usersInfo');

module.exports={
    insertUser:(info)=>{
        userInfo.push(info);
    }
}