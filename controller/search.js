const Product = require('../models/product');
const User = require('../models/user');

let get = function (req, res) {
    Product.find({ name: {$regex : ".*"+req.query.name+".*"} },function(err,prodlist) {
        if (err) return res.status(500).send({error: 'database failure'});
        if (req.session.username){
            User.findOne({ username: req.session.username }, function(err, user){
                res.render('list',{
                    prodlist: prodlist,
                    is_active: true,
                    fullname: user.fullname,
                });
            });
        }
        else {
            res.render('list',{
                prodlist: prodlist,
                is_active: false,
            });
        }
    });
}

module.exports = {
    get: get,
};