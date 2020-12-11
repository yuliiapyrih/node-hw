const express=require('express');
const expressHbs=require('express-handlebars');
const path=require('path');

const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{res.render('main');});

const {userRouter,loginRouter}=require('./routes');

app.use('/users',userRouter);
app.use('/login',loginRouter);

app.listen(5000,()=> {
    console.log('listen');
});


