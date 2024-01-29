const bcrypt = require('bcrypt');

const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (userData) => { 
    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error('Email already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser);

    return token;
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    }

    const token = await generateToken(user);

    return token;
}