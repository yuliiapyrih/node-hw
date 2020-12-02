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

app.get('/',(req,res)=>{res.render('main');});

const {userRouter,loginRouter,signupRouter}=require('./routes');
app.use('/users',userRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.listen(3000,()=> {
    console.log('listen');
});


