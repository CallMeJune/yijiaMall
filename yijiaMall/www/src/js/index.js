$(function(){
	
	$("#all .cent .cent-left .main li").click(function(){
		//var count = $(this).index();
		$("#all .cent .cent-left .main li dl dd").hide();
		$(this).find("dd").show();
	})		
})

//$(function(){
//	$("#all .cent .cent-left .main li dl dd p").mouseover(function(){
//		$(this).find(".details").css("display","block");
//		$(this).parent().parent().parent().parent().parent().siblings().find(".details").css("display","none");
//	})
//	
//})





$(function(){
	
	$("#all .page .pageH .subMenu li").mousemove(function(){
		$(this).addClass("thisStyle ").siblings().removeClass("thisStyle");
		var _this = $(this).index();
		$("#all .page .pageH .content > .c1:eq("+_this+")").show().siblings().hide();
	})
		
	
})















































