var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    company: String,
    country: String,
    detail: String,
    image: String,
    date: { type: Date, default: Date.now  },
});

module.exports = mongoose.model('product', productSchema);