const express = require('express');

const passport = require('passport');

const User = require('../models/User');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const user = await User.find();
        return res.status(200).render('index', { title: 'Amazon Home', user });
    } catch (err) {
        next(err);
    }
});

/**Register */
router.post('/register', (req, res, next) => {
    passport.authenticate('register', (error, user) => {
        if (error) {
            return res.render('register', { error: error.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.render('register', { error: error.message });
            }
            return res.redirect('/products/1');
        });
    })(req, res, next);
});

/**Log from session */
router.post('/login', (req, res, next) => {
    passport.authenticate('login', (error, user) => {
        if (error) {
            return res.render('login', { error: error.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.render('login', { error: error.message });
            }
            return res.redirect('/products/1');
        });
    })(req, res, next);
});

/**Log out from session */
router.post('/logout', (req, res, next) => {
    if (req.user) {
        req.logout();
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    } else {
        return res.sendStatus(304);
    }
});

/**Add products to cart user */
router.get('/add-product/:id', async(req, res, next) => {
    try {
        const userId = req.session.passport['user'];

        const productId = req.params.id;

        const updateUser = await User.findByIdAndUpdate(
            userId, { $push: { cart: productId } }, { new: true }
        );
        return res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
});

/**Obtain Cart from User */
router.get('/cart', async(req, res, next) => {
    try {
        const userId = req.session.passport['user'];
        const products = await User.findById(userId).populate('cart');
        return res.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

module.exports = router;