//MODULES
const express = require('express');
const hbs = require("hbs");
const path = require('path');

const mongoose = require('mongoose');
const session = require("express-session");
const passport = require('passport');
const MongoStore = require("connect-mongo");

require('./passport');
require('./database.js')
require('dotenv').config();

/*SERVER CONF */
const PORT = 3000;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

/**ROUTES */
const index = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');



/**SESSION CONF*/
server.use(
    session({
        secret: 'amazon-api',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000
        },
        store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/ecommerce" }),
    })
);

/**Passport Validation */
server.use(passport.initialize());
server.use(passport.session()); //add sessions

/**ADD ROUTES */
server.use('/', index); //index route
server.use('/users', userRouter); //user route
server.use('/products', productRouter); //product route

/**HBS */
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

//HElPER CUSTOM
hbs.registerHelper("gte", (a, b, opts) => {
    if (a >= b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

/**CONTROL ERRORS */
server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

server.use((err, req, res, next) => {
    return res.status(err.status || 500).render('error', {
        message: err.message || 'Unexpected error',
        status: err.status || 500,
    });
});

/**DEPLOY SERVER */
server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});