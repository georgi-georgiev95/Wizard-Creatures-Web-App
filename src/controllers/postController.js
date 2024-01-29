const router = require('express').Router();

const postManager = require('../managers/postManager');

router.get('/catalog', (req, res) => {
    res.render('posts/catalog');
});

router.get('/create', (req, res) => {
    res.render('posts/create');
});

router.post('/create', async (req, res) => {
    const postData = {
        ...req.body,
        owner: req.user._id
    }

    await postManager.create(postData);

    res.redirect('/posts/catalog')
})

module.exports = router;