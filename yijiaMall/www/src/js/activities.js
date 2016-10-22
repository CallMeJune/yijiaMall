//ajax请求获取头部和尾部
$.ajax({
	type:"get",
	url:"head.html",
	success:function(data){
		$("#all").prepend(data);
	}
});

$.ajax({
	type:"get",
	url:"foot.html",
	success:function(data){
		$("#all").append(data);
	}
});



$(function() {
	$("#all .online-customer-service").click(function() {
		$(this).hide();
		$("#all .hide").show();
	})

	$("#all .hide .h-title .close").click(function() {
		$("#all .hide").hide();
		$("#all .online-customer-service").show();
	})
})


$(function() {
	$("#all .nextpage .top").click(function() {
		var oTop = 0
		$("body,html").animate({
			scrollTop: oTop
		})
	})
})










