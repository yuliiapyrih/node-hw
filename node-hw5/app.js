const express=require('express');

const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {userRouter}=require('./routes');

app.use('/users',userRouter);
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.locals.error = err;
    const code = err.code || 500;
    res
        .status(code)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(3001,()=> {
    console.log('listen');
});


