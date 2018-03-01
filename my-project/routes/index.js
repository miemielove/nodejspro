var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ECSHOP管理中心' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});


router.post("/api/login",function(req,res){
	
	var username = req.body.username;
	var psw = req.body.psw;
	console.log(username,psw);
	var result = {
		status : 1,
		message : "登录成功"
	}

	UserModel.find({username:username, psw:psw},function(err,docs){
		console.log(docs.length);
		if( !err && docs.length > 0 ){
			console.log("登录成功");
			res.send(result)
		}else{
			console.log("登录失败，请检查您的用户名或者密码")
			result.status = -109;
			result.message = "登录失败，请检查您的用户名或者密码";
			res.send(result);
		}
	})
})


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

router.get('/index/goods-list', function(req, res, next) {
  res.render('goods-list', { title: 'ECSHOP管理中心-goods-list' });
});

module.exports = router;
