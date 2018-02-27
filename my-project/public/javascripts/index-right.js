$("#tabber-div li").click(function(){
	var index = $(this).index();
	$(this).addClass('tab-front').siblings().removeClass('tab-front');
	// console.log(index)
});


var flag = true;
$(".tips").click(function(){
	if(flag){
		$(this).parents('tr').find("td").eq(1).find(".notice-tips").css("display","block")
		flag = false;
	}else{
		$(this).parents('tr').find("td").eq(1).find(".notice-tips").css("display","none")
		flag = true;
	}
})

