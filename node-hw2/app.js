const fs =require('fs');
const express=require('express');
const expressHbs=require('express-handlebars');
const path=require('path');

const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(process.cwd(),'myPages')));

app.set('view engine','.hbs');
app.engine('.hbs',expressHbs({defaultLayout:false}));
app.set('views',path.join(process.cwd(),'myPages'));

let loginIsOk=false;
let pathUser=path.join(process.cwd(),'usersInfo.json');

app.get('/',(req,res)=>{
    loginIsOk=false;
    res.render('main');
});

app.get('/error',(req,res)=>{res.render('errorPage');});

app.get('/users',(req,res)=>{
    fs.readFile(path.join(process.cwd(),'usersInfo.json'),(err,data)=>{

        if (err) throw err;

        let usersInfo=JSON.parse(data.toString());

        loginIsOk===true
        ?res.render('users',{usersInfo})
        :res.redirect('/error');

    });
    
});

app.get('/login',(req,res)=>{res.render('login');});
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    fs.readFile(pathUser,(err,data)=>{

        if (err) throw err;

        let usersInfo=JSON.parse(data.toString());

        if(usersInfo.find(user=>user.email===email&&user.password===password))
        {
            loginIsOk=true;
            res.redirect('/users');
            return;
        }
        res.redirect('/error');

    });
    
});

app.get('/signup',(req,res)=>{res.render('signup');});
app.post('/signup',(req,res)=>{
    const {username,email,password}=req.body;
    
    fs.readFile(pathUser,(err,data)=>{
        
        if (err) throw err;

        let usersInfo=JSON.parse(data.toString());

        if(usersInfo.find(user=>user.email===email))
        { 
            res.redirect('/error');
            return;
        } 

        loginIsOk=true;
        usersInfo.push({username,email,password});
        fs.writeFile(pathUser,JSON.stringify(usersInfo),err=>{if (err) throw err;});
        res.redirect('/users');
    });
});

app.listen(3000,()=> {
    console.log('listen');
});


