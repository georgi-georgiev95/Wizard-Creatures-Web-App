const mongoose = require('mongoose');
const { DB_URI } = require('../utils/const');

module.exports = () => {
    mongoose.connect(DB_URI)
        .then(() => console.log('Successfully connected to DB'))
        .catch(err => console.log(err));
}
