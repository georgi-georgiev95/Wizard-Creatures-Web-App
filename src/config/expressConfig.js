const express = require('express');
const router = require('../router');

module.exports = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(router);
}