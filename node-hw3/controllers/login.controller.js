const loginService=require('../services/login.service');
let {isLoginOk,currentUserEmail}=require('../dataBase/constans');

module.exports={
    loginUser:(req,res)=>{
        const {email}=req.body;

        currentUserEmail=email;
        isLoginOk=true;

        res.redirect('/users');
    }
}