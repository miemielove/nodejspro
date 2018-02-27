var flag = true;
$("#show-click").click(function(){
	if(flag){
		window.parent.document.getElementsByTagName("frameset")[1].cols = "0,48,*";
		$("#show-Menu").css("display","block");
		$(this).css("background","#333 url(../images/arrow_left.gif) no-repeat center");
		flag = false;
	}else{
		window.parent.document.getElementsByTagName("frameset")[1].cols = "180,10,*";
		$("#show-Menu").css("display","none");
		$(this).css("background","#333 url(../images/arrow_right.gif) no-repeat center");
		flag = true;
	}
})






