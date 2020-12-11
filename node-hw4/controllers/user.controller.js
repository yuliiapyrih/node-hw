const userService=require('../services/user.service');

module.exports={
    getUsers: async (req,res)=>{
        try {
            const users = await userService.getInfoUsers();
            
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById:async(req,res)=>{
        try {
            const {id_user}=req.params;

            const userById = await userService.getInfoUserById(id_user);
            
            res.json(userById);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    deleteUser:async (req,res)=>{
        const {id}=req.params;

        const users = await userService.delUser(id);

        res.json("User delete");
    },
    
    createUser: async (req,res)=>{
        const user=req.body;

        await userService.insertUser(user);

        res.json("User created");

    }
}