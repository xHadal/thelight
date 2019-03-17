import express from 'express';
import passport from 'passport';
import taskController from './task.controller';

export const taskRouter = express.Router();

taskRouter.route('/')
  .post(
    passport.authenticate('jwt', {session: false}),
    taskController.add
  )
  .get(
    passport.authenticate('jwt', {session: false}),
    taskController.list
  )

taskRouter.route('/:id')
  .post(
    passport.authenticate('jwt', {session: false}),
    taskController.add
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    taskController.remove
  )
  .put(
    passport.authenticate('jwt', {session: false}),
    taskController.edit
  )
  .get(
    passport.authenticate('jwt', {session: false}),
    taskController.get
  )
