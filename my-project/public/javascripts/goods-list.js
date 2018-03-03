// 鼠标划上tr 改变背景色
$("#listDiv").find("tr").mouseenter(function(){
	$(this).find("td").css("background","rgb(244,250,251)")
}).mouseleave(function(){
	$(this).find("td").css("background","#fff")
});

// 右上角点击页面跳转
$(".list-span").click(function(){
	window.parent.document.getElementsByTagName("frame")[3].src = "/index/index-right";
})



// 页面加载列表页显示所有信息
window.onload = function(){
	addList();
}

// 定义一个对象接收ajax的返回值，以便函数外操作
var obj = {};


// ajax传递数据
function addList(val){
	var pageNum = $("#pageCurrent").text();
	var pageSize = $("#pageSize").val();
	// console.log(pageNum)
	// console.log(pageSize)

	$.ajax({
		url : "/index/goods-list",
		type : "post",
		data : {
			search_val : $("#search-inp").val(),
			pageNum : pageNum,
			pageSize : pageSize
		},
		success : function(json){
			obj = json;
			// console.log(obj.data.length);

			// setList()

			var str = "";
			for( var i = 0; i < obj.data.length; i++ ){
				var pro = obj.data[i];
				str += `<tr>
		    				<td>
		    					<input type="checkbox" name="checkboxes" value="254">
		    					<span>254</span>
		    				</td>
		    				<td class="first-cell">
		    					<span title="点击修改内容">${pro.goods_name}</span>
		    				</td>
		    				<td>
		    					<span title="点击修改内容">${pro.num}</span>
		    				</td>
		    				<td>
		    					<span title="点击修改内容">${pro.price}</span>
		    				</td>
		    				<td>
		    					<img src="/images/yes.gif">
		    				</td>
		    				<td>
		    					<img src="/images/yes.gif">
		    				</td>
		    				<td>
		    					<img src="/images/yes.gif">
		    				</td>
		    				<td>
		    					<img src="/images/yes.gif">
		    				</td>
		    				<td>
		    					<span title="点击修改内容">100</span>
		    				</td>
		    				<td>
		    					<span title="点击修改内容">1</span>
		    				</td>
		    				<td>
		    					<span title="点击修改内容">0</span>
		    				</td>
		    				<td>
		    					<a href="javascript:">
		    						<img src="/images/icon_view.gif">
		    					</a>
		    					<a href="javascript:" thisId="${pro._id}" class="makethis">
		    						<img src="/images/icon_edit.gif">
		    					</a>
		    					<a href="javascript:">
		    						<img src="/images/icon_copy.gif">
		    					</a>
		    					<a href="javascript:" theId="${pro._id}" class="delthis">
		    						<img src="/images/icon_trash.gif">
		    					</a>
		    				</td>
		    			</tr>`
			}
			$("#tabber-add").append(str);

			// 显示总的数据条数
			$("#totalNum").text( obj.count );

			// 显示总的页数（上取整操作）
			var pageSize = $("#pageSize").val();
			$("#totalPage").text( Math.ceil(obj.count/pageSize) );



			// 全选反选
			var $cks = $("input[name=checkboxes]");
			// console.log($cks)
			$("#checkBox").click(function(){
				for( var i = 0 ; i < $cks.length ; i++ ){
					// $cks[i].checked
					if( $cks.eq(i).prop("checked") ){
						$cks.eq(i).prop("checked",false);
					}else{
						$cks.eq(i).prop("checked",true);
					}
				}
			})


			// 删除
			$(".delthis").click(function(){
				var gid = $(this).attr("theId");

				$.ajax({
					url : "/index/goods-del",
					type : "post",
					data : {
						gid : gid
					},
					success : function(res){
						console.log(res);
						if(res.status == 1){
							location.reload(true);
						}else{
							console.log(res.message);
						}
					}
				})
			})


			// 编辑商品（获取商品_id值，在后端查找匹配数据）
			$(".makethis").click(function(){
				var gid = $(this).attr("thisId")
				// console.log(gid);

				// 点击查找跳转页面
				window.parent.document.getElementsByTagName("frame")[3].src = "/index/index-right";

				$.ajax({
					url : "/index/goods-reset",
					type : "post",
					data : {
						id : gid
					},
					success : function(res){
						console.log(res)
					}
				})
			});


			// 选择页
			var pageSize = $("#pageSize").val();
			var count = $("#totalNum").text()
			// console.log(pageSize,count);
			var maxSize = Math.ceil( count/pageSize )
			// console.log(maxSize);
			$("#gotoPage").find("option").remove();
			for( var i = 1; i <= maxSize; i++ ){
				var option = "";
				option = `<option value="${i}">${i}</option>`;
				$("#gotoPage").append(option)
			}
			// console.log(val)

			$("#gotoPage option[value="+val+"]").prop("selected",true)
			


		}
	})
}




	// 第一页
	$("#first").click(function(){
		$("#pageCurrent").text(1);
		$("#tabber-add tr").eq(0).siblings('tr').remove();
			
		addList()
	})

	// 最后一页
	$("#last").click(function(){
		var pageSize = $("#pageSize").val();
		$("#pageCurrent").text( Math.ceil(obj.count/pageSize) );
		$("#tabber-add tr").eq(0).siblings('tr').remove();

		addList()
	})

	// 上一页
	$("#before").click(function(){
		var text = $("#pageCurrent").text();
		text -= 1;
		// console.log(text)
		// console.log(typeof text)
		if( text <= 1 ){
			text = 1;
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}else{
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}


	})

	// 下一页
	$("#after").click(function(){
		var text = parseInt($("#pageCurrent").text());
		text += 1;
		// console.log(text)
		var pageSize = $("#pageSize").val();
		var maxNum = Math.ceil(obj.count/pageSize)
		// console.log(maxNum)
		if( text >= maxNum ){
			text = maxNum;
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}else{
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}
	});

	// 设置可以选择的总页数
	$("#pageSize").change(function(){
		var pageSize = $("#pageSize").val();
		var count = $("#totalNum").text()
		// console.log(pageSize,count);
		var maxSize = Math.ceil( count/pageSize )
		// console.log(maxSize);
		$("#gotoPage").find("option").remove();
		for( var i = 1; i <= maxSize; i++ ){
			var option = "";
			option = `<option value="${i}">${i}</option>`;
			$("#gotoPage").append(option)
		}	
	});

	// 选页显示
	$("#gotoPage").change(function(){
		var val = $(this).val();
		console.log(val);
		$("#pageCurrent").text(val);
		$("#tabber-add tr").eq(0).siblings('tr').remove();

		addList(val)
	})


	// 页码输入框失焦事件，调用函数，重新加载数据
	$("#pageSize").blur(function(){
		var pageSize = $("#pageSize").val();
		var count = $("#totalNum").text()
		var maxSize = Math.ceil( count/pageSize );
		var nowNum = $("#pageCurrent").text(1)
		// console.log(maxSize)
		$("#totalPage").text(maxSize)
		$("#tabber-add tr").eq(0).siblings('tr').remove();

		addList();

	})

	// 点击按钮显示搜索匹配信息
	function search(){
		$("#tabber-add tr").eq(0).siblings('tr').remove();
		var pageSize = $("#pageSize").val();
		var count = $("#totalNum").text()
		var maxSize = Math.ceil( count/pageSize );
		var nowNum = $("#pageCurrent").text(1)
		// console.log(maxSize)
		$("#totalPage").text(maxSize)
		$("#tabber-add tr").eq(0).siblings('tr').remove();

		addList();
	}




	















