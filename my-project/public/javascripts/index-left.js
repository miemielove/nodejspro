var flag = true;	
$(".click").click(function(){
	index = $(this).index();
	if(flag){
		$(this).find("ol").css("display","block").end().siblings().find("ol").css("display","none");
		$(this).css("background","#797979 url(../images/menu1_"+(index+1)+".png) no-repeat 9px 0")
		flag = false;
	}else{
		$(this).find("ol").css("display","none").end().siblings().find("ol").css("display","none");
		$(this).css("background","#575757 url(../images/menu_"+(index+1)+".png) no-repeat 9px 0")	
		flag = true;
	}
});


$("#goodsList").click(function(){
	window.parent.document.getElementsByTagName("frame")[3].src = "/index/goods-list";
})

$("#addGoods").click(function(){
	window.parent.document.getElementsByTagName("frame")[3].src = "/index//index/index-right";
})