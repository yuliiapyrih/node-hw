const fs = require("fs");
const path=require('path');

const userInfo= require('../dataBase/usersInfo');
const {isLoginOk}=require('../dataBase/constans');

module.exports={
    isLogin:(req,res,next)=>{
        try {
            if (!isLoginOk) {
                throw new Error('This page is not available!!!!!!!');
            }

            next();
        } catch (error) {
            res.status(403).json(e.message)
        }
        
    },
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
    isInfoUser:(req,res,next)=>{
        try {
            const {user}=req.body;

            if(!user.email || !user.password || !user.username){
                throw new Error('You have not filled out the form!!!!!!');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    isCreatedUser:(req,res,next)=>{
        try {
            const {user}=req.body;

            if(!userInfo.find(user.email===email)){
                throw new Error('A user with this email already exists');
            }
            
            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    } 
}