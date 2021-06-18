var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    product: String,
    date: { type: Date, default: Date.now  },
});

module.exports = mongoose.model('order', orderSchema);