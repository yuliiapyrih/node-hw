const express=require('express');

const db = require('./dataBase').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const {userRouter,carRouter}=require('./routes');

app.use('/users',userRouter);
app.use('/cars',carRouter);

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

app.listen(5000,()=> {
    console.log('listen');
});


