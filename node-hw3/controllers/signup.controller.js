const signupService=require('../services/signup.service');
let {isLoginOk}=require('../dataBase/constans');

module.exports={
    getUserPage:(req,res)=>{res.render('signup');},
    
    createUser:(req,res)=>{
        const {email}=req.body;
        currentUserEmail=email;
        isLoginOk=true;
        signupService.insertUser(req.body);
        res.redirect('/users');
    }
}