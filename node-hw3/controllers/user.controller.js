const userService=require('../services/user.service');

const {currentUserEmail}=require('../dataBase/constans');

module.exports={
    getUsers:(req,res)=>{
    const usersInfo = userService.getInfoUsers();

    res.render('users',{usersInfo});
    try {
        const users = await userService.findUsers();

        res.json(users);
    } catch (e) {
        res.status(400).json(e.message);
    }
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
            res.status(400).json(error.message);
        }
    },

    deleteUser:(req,res)=>{
        userService.delUser(currentUserEmail);
    },
    
    createUser:(req,res)=>{
        const {email}=req.body;

        currentUserEmail=email;
        isLoginOk=true;

        signupService.insertUser(req.body);

        res.redirect('/users');
        try {
            userService.insertUser(req.body);

            res.status(201).json('User cerated');
        } catch (e) {
            res.json(e.message);
        }
    }
}