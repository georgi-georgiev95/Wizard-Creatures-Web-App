const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.render('posts/catalog');
})

module.exports = router;