const Product = require('../models/product');
const User = require('../models/user');

let get = function (req, res) {
    Product.findOne({ _id: req.params.id },function(err,product) {
        if (err) return res.status(500).send({error: 'database failure'});
        if (req.session.username){
            User.findOne({ username: req.session.username }, function(err, user){
                res.render('detail',{
                    product: product,
                    is_active: true,
                    fullname: user.fullname,
                });
            });
        }
        else {
            res.render('detail',{
                product: product,
                is_active: false,
            });
        }
    });
}

let post = function (req, res) {
    res.redirect('/');
}

module.exports = {
    get: get,
    post: post
};