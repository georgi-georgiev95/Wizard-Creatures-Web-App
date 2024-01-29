const router = require('express').Router();
const userManager = require('../managers/userManager');

const { COOKIE_NAME } = require('../utils/const');
const { getErrorMessage } = require('../utils/errHelpers');

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userManager.login(email, password);
    
        res.cookie(COOKIE_NAME, token);
    
        res.redirect('/');
    } catch (err) {
        res.render('users/login', {error: getErrorMessage(err)})
    }
});

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const token = await userManager.register(userData);
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        res.render('users/register', {error: getErrorMessage(err)});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    
    res.redirect('/');
});

module.exports = router;