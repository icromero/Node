//Model Product
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

// Schema of product
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
}, {
    timestamps: true,
});

/**Add plugin for pagination */
productSchema.plugin(mongoosePaginate);

// Creates and exports the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;