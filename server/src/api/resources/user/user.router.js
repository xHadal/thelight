import express from 'express';
import userController from './user.controller';

export const userRouter = express.Router();

userRouter.route('/signup')
  .post(userController.signup);

userRouter.route('/login')
  .post((userController.login));
