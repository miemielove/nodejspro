$("#listDiv").find("tr").mouseenter(function(){
	$(this).find("td").css("background","rgb(244,250,251)")
}).mouseleave(function(){
	$(this).find("td").css("background","#fff")
});

// 页面加载列表页显示所有信息
window.onload = function(){
	addList()
}

// 点击按钮显示搜索匹配信息
function search(){
	$("#tabber-add tr").eq(0).siblings('tr').remove();

	addList()

}


function addList(){
	$.ajax({
		url : "/index/goods-list",
		type : "post",
		data : {
			search_val : $("#search-inp").val(),
		},
		success : function(json){
			// console.log(json)
			var str = "";
			for( var i = 0; i < json.length; i++ ){
				var pro = json[i];
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
		    					<a href="javascript:" class="delThis">
		    						<img src="/images/icon_trash.gif">
		    					</a>
		    				</td>
		    			</tr>`
			}
			$("#tabber-add").append(str)


			// 删除操作
			$(".delThis").click(function(){
				$(this).parents("tr").remove();
				var delName = $(this).parents("tr").find($(".first-cell")).find("span").text()
				// console.log(delName)

				$.ajax({
					url : "/index/goods-del",
					type : "post",
					data : {
						delName : delName
					},
					success : function(res){
						// console.log(res)
					}
				})
			})


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


		}
	})
}



$.ajax({
	url : "/index/goods-num",
	type : "post",
	success : function(res){
		console.log(res)
	}
})









