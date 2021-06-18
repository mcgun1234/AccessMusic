const User = require('../models/user');

let get = function (req, res) {
    res.render('login',{
        error: null,
        is_active: false
    });
}

let post = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username : username, password : password}, function (err, user) {
        if (err) return res.status(500).send(err.message);

        if (user) { //계정이 있음
            req.session.username = username;
            res.redirect('/');
        }

        else { //계정이 없음
            res.render('login', {
                error: '존재하지 않는 계정입니다',
                is_active: false
            });
        }
    });
}

module.exports = {
    get: get,
    post: post
};