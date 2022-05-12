//Model User
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema of product
const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
}, {
    timestamps: true,
});

// Creates and exports the model
const User = mongoose.model('User', userSchema);

module.exports = User;