// App Settings
const express = require('express');
const morgan = require('morgan');
const quizRouter = require('./routes/quizRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/quizzes', quizRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
