const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_OR_ROUND } = require('../utils/const');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Password is required!']
    }
});

userSchema.virtual('rePassword')
    .set(function (value) {
        if (this.password !== value) {
            throw new Error('Password missmatch!');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_OR_ROUND); 
    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;