var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");
var GoodsModel = require("../model/GoodsModel");
var multiparty = require('multiparty');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ECSHOP管理中心' });
});

router.get('/login', function(req, res) {
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


router.get('/index/index-head', function(req, res) {
  res.render('index-head', { title: 'ECSHOP管理中心' });
});

router.get('/index/index-left', function(req, res) {
  res.render('index-left', { title: 'ECSHOP管理中心-left' });
});

router.get('/index/index-center', function(req, res) {
  res.render('index-center', { title: 'ECSHOP管理中心-center' });
});


router.get('/index/index-right', function(req, res) {
  res.render('index-right', { title: 'ECSHOP管理中心-right' });
});

router.post('/index/index-right', function(req, res) {
  var form = new multiparty.Form({
  	uploadDir : "./public/imgs"
  });
  form.parse(req,function(err,body,files){
  	var goods_name = body.goods_name[0];
  	var num = body.goods_num[0];
  	var price = body.goods_price[0];
  	var imgName = files.img[0].path;
  	imgName = imgName.substr(imgName.lastIndexOf("\\") + 1 );
  	console.log(goods_name,num,price,imgName)

  	var gm = new GoodsModel();
  	gm.goods_name = goods_name;
  	gm.num = num;
  	gm.price = price;
  	gm.img = imgName;

  	gm.save(function(err){
  		if( !err ){
  			res.send("文件上传成功");
  		}else{
  			res.send("文件上传失败");
  		}
  	})

  	
  });
});


router.get('/index/goods-list', function(req, res) {
	res.render('goods-list', { title: 'ECSHOP管理中心-列表' });
});

router.post('/index/goods-list', function(req, res) {
	var searchVal = req.body.search_val;
	// console.log(searchVal)

	if( searchVal != "" ){
		GoodsModel.find({goods_name:{$regex:searchVal}},function(err,docs){
			// console.log(docs)
			res.send( docs )
		})
	}else{
		GoodsModel.find({},function(err,docs){
	  		res.send( docs )
		})
	}



});

router.post('/index/goods-del', function(req, res) {
	var delName = req.body.delName;
	// console.log(delName)
	GoodsModel.remove({goods_name:{$regex:delName}},function(err,docs){
		// console.log(docs)
	})

});

router.post('/index/goods-num', function(req, res) {
	GoodsModel.count({},function(err,docs){
		console.log(docs);
		res.send( docs.toString )
	})

});


module.exports = router;
