var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ECSHOP管理中心' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});

router.get('/index/index-head', function(req, res, next) {
  res.render('index-head', { title: 'ECSHOP管理中心' });
});


module.exports = router;
