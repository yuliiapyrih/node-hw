const {isLoginOk}=require('../dataBase/constans');

module.exports={
    isLogin:(req,res,next)=>{
        try {
            if (!isLoginOk) {
                throw new Error('This page is not available!!!!!!!');
            }
            next();
        } catch (error) {
            res.json(e.message)
        }
        
    }
}