$(function() {

	$("#all .cent .cent-left ul.faq li dl dt").click(function() {
		var count = $(this).index();
		$("#all .cent .cent-left ul.faq li dl dd").hide();
		$(this).siblings("#all .cent .cent-left ul.faq li dl dd").show();
	})
})

$(function(){
	$("#all .cent .cent-left .main li dl dd p").mouseover(function(){
		alert("over")
		$(this).find(".details").css("display","block");
		$(this).parent().parent().parent().parent().parent().siblings().find(".details").css("display","none");
	})	
})

$(function() {

	$("#all .page .pageH .subMenu li").mousemove(function() {
		$(this).addClass("thisStyle ").siblings().removeClass("thisStyle");
		var _this = $(this).index();
		$("#all .page .pageH .content > .c1:eq(" + _this + ")").show().siblings().hide();
	})
})

$(function() {

	$("#all .fashion .f-right .sMenu li").mousemove(function() {
		$(this).addClass("active ").siblings().removeClass("active");
		var _this = $(this).index();
		$("#all .fashion .f-right .sContent > .sc2:eq(" + _this + ")").show().siblings().hide();
	})
})

//轮播图
$(function() {
	$(".cent-center .banner-nav-li").mouseover(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var count = $(this).index();
		$(".cent-center .banner-ul-li").eq(count).show().siblings().hide();
	})
})

//右边固定悬浮窗，点击弹出和消失
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

//点击向上箭头回到顶部
$(function() {
	$("#all .nextpage .top").click(function() {
		var oTop = 0
		$("body,html").animate({
			scrollTop: oTop
		})
	})
})