const User = require('../models/user');

let get = function (req, res) {
    req.session.destroy(function (err){
        res.redirect("/");
     });
}

module.exports = {
    get: get
};