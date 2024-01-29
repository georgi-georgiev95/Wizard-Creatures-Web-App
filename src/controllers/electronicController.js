const router = require('express').Router();

const electronicManager = require('../managers/electronicManager');

router.get('/create', (req, res) => {
    res.render('electronic/create');
});

router.post('/create', async (req, res) => {
    const itemInfo = {...req.body,owner: req.user._id}
    try {
        await electronicManager.create(itemInfo);
        res.redirect('/electronic/catalog');
    } catch (err) {
        throw new Error(err);
    }
});

router.get('/catalog', async (req, res) => {
    const electronics = await electronicManager.getAll();
    res.render('electronic/catalog', {electronics});
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const itemData = await electronicManager.getOne(id);
    const isOwner = req.user?._id == itemData.owner;
    const isBuyer = req.user?._id && itemData.buyingList.some(buyer => buyer.userId === req.user._id);
    const isGuest = req.user?._id ? true : false;
    res.render('electronic/details', { itemData, isOwner, isBuyer, isGuest });
});

router.get('/buy/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    await electronicManager.addBuyer(id, userId);

    res.redirect(`/electronic/details/${id}`);
});

router.get('/edit/:id', async (req, res) => {
    const itemData = await electronicManager.getOne(req.params.id);
    res.render('electronic/edit', { itemData });
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const itemData = req.body;
    await electronicManager.editItem(id, itemData);
    res.redirect(`/electronic/details/${id}`)
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await electronicManager.deleteItem(id);
    res.redirect('/electronic/catalog')
});

module.exports = router;