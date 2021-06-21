const User = require('../models/user');

let get = function (req, res) {
    res.render('register', {
        error: null,
        is_active: false
    });
}

let post = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var re_password = req.body.re_password;
    var fullname = req.body.fullname;
    var email = req.body.email;
    var phone = req.body.phone;

    if (password === re_password) { //재입력 통과
        User.findOne({username : username}, function (err, user) {
            if (err) return res.status(500).send(err.message);

            if (!user) { //계정이 없음
                var newuser = new User();
                newuser.username = username;
                newuser.password = password;
                newuser.fullname = fullname;
                newuser.email = email;
                newuser.phone = phone;

                newuser.save(function(err) {
                    if (err) {
                        res.render('register', {
                            error: '알 수 없는 오류가 발생하였습니다',
                            is_active: false
                        });
                    }
                    res.redirect('/login');
                });
            }

            else { //계정이 있음
                res.render('register', {
                    error: '이미 존재하는 아이디입니다',
                    is_active: false
                });
            }
        });
    }

    else { //재입력 불통
        res.render('register', {
            error: '비밀번호가 다릅니다',
            is_active: false
        });
    }
}

module.exports = {
    get: get,
    post: post
};