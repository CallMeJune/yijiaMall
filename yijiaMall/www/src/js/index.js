$(function() {
	$("#all .cent .cent-left .childmenu li b").click(function() {
		$("#all .cent .cent-left .childmenu li .menu-body").show()
	})
})

//page的tab切换
$(function() {

	$("#all .page .pageH .subMenu li").mousemove(function() {
		$(this).addClass("thisStyle ").siblings().removeClass("thisStyle");
		var _this = $(this).index();
		$("#all .page .pageH .content > .c1:eq(" + _this + ")").show().siblings().hide();
	})
})

//fashion的tab切换
$(function() {

	$("#all .fashion .f-right .sMenu li").mousemove(function() {
		$(this).addClass("active ").siblings().removeClass("active");
		var _this = $(this).index();
		$("#all .fashion .f-right .sContent > .sc2:eq(" + _this + ")").show().siblings().hide();
	})
})

var oUL = document.getElementsByClassName("banner-ul")[0];
var navlist = document.getElementsByClassName("banner-nav-ul")[0].children;
//当前要显示的图片索引，索引从0开始，打开页面即将切换到第2张，因此索引初始值为1
//运动会根据当前索引值，将相应的图片显示出来
var index = 0;
var timer = setInterval(play, 2000);

oUL.onmouseover = function() {
	clearInterval(timer);
}

oUL.onmouseout = function() {
	timer = setInterval(play, 2000);
}

function play() {
	index++;
	if(index == 6) {
		oUL.style.left = 0;
		index = 1;
	}
	startMove(oUL, {
		left: -oUL.children[0].offsetWidth * index
	}, 500, "");

	//控制5个小圆
	for(var i = 0; i < navlist.length; i++) {
		navlist[i].className = "banner-nav-li";
	}
	navlist[index == 5 ? 0 : index].className = "banner-nav-li active";
}

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

//模糊查询
$(function() {
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$(".txt").autocomplete({
		source: availableTags
	});
});