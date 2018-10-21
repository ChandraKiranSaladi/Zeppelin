var express = require('express');
var userController = require('../controller/user_controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', userController.getLogin);
module.exports = router;
