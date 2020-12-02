const userInfo= require('../dataBase/usersInfo');
const fs = require("fs");
const path=require('path');

module.exports={
    isDataBase:(req,res,next)=>{
        try {
            if(!!userInfo){
                userInfo=[];
                fs.writeFileSync(path.join(process.cwd,'dataBase','usersInfo.js'), `module.exports=${userInfo}`,(err)=>{
                    if (err) throw err;
                });
            }
            next();
        } catch (error) {
            res.json(error.message);
        }
        
    },
    checkEmailAndPassword:(req,res,next)=>{
        try {
            const {user}=req.body;
        if(!user.email || !user.password){
            throw new Error('You have not filled out the form!!!!!!');
        }
        next();
        } catch (error) {
            res.json(error.message)
        }
        
    },
    isFindUser:(req,res,next)=>{
        try {
            const {user}=req.body;
            if(!userInfo.find(user.email===email&&user.password===password)){
                throw new Error('Wrong email or password!!!!!!');
            }
            next();
        } catch (error) {
            res.json(error.message)
        }
        
    } 
}
