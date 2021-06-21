const router = require("express").Router();

const MainController = require("../controller/main");
const LoginController = require("../controller/login");
const RegisterController = require("../controller/register");
const LogoutController = require("../controller/logout");
const ProductController = require("../controller/product");
const AdminController = require("../controller/admin");
const SearchController = require("../controller/search");
const DetailController = require("../controller/detail");
const CartController = require("../controller/cart")

router.get('/', MainController.get)

router.get('/login', LoginController.get);
router.post('/login', LoginController.post);

router.get('/register', RegisterController.get);
router.post('/register', RegisterController.post);

router.get('/logout', LogoutController.get);

router.get('/electric', ProductController.electric);
router.get('/bass', ProductController.bass);
router.get('/acoustic', ProductController.acoustic);
router.get('/classic', ProductController.classic);
router.get('/sound', ProductController.sound);
router.get('/effector', ProductController.effector);
router.get('/accessory', ProductController.accessory);

router.get('/admin', AdminController.get);
router.post('/admin', AdminController.post);

router.get('/search', SearchController.get);

router.get('/detail/:id', DetailController.get);

router.get('/cart', CartController.get);

module.exports = router;