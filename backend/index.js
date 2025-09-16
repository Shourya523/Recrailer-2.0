import { app } from './app.js'
import { connectDB } from './connection/mongodb.connect.js'
import express from 'express';
const PORT=8000;

connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`Server Connected At ${PORT}`);
    })
    console.log('MongoDB connected')
})
