const jwt = require('../lib/jwt');
const { SECRET_KEY } = require('../utils/const');

module.exports = async (user) => {
    const payload = {
        email: user.email,
        username: user.username,
        _id: user._id
    };

    const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });

    return token;
}