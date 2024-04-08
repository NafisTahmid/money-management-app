const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRouter = require('./routers/userRoute')


const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Our Application'
    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    mongoose.connect('mongodb://127.0.0.1:27017/money-management-app')
        .then(() => {
            console.log('Database connected...');
        })
        .catch(err => {
            console.error('Error connecting to database:', err);
        });
});
