const User = require('../models/user');

let get = function (req, res) {
    if (req.session.username){
        User.findOne({ username: req.session.username }, function(err, user){
            res.render('contact',{
                is_active: true,
                fullname: user.fullname,
            });
        });
    }
    else {
        res.render('contact',{
            is_active: false,
        });
    }
};

module.exports = {
    get: get,
};