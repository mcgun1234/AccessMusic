const Product = require('../models/product');

let get = function (req, res) {
    if (req.session.username){
        User.findOne({ username: req.session.username }, function(err, user){
            res.render('admin',{
                is_active: true,
                fullname: user.fullname,
            });
        });
    }
    else {
        res.render('admin',{
            is_active: false,
        });
    }
}

let post = function (req, res) {
    var name = req.body.name;
    var type = req.body.type;
    var price = req.body.price;
    var company = req.body.company;
    var country = req.body.country;
    var detail = req.body.detail;
    var image = req.body.image;

    var newprod = new Product();
    newprod.name = name;
    newprod.type = type;
    newprod.price = price;
    newprod.company = company;
    newprod.country = country;
    newprod.detail = detail;
    newprod.image = image;

    newprod.save(function(err) {
        res.redirect('/admin');
    });
}

module.exports = {
    get: get,
    post: post
};