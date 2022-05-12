const express = require('express');

const Product = require('../models/Product');

const router = express.Router();


router.get('/:page',
    async(req, res) => {
        const options = {
            page: parseInt(req.params.page),
            limit: 10
        };
        try {

            const products = await Product.paginate({}, options);
            const productsItems = products.docs;
            return res.status(200).render('products', { title: 'Amazon Products', productsItems });
        } catch (err) {
            next(err);
        }
    });

router.get('/product/:name',
    async(req, res) => {
        const name = req.params.name;
        const options = {
            limit: 10,
        };
        try {

            const products = await Product.paginate({ name: name }, options);
            const productsItems = products.docs;
            return res.status(200).render('products', { title: 'Amazon Products', productsItems });
        } catch (err) {
            next(err);
        }
    });

router.get('/price/:page/:min/:max',
    async(req, res) => {
        const min = req.params.min;
        const max = req.params.max;
        const options = {
            page: parseInt(req.params.page),
            limit: 10
        };
        try {

            const products = await Product.paginate({ price: { $gte: min, $lt: max } }, options);
            const productsItems = products.docs;
            return res.status(200).render('products', { title: 'Amazon Products', productsItems });
        } catch (err) {
            next(err);
        }
    });

module.exports = router;