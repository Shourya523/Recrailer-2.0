import { app } from './app.js'
import { connectDB } from './connection/mongodb.connect.js'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,(req,res)=>{
        console.log(`Server Connected At ${PORT}`);
    })
    console.log('MongoDB connected')
})
