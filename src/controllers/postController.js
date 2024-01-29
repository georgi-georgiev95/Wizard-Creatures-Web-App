const router = require('express').Router();

const postManager = require('../managers/postManager');

router.get('/catalog', async (req, res) => {
    const posts = await postManager.getAll().lean();
    res.render('posts/catalog', {posts});
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
});

router.get('/details/:postId', async (req, res) => {
    const id = req.params.postId;
    const postData = await postManager.getOne(id).lean();

    let isOwner = req.user?._id == postData.owner._id;
    let isUser = req.user?._id;
    let hasVoted = postData.votes.filter(x => x._id == req.user._id).length !== 0 ? true : false;

    console.log(isOwner);
    console.log(isUser);
    console.log(hasVoted);

    res.render('posts/details', { postData, isOwner, isUser, hasVoted });
})

module.exports = router;