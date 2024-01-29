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
    let votesCount = postData.votes.length

    let votersArr = [];
    postData.votes.forEach(x => votersArr.push(x.email));
    let votersList = votersArr.join(', ');

    res.render('posts/details', { postData, isOwner, isUser, hasVoted, votesCount, votersList });
});

router.get('/vote/:postId', async (req, res) => {
    const id = req.params.postId;
    const userId = req.user._id;

    await postManager.vote(id, userId);

    res.redirect(`/posts/details/${id}`)
});

router.get('/edit/:postId', async (req, res) => {
    const id = req.params.postId;

    const postData = await postManager.getOne(id).lean();

    res.render('posts/edit', { postData });
});

router.post('/edit/:postId', async (req, res) => {
    const id = req.params.postId;
    const postData = req.body;

    await postManager.getOneAndUpdate(id, postData);

    res.redirect(`/posts/details/${id}`);
});

router.get('/delete/:postId', async (req, res) => {
    const id = req.params.postId;

    await postManager.getOneAndDelete(id);

    res.redirect('/posts/catalog');
})

module.exports = router;