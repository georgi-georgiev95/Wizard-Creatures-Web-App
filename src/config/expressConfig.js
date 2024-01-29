const express = require('express');
const routes = require('../routes');
const cookieParser = require('cookie-parser');
const path = require('path');
const { auth } = require('../middleware/authMiddleware');
const { errHandler } = require('../middleware/errHandlerMiddleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errHandler);

module.exports = app;