window.onload = function(){
	yzm();
}

$(".random").click(function(){
	yzm();
})

function yzm(){
	var arr = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var str = "";
	for( var i = 0; i <4; i++ ){
		str += arr[Math.floor(Math.random()*36)];
	}	
	$(".random").html(str);
	return str;

}

$("#yzm").blur(function(){
	var str = $(".random").html();
	if( $(this).val()=="" ){
		alert("您还没有输入验证码！")
	}else{
		if( $("#yzm").val() != str ){
			alert("请填写正确的验证码！")
		}
	}
})


function login(){
	console.log($("#un").val())
	console.log($("#psw").val())
	$.ajax({
		url : "/api/login",
		type : "post",
		data : {
			username : $("#un").val(),
			psw : $("#psw").val()
		},
		success : function(res){
			console.log(res)
			window.location.href = "http://localhost:8080/";
		}
	})
}