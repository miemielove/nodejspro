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



function login(){
	// console.log($("#un").val())
	// console.log($("#psw").val())
	// console.log($(".random").text())
	var randYzm = $("#yzm").val();
	$.ajax({
		url : "/api/login",
		type : "post",
		data : {
			username : $("#un").val(),
			psw : $("#psw").val(),
			yzm : $(".random").text()
		},
		success : function(res){
			var getYzm = res.yzm;
			console.log(typeof getYzm);
			console.log(typeof randYzm);
			if(randYzm!=getYzm){
				alert("验证码不正确")
			}else{
				if( res.status==1 ){
					window.location.href = "http://localhost:8080/";
				}else{
					alert( res.message )
				}
			}
		}
	})
}