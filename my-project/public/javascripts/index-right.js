// 选项卡
$("#tabber-div li").click(function(){
	var index = $(this).index();
	$(this).addClass('tab-front').siblings().removeClass('tab-front');
	// console.log(index);
	$(".dis-table").eq(index).css("display","block").siblings().css("display","none")
});


// 点击显示或隐藏提示信息
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

// 点击显示附加信息
$("#addgoods").click(function(){
	$("#sr-special").css("display","inline-block")
})

// 点击显示附加信息
$(".yc-addgoods").click(function(){
	$("#sr-special").css("display","none")
})

// 点击跳转到商品列表页
$(".list-span").click(function(){
	window.parent.document.getElementsByTagName("frame")[3].src = "/index/goods-list";
})



// 动态创建类型选择

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

// 点击显示辅助信息
$("#add-goodspp").click(function(){
	$("#pp-special").css("display","inline-block")
})

// 点击隐藏信息
$(".yc-addgoodspp").click(function(){
	$("#pp-special").css("display","none")
})

// 价格下取整
$("#qz-btn").click(function(){
	var val = $("#shop-price2").val();
	var str = Math.floor( val );
	$("#shop-price2").val( str )
})

// 设置价格的读写属性

window.onload = function(){
	if( !$("#is-check").prop("checked") ){
		$("#cx-price").css("background","#ebebe4")
		$("#cx-price").attr("readonly","readonly");
	}else{
		$("#cx-price").removeAttr("readonly");
		$("#cx-price").css("background","#fff")
	}
}

// 设置促销价的读写属性
$(".check-yn").click(function(){
	if( !$("#is-check").prop("checked") ){
		$("#cx-price").css("background","#ebebe4")
		$("#cx-price").attr("readonly","readonly");
	}else{
		$("#cx-price").removeAttr("readonly");
		$("#cx-price").css("background","#fff")
	}
});


// 设置文件选择部分的链接头
$("#inpImg-url").click(function(){
	$(this).val("http://")
})

// 设置输入框的读写属性
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

// 设置生成缩略图的读写操作属性
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


// 设置输入框文字颜色（成功）
$("#color-sel").blur(function(){
	var inpColor = $("#color-sel").val();
	$("#right-inp").css("color",inpColor)
})

// 设置输入框字体样式（未成功）
$("#style-sel").click(function(){
	var inpStyle = $("#style-sel").val();
	$("#right-inp").css("font",inpStyle)
	// console.log(inpStyle)
})

// 添加商品并保存
function addGoods(){
	var ajax = new XMLHttpRequest();
	ajax.open("post","/index/index-right");
	ajax.onreadystatechange = function(res){
		if( ajax.status == 4 && ajax.readyState == 200 ){
			console.log(ajax.responseText)
		}
	}

	var num = $("#right-num").val()||parseInt(Math.random()*999+1) 
	var form = new FormData();
	form.append("goods_name",$("#right-inp").val());
	form.append("goods_num",num);
	form.append("goods_price",$("#shop-price1").val());
	form.append("img",document.getElementById("addImg").files[0]);

	ajax.send( form );

}


// 编辑商品

function resAdd(){
	$.ajax({
		url : "/index/index-reset",
		type : "post",
		success : function(res){
			// console.log(res);
			// console.log(res.length);

			if( res.length ==1 ){
				// console.log(res)
				var obj = res[0];

				$("#right-inp").val(obj.goods_name);
				$("#right-num").val(obj.num);
				$("#shop-price1").val(obj.price);
				var pid = obj._id;

				$("#cz-btn").click(function(){
				window.parent.document.getElementsByTagName("frame")[3].src = "/index/goods-list";
				// console.log(pid)
					$.ajax({
						url : "/index/index-regist",
						type : "post",
						data : {
							goods_name : $("#right-inp").val(),
							goods_num : $("#right-num").val(),
							goods_price : $("#shop-price1").val(),
							goods_pid : pid
						},
						success : function(res){
							// console.log(res)
						}
					})
				})
				
			}
		}
	})
}
resAdd();





