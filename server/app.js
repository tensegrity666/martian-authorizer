const express = require('express');
const serverless = require('serverless-http');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const loginRouter = require('./resources/login/login.router');
const registerRouter = require('./resources/register/register.router');
const welcomeRouter = require('./resources/welcome/welcome.router');

require('express-async-errors');

const app = express();
const router = express.Router();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/server', router);
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.sendFile(path.resolve(__dirname, '../dist'), 'index.html');
  }
  next();
});

app.use('/login', loginRouter);
app.use('/registration', registerRouter);
app.use('/welcome', welcomeRouter);

// process
//   .on('unhandledRejection', rejectionHandler)
//   .on('uncaughtException', exceptionHandler);

module.exports = app;
module.exports.handler = serverless(app);