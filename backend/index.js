import { app } from './app.js'
import { connectDB } from './connection/mongodb.connect.js'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT || 8000;
import "./Cron/scheduler.js";
connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`Server Connected At ${PORT}`);
    })
    console.log('MongoDB connected')
})
