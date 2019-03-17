import express from 'express';
import logger from 'morgan';

import { connect } from './config/db';
import { restRouter } from './api/index';

import passport from 'passport';
import { configJWTStrategy } from './api/middlewares/passport-jwt';


connect();

const app = express();
const PORT = 8079;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(passport.initialize()); // req.user
configJWTStrategy();


// TODO: only development mode
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', restRouter);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
