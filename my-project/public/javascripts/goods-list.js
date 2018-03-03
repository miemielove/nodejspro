$("#listDiv").find("tr").mouseenter(function(){
	$(this).find("td").css("background","rgb(244,250,251)")
}).mouseleave(function(){
	$(this).find("td").css("background","#fff")
});

// 页面加载列表页显示所有信息
window.onload = function(){
	addList();
}

var obj = {};
// 点击按钮显示搜索匹配信息
function search(){
	$("#tabber-add tr").eq(0).siblings('tr').remove();

	addList()
}

$("#pageSize").blur(function(){
	$("#tabber-add tr").eq(0).siblings('tr').remove();
	addList();
})

function addList(){
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
			console.log(obj.data.length);

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
		    					<a href="javascript:">
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


			$("#totalNum").text( obj.count );

			$("#totalPage").text( Math.ceil(obj.count/pageSize) )



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

			
			


		}
	})
}


// function setList(){

	// 第一页
	$("#first").click(function(){
		$("#pageCurrent").text(1);
		$("#tabber-add tr").eq(0).siblings('tr').remove();
			
		addList()
	})

	// 最后一页
	$("#last").click(function(){
		var pageSize = $("#pageSize").val();
		// var lastPage = $("#totalPage").text();
		$("#pageCurrent").text( Math.ceil(obj.count/pageSize) );
		$("#tabber-add tr").eq(0).siblings('tr').remove();

		addList()
	})

	// 上一页
	$("#before").click(function(){
		var text = $("#pageCurrent").text();
		text -= 1;
		console.log(text)
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
		console.log(text)
		var maxNum = Math.ceil(obj.count/pageSize)
		console.log(maxNum)
		if( text >= Math.ceil(obj.count/pageSize) ){
			text = Math.ceil(obj.count/pageSize);
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}else{
			$("#pageCurrent").text(text);
			$("#tabber-add tr").eq(0).siblings('tr').remove();
				
			addList()
		}
	})

// }














