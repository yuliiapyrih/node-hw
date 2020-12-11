const userService=require('../services/user.service');

module.exports={

    checkUserId:async (req,res,next)=>{
        try {
            const {id_user}=req.params;

            if(id_user<1){
                throw new Error('The parameter is less than 1!!!');
            }

            const findUserId= await userService.findUserById(email);

            if(!!findUserId){
                throw new Error('A user with this id');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    isInfoUser:(req,res,next)=>{
        try {
            const user=req.body;

            if(!user.email ||  !user.name){
                throw new Error('You have not filled out the form!!!!!!');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    isCreatedUser:async (req,res,next)=>{
        try {
            const {email}=req.body;
            
            const findUs= await userService.findUser(email);

            if(!!findUs){
                throw new Error('A user with this email already exists');
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    } 
}