// seed.js file
const mongoose = require('mongoose');

//import model
const User = require('../models/User');

const users = [{
    email: 'admin_eco@amazon.com',
    password: 'gTmv8!ksfjBq',
    name: 'Jose Cuervo Belmonte',
}, ];


const userDocument = users.map(user => new User(user));

mongoose
    .connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allUsers = await User.find();

        if (allUsers.length) {
            await User.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async() => {
        await User.insertMany(userDocument);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());