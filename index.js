const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const authRouter = require('./routes/authRoute');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/', authRouter);


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully Connected To Database...'))
  .catch((error) => console.error('Database Connection Failed...', error));

app.use((err, res, req) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

const PORT = process.env.PORT;
app.listen(PORT, "0.0.0.0" , ()=>{
    console.log(`App Is Running On Port : ${PORT}`);
});
