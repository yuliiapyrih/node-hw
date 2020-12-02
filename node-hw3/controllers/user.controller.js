const userService=require('../services/user.service');
const {currentUserEmail}=require('../dataBase/constans');

module.exports={
    getUsers:(req,res)=>{
        const usersInfo = userService.getInfoUsers();
        res.render('users',{usersInfo});
    },

    getUserById:(req,res)=>{
        try {
            const {id_user}=req.params;
        
            if (!userInfo) {
                throw new Error('There is no such user!!!')
            }

            if(id_user<0){
                throw new Error('The parameter is less than 0!!!');
            }
            const userInfo= userService.getInfoUserById(id_user);
            
            res.render('users',{userInfo});
        } catch (error) {
            res.json(error.message);
        }
    },

    deleteUser:(req,res)=>{
        userService.delUser(currentUserEmail);
    }
}