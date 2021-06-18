var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String,
    fullname: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('user', userSchema);