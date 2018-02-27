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

router.get('/index/index-left', function(req, res, next) {
  res.render('index-left', { title: 'ECSHOP管理中心-left' });
});

router.get('/index/index-center', function(req, res, next) {
  res.render('index-center', { title: 'ECSHOP管理中心-center' });
});

router.get('/index/index-right', function(req, res, next) {
  res.render('index-right', { title: 'ECSHOP管理中心-right' });
});

module.exports = router;
