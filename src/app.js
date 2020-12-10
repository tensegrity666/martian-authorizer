const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { FRONT_URL } = require("./common/config");

require("express-async-errors");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.statusCode = 302;
    res.setHeader("Location", FRONT_URL);
    res.end();
    return;
  }
  next();
});

// app.use('/login', loginRouter);

// process
//   .on('unhandledRejection', rejectionHandler)
//   .on('uncaughtException', exceptionHandler);

// app.use(errorHandler);

module.exports = app;
