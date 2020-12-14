const userService=require('../services/user.service');

module.exports={
    getUsers: async (req,res)=>{
        try {
            const users = await userService.getInfoUsers();
            
            res.status(201).json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById:async(req,res)=>{
        try {
            const {id_user}=req.params;

            const userById = await userService.getInfoUserById(id_user);
            
            res.json(userById);
        } catch (error) {
            next(error);
        }
    },

    deleteUser:async (req,res)=>{
        try {
            const {id}=req.params;

            await userService.delUser(id);

            res.json("User delete");
        } catch (error) {
            next(error);
        }
    },
    
    createUser: async (req,res)=>{
        try {
            const user=req.body;

            await userService.insertUser(user);

            res.json("User created");
        } catch (error) {
            next(error);
        }
    }
}