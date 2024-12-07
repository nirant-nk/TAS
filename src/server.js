import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './db/index.js';
// require('dotenv').config({path:'./env'})

dotenv.config({
    path:'./env'
})

const port = (process.env.PORT)?  process.env.PORT : 8000 ;

const app = express()

try {
    connectDB();
    app.on('error',(error) => {
        console.log(`App error while connection! ${error}`);
    })
    app.listen(port,()=>{
        console.log(`App listening on port : ${port}`);
    })
} catch (error) {
    console.log(`App connection error! ${error}`);
}

app.get('/',(req,res)=>{
    res.send(`App listening on port : ${port}`);
})


