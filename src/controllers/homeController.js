const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/404', (req, res) => {
    res.render('partials/404');
});

module.exports = router;