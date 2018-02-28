$("#tabber-div li").click(function(){
	var index = $(this).index();
	$(this).addClass('tab-front').siblings().removeClass('tab-front');
	// console.log(index);
	$(".dis-table").eq(index).css("display","block").siblings().css("display","none")
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


$("#addgoods").click(function(){
	$("#sr-special").css("display","inline-block")
})

$(".yc-addgoods").click(function(){
	$("#sr-special").css("display","none")
})


$("#create-btn").click(function(){
	var str = "";
	str = `<select name="cat-id" id="lb">
	            <option value="100">请选择...</option>
	            <option value="0">钻石</option>
	            <option value="1">衬衫</option>
	            <option value="2">裤子</option>
	            <option value="3">外套</option>
	            <option value="4">sd</option>
	            <option value="5">内衣</option>
	            <option value="6">针织衫</option>
	            <option value="7">运动鞋</option>
	            <option value="8">运动包</option>
	            <option value="9">户外帐篷</option>
	            <option value="10">户外骑行</option>
	        </select>`;
	$(str).appendTo($("#add-goodsfl"))
})

$("#add-goodspp").click(function(){
	$("#pp-special").css("display","inline-block")
})

$(".yc-addgoodspp").click(function(){
	$("#pp-special").css("display","none")
})

$("#qz-btn").click(function(){
	var val = $("#shop-price2").val();
	var str = Math.floor( val );
	$("#shop-price2").val( str )
})


window.onload = function(){
	if( !$("#is-check").prop("checked") ){
		$("#cx-price").css("background","#ebebe4")
		$("#cx-price").attr("readonly","readonly");
	}else{
		$("#cx-price").removeAttr("readonly");
		$("#cx-price").css("background","#fff")
	}
}

$(".check-yn").click(function(){
	if( !$("#is-check").prop("checked") ){
		$("#cx-price").css("background","#ebebe4")
		$("#cx-price").attr("readonly","readonly");
	}else{
		$("#cx-price").removeAttr("readonly");
		$("#cx-price").css("background","#fff")
	}
});



$("#inpImg-url").click(function(){
	$(this).val("http://")
})


window.onload = function(){
	if( $("#no-check").prop("checked") ){
		$("#inpImg-url1").css("background","#ebebe4")
		$("#inpImg-url1").attr("readonly","readonly");
		$("#xz-img").attr("disabled","disabled");
	}else{
		$("#inpImg-url1").removeAttr("readonly");
		$("#inpImg-url1").css("background","#fff");
		$("#xz-img").removeAttr("disabled");
	}
}

$(".ny-check").click(function(){
	if( $("#no-check").prop("checked") ){
		$("#inpImg-url1").css("background","#ebebe4")
		$("#inpImg-url1").attr("readonly","readonly");
		$("#xz-img").attr("disabled","disabled");
	}else{
		$("#inpImg-url1").removeAttr("readonly");
		$("#xz-img").removeAttr("disabled");
		$("#inpImg-url1").css("background","#fff");
		$("#inpImg-url1").click(function(){
			$(this).val("http://")
		});
	}
});

$("#color-sel").blur(function(){
	var inpColor = $("#color-sel").val();
	$("#right-inp").css("color",inpColor)
})


$("#style-sel").click(function(){
	var inpStyle = $("#style-sel").val();
	$("#right-inp").css("font",inpStyle)
	// console.log(inpStyle)
})