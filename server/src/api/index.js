import express from 'express';
import { taskRouter } from './resources/task';
import { userRouter } from './resources/user';

export const restRouter = express.Router();
// restRouter.use('/tasks', taskRouter);
restRouter.use('/users', userRouter);