const userService = require('../services/user.service');

const { hash } = require('../helper/password.helper');

module.exports={
    getUsers: async (req,res)=>{
        try {
            const users = await userService.getInfoUsers();
            
            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req,res) => {
        try {
            const { id_user } = req.params;

            const userById = await userService.getInfoUserById(id_user);
            
            res.json(userById);
        } catch (error) {
            next(error);
        }
    },

    updateUser: async (req,res) => {
        try {
            const { id_user } = req.params;

            req.body.password = await hashPassword(user.password);

            await userService.updateInfoUser(id_user, req.body);

            res.json('User update');
        } catch (e) {
            
        }
    },

    deleteUser: async (req,res) => {
        try {
            const { id_user } = req.params;

            await userService.delUser(id_user);

            res.json("User delete");
        } catch (error) {
            next(error);
        }
    },
    
    createUser: async (req,res) => {
        try {
            const password = await hash(req.body.password);

            await userService.insertUser(...req.body, password);

            res.json("User created");
        } catch (error) {
            next(error);
        }
    }
};