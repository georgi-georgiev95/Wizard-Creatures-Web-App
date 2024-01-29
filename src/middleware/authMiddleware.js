const { COOKIE_NAME, SECRET_KEY } = require('../utils/const');
const jwt = require('../lib/jwt');

exports.auth = async (req, res, next) => {
    const token = req.cookies[COOKIE_NAME];

    if (token) {
       try {
            const decodedToken = await jwt.verify(token, SECRET_KEY);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/users/login');
        }
    } else {
        next();
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/users/login');
    }

    next();
}