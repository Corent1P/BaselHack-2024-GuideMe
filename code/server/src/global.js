import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '../prisma/client/index.js';
import userRouter from './routers/user-router.js';
import guidelineRouter from './routers/guideline-router.js';

dotenv.config();

export const app = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRouter);
app.use('/guidelines', guidelineRouter);