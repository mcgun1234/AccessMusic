const Product = require('../models/product');
const User = require('../models/user');

let electric = function (req, res) {
    Product.find({ type: 'electric' },function(err,prodlist) {
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

let bass = function (req, res) {
    Product.find({ type: 'bass' },function(err,prodlist) {
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
        }    });
}

let acoustic = function (req, res) {
    Product.find({ type: 'acoustic' },function(err,prodlist) {
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
        }    });
}

let classic = function (req, res) {
    Product.find({ type: 'classic' },function(err,prodlist) {
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
        }    });
}

let sound = function (req, res) {
    Product.find({ type: 'sound' },function(err,prodlist) {
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
        }    });
}

let effector = function (req, res) {
    Product.find({ type: 'effector' },function(err,prodlist) {
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
        }    });
}

let accessory = function (req, res) {
    Product.find({ type: 'accessory' },function(err,prodlist) {
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
        }    });
}

module.exports = {
    electric: electric,
    bass: bass,
    acoustic: acoustic,
    classic: classic,
    sound: sound,
    effector: effector,
    accessory: accessory
};