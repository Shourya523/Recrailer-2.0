import express from 'express'
import { registerRouter } from './routes/register.route.js'
import router from './routes/run-cron.route.js';
import cors from 'cors'
import "./Cron/scheduler.js";
import dotenv from 'dotenv';
dotenv.config();

export const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
  cors({
    origin: process.env.CORS,
  })
);
app.use('/api',registerRouter);
app.use('/api',router);
//

