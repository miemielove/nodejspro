$("#listDiv").find("tr").mouseenter(function(){
	$(this).find("td").css("background","rgb(244,250,251)")
}).mouseleave(function(){
	$(this).find("td").css("background","#fff")
});