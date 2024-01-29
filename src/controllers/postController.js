const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.render('posts/catalog');
});

router.get('/create', (req, res) => {
    res.render('posts/create');
})

module.exports = router;