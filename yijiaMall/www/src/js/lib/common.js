
$(function(){
	$.ajax({//地名ajax请求
		url:"place.json",
		type:"get",
	}).done(function(data){//请求成功触发
			for(var i=0;i<data.length;i++){//创建li添加到ul中
				var li=data[i].place;
				var str="<li>"+li+"</li>"
				$('.header_place > ul').append(str);
			}
			$('.header_place li').eq(0).replaceWith('<b>'+$('.header_place li').eq(0).html()+'</b>');
			$('.header_place').hover(function(){//hover出现，移出消失
				$(".header_place p").css({"background-color":'#fff',
				"border-left":"1px solid #ddd","border-right":"1px solid #ddd"});
				$(".header_place i").css({'transform':'rotate(0deg)'});
				$('.header_place > ul').show();
			},function(){
				$(".header_place p").css({"background-color":'#f1f1f1',"border":"none"});
				$(".header_place i").css({'transform':'rotate(180deg)'});
				$('.header_place > ul').hide();
			})
			$('.header_place').delegate("li,b","click",function(){
				$(this).siblings('b').replaceWith('<li>'+$('.header_place b').html()+'</li>');
				$(this).replaceWith('<b>'+$(this).html()+'</b>');
				$(".header_place span").html($(this).html());
				$(".header_place p").css({"background-color":'#f1f1f1',"border":"none"});
				$(".header_place i").css({'transform':'rotate(180deg)'});
				$('.header_place > ul').hide();
			})
		}).fail(function(err){//如果请求失败弹出错误码
			alert(err.status);
		})
	//引入footer*****
	$.ajax({
		url:"footer.html",
		type:'get'
	}).done(function(date){
		$('#footer').append(date);
		$('#de_footer').append(date);
	}).fail(function(err){
		alert(err.status);
	})

	//ajax请求新闻
	$(function(){
		$.ajax({
			url:'news.json',
			type:'get'
		}).done(function(date){
			for(var i=0;i<date.length;i++){
				var a=date[i].newl;
				var b=date[i].newr;
				var str="<li><a>"+a+"<b>"+b+"</b></a></li>"
				$('.todayDate').append(str);
			}
		})
	})
})
//引入头部
$.ajax({
	url:"header.html",
	type:'get'
}).done(function(date){
	$('#index').prepend(date);
	$('#detail').prepend(date);
	$('#shopCar').prepend(date);
	$(".header_right li.hasi").hover(function(){
		$(this).css({"background-color":"#fff","padding":"1px 9px",
			"border-left":"1px solid #ddd","border-right":"1px solid #ddd"});
		$(this).children("i").css({'transform':'rotate(0deg)'});
		$(this).children("div").show();
	},function(){
		$(this).css({"background-color":"#f1f1f1","border":"none",
			"padding":"1px 10px"});
		$(this).children("i").css({'transform':'rotate(180deg)'});
		$(this).children("div").hide();
	})
	$('.banner span').on('click',function(){//点击隐藏广告
		$('.banner').slideUp('slow');
	})
}).fail(function(err){
	alert(err.status);
})
$(function(){
	$(".nav2>li").hover(function(){//分类列表，二级菜单
		$(this).children('div').css({"display":"block"});
		$(this).css({
			"border-bottom":"1px solid red",
			"border-top":"1px solid red",
			"width":"205px",
			"background-color":"white"
		});
		$(this).children('span').hide();
	},function(){
		$(this).children('div').css({"display":"none"});
		$(this).css({
			"border-bottom":"1px solid #f7f7f7",
			"border-top":"1px solid #f7f7f7",
			"width":"204px",
		});
		$(this).children('span').show();
	})
})
//注册登录页面引入底部
$(function(){
	$.ajax({
		url:"login_foot.html",
		type:'get'
	}).done(function(date){
		$('#login_foot').append(date);
		$('#enroll_foot').append(date);
	}).fail(function(err){
		alert(err.status);
	})
})
//注册页面
$(function(){
	$('.item input').on('focus',function(){
		$(this).parent().next().children('span').show().siblings().hide();
		$(this).next('b').css({
			"background":"none"
		})
	})
	$('.item input').on('blur',function(){
		$(this).parent().next().children('span').hide();
	})
		$('.item').eq(0).children('input').on('blur',function(){
			var reg=/^[a-zA-Z0-9]{1}[a-zA-Z0-9|-|_]{2,16}[a-zA-Z0-9]{1}$/;
			var regNum=/^[0-9]*$/;
			var str='';
			var str1='';
			for(var i=0;i<$(this).val().length;i++){
				str+=$(this).val().charAt(i);
				str1+=$(this).val().charAt(0);
			}
			if(str==str1){
				$('.sample').show().siblings().hide();
			}else{
				if(regNum.test($(this).val())){
					$('.allNum').show().siblings().hide();
				}else if(reg.test($(this).val())){
					$(this).next('b').css({
						"background":'url(../images/icon.png) no-repeat 0 -117px'
					})
				}else{
					$('.bit').show().siblings().hide();
				}	
			}
		})
		$('.item').eq(1).children('input').on('keyup',function(){
			var reg1=/[0-9]/;
			var reg2=/[a-zA-Z]/;
			var reg3=/[\_\@\$\#\%\!\*]/;
			var reg=/^.{6,20}$/;
			var k=0;
			if(reg.test($(this).val())){
				$(this).next('b').css({
					"background":'url(../images/icon.png) no-repeat 0 -117px'
				})
				if(reg1.test($(this).val())){
					k++;
				}
				if(reg2.test($(this).val())){
					k++;
				}
				if(reg3.test($(this).val())){
					k++;
				}
				if($(this).val().length>10){
					k++;
				}
			}
			if(k==1){
				$('.low').show().siblings().hide();
			}else if(k==2){
				$('.middle').show().siblings().hide();
			}else if(k>=3){
				$('.high').show().siblings().hide();
			}
		})
		$('.item').eq(1).children('input').on('blur',function(){
			if($(this).val().length<6 || $(this).val().length>20){
				$('.err').show().siblings().hide();
				$(this).next('b').css({
					"background":"none"
				})
			}
		})
		$('.item').eq(2).children('input').on('blur',function(){
			if($(this).val()===$('.item').eq(1).children('input').val()){
				$(this).next('b').css({
					"background":'url(../images/icon.png) no-repeat 0 -117px'
				})
			}else{
				$('.no_s').show().siblings().hide();
			}
		})
		$('.item').eq(3).children('input').on('blur',function(){
			var reg=/^[1][3|4|5|8]\d{9}$/;
			if(reg.test($(this).val())){
				$(this).next('b').css({
					"background":'url(../images/icon.png) no-repeat 0 -117px'
				})
			}else{
				$('.style_1').show();
			}
		})
		$('.checkbox a').on('click',function(){

		})
})
$(function(){
	$.ajax({
		url:"num.json",
		type:"get"
	}).done(function(date){
		var $img=date[Math.floor(Math.random()*date.length)].img;
		var str="<img src="+$img+">";
		$('.item').eq(4).children('em').append(str);
		$('.item').eq(4).children('em').on('click',function(){
			var $img1=date[Math.floor(Math.random()*date.length)].img;
			$(this).children('img').attr("src",$img1);
		})
	}).fail(function(err){
		alert(err.status);
	})
})
//登录页面
$(function(){//扫码登录和账户登录切换
	$('.login_title b').eq(0).on('click',function(){
		$('.login1').show();
		$('.login2').hide();
		$(this).css({"font-weight": 700,"color":"#e4393c"}).siblings().css({
			"font-weight":100,"color":"#666"
		})	
		//点击滚动，延时恢复
		$('.scan').stop(true).animate({"left":"0"},function(){
			$('.login1_pic .orange').show();
		});
		setTimeout(function(){
			$('.scan').stop(true).animate({"left":"64px"});
			$('.login1_pic .orange').hide();
		},3000)
	})
	$('.login_title b').eq(1).on('click',function(){
		$('.login1').hide();
		$('.login2').show();
		$(this).css({"font-weight": 700,"color":"#e4393c"}).siblings().css({
			"font-weight":100,"color":"#666"
		})
	})
//二维码滚动效果
	$('.login1_pic').on('mouseover',function(){
		$(this).children('.scan').stop(true).animate({"left":"0"},function(){
			$('.login1_pic .orange').show();
		});
	})
	$('.login1_pic').on('mouseout',function(){
		$(this).children('.scan').stop(true).animate({"left":"64px"});
		$('.login1_pic .orange').hide();
	})
})
//商品详情页面
$(function(){
	$('.all_1').on('mouseover',function(){
		$(this).children('.nav2_1').show();
		$(this).children('a').children('s').css("transform","rotate(0deg)");
	})
	$('.all_1').on('mouseout',function(){
		$(this).children('.nav2_1').hide();
		$(this).children('a').children('s').css("transform","rotate(180deg)");
	})
})
$(function(){
	$(".nav2_1>li").hover(function(){//分类列表，二级菜单
		$(this).children('div').css({"display":"block"});
		$(this).css({
			"background-color":"white",
			"padding-right":"21px"
		});
		$(this).children('span').hide();
	},function(){
		$(this).children('div').css({"display":"none"});
		$(this).css({
			"background-color":"#b1191a"
		});
		$(this).children('span').show();
	})
})
//放大镜效果
$(function(){
	$('.im_small').on('mouseover',function(){
		$(this).children('.im_con').show();
		$('.im_2').show();
	})
	$('.im_small').on('mousemove',function(ev){
		var w=ev.pageX-$(this).offset().left-$('.im_con').width()/2;
		var h=ev.pageY-$(this).offset().top-$('.im_con').width()/2;
		if(w>parseInt($(this).css('width'))-parseInt($('.im_con').css('width'))){
			w=parseInt($(this).css('width'))-parseInt($('.im_con').css('width'));
		}else if(w<0){
			w=0;
		}
		if(h>parseInt($(this).css('height'))-parseInt($('.im_con').css('height'))){
			h=parseInt($(this).css('height'))-parseInt($('.im_con').css('height'));
		}else if(h<0){
			h=0;
		}
		$(this).children('.im_con').show().css({
			'left':w,
			'top':h
		});
		var l=parseFloat($('.im_con').css('left'));
		var t=parseFloat($('.im_con').css('top'));
		var x=l/($('.im_small').width()-$('.im_con').width());
		var y=t/($('.im_small').height()-$('.im_con').height());

		$('.im_2 img').css({
			'left':-x*($('.im_2 img').width()-$('.im_2').width()),
			'top':-y*($('.im_2 img').height()-$('.im_2').height())
		})
	})
	$('.im_small').on('mouseout',function(){
		$(this).children('.im_con').hide();
		$('.im_2').hide();
	})
})
$('.im_1 ul img').eq(0).on('mouseover',function(){
	$('.im_small img').attr('src',"../images/pic_s.jpg");
	$(this).css('border','1px solid red').siblings().css('border','1px solid #fff');
	$('.im_2 img').attr('src',"../images/pic_b.jpg");
})
$('.im_1 ul img').eq(1).on('mouseover',function(){
	$('.im_small img').attr('src',"../images/pic_s1.jpg");
	$(this).css('border','1px solid red').siblings().css('border','1px solid #fff');
	$('.im_2 img').attr('src',"../images/pic_b1.jpg");
})
$('.im_1 ul img').eq(2).on('mouseover',function(){
	$('.im_small img').attr('src',"../images/pic_s2.jpg");
	$(this).css('border','1px solid red').siblings().css('border','1px solid #fff');
	$('.im_2 img').attr('src',"../images/pic_b2.jpg");
})
$('.im_1 ul img').eq(3).on('mouseover',function(){
	$('.im_small img').attr('src',"../images/pic_s3.jpg");
	$(this).css('border','1px solid red').siblings().css('border','1px solid #fff');
	$('.im_2 img').attr('src',"../images/pic_b3.jpg");
})
$('.im_1 ul img').eq(4).on('mouseover',function(){
	$('.im_small img').attr('src',"../images/pic_s4.jpg");
	$(this).css('border','1px solid red').siblings().css('border','1px solid #fff');
	$('.im_2 img').attr('src',"../images/pic_b4.jpg");
})
//商品详情引入产品颜色
$.ajax({
	url:"color.json",
	type:"get"
}).done(function(date){
	for(var i=0;i<date.length;i++){
		var $img=date[i].color;
		var $str="<li><img src="+$img+"></li>"
		$('.color ul').append($str);
	}
}).fail(function(err){
	alert(err.status);
})
//缓存的增删改查
function addCookie(key, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = key + '=' + encodeURI(value) + ';expires=' + date;
}
function getCookie(key) {
    var str = decodeURI(document.cookie);
    var arr = str.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == key) {
            return arr2[1];
        }
    }
}
function delCookie(key) {
    addCookie(key, '', -1);
}
//将注册成功的信息保存到缓存中
$(function(){
	$('.now').on('click',function(){
		console.log($('.item').eq(0).children('b').css('background-position'));
		if($('.item').eq(0).children('b').css('background-position')=="0px -117px"&&
			$('.item').eq(1).children('b').css('background-position')=="0px -117px"&&
			$('.item').eq(2).children('b').css('background-position')=="0px -117px"&&
			$('.item').eq(3).children('b').css('background-position')=="0px -117px"){
			addCookie($('.item').eq(0).children('input').val(),$('.item').eq(1).children('input').val(),30);
			$('#goodTime').show();
		}
	})	
})
$(function(){
	$('.form2 i input').on('click',function(){
		if($(this).is(":checked")){
			$('.warn').css("opacity",'1');
			$('.fore_2 input').val(getCookie('password'));
		}else{
			$('.warn').css("opacity","0");
			$('.fore_2 input').val('');
		}
	})
	$('.fore_1 input').on('focus',function(){
		$(this).siblings('label').css("background-position","0 -48px");
	})
	$('.fore_1 input').on('blur',function(){
		$(this).siblings('label').css("background-position","0 0");
	})
	$('.fore_2 input').on('focus',function(){
		$(this).siblings('label').css("background-position","-48px -48px");
	})
	$('.fore_2 input').on('blur',function(){
		$(this).siblings('label').css("background-position","-48px 0px");
	})
})
//匹配登录信息是否准确
$(function(){
	if(getCookie('key')){
		$('.fore_1 input').val(getCookie('key'))
		$('.fore_2 input').val(getCookie('password'))
	}
	$('.btn_login').on('click',function(){
		if(document.cookie){
			var cookies = document.cookie.replace(/\s+/g,"").split(";");
			for(var i=0;i<cookies.length;i++){
				var userName = cookies[i].split("=")[0];
				var password = cookies[i].split("=")[1];
				if($('.fore_1 input').val()==userName){
					if($('.fore_2 input').val()==password){
						addCookie('key',userName);
						addCookie('password',password);
						alert("登录成功");
						//window.location.href = "index.html";
					}else{
						alert('密码输入错误');
					}
				}
			}

		}
	})
})	
//加入购物车效果
$('.shopCar button').on('click',function(){
	$('.tantan b').text($(this).siblings('input').val());
	$('#tankuang').show();
	if(document.cookie){
		var cookies = document.cookie.replace(/\s+/g,"").split(";");
		for(var i=0;i<cookies.length;i++){
			var userName = cookies[i].split("=")[0];
			var password = cookies[i].split("=")[1];
			var num=password.split(",")[1];
			if(num){
				if($('.information h3').text()==userName){
					$('.shopCar input').val(parseInt($('.shopCar input').val())+parseInt(num));
					addCookie($('.information h3').text(),[$('.jd_price h5').text(),$('.shopCar input').val()],50);
				}else{
					addCookie($('.information h3').text(),[$('.jd_price h5').text(),$('.shopCar input').val()],50);
				}
			}else{
				addCookie($('.information h3').text(),[$('.jd_price h5').text(),$('.shopCar input').val()],50);
			}
		}
	}else{
		addCookie($('.information h3').text(),[$('.jd_price h5').text(),$('.shopCar input').val()],50);
	}
})
$(function(){
	var cookies = document.cookie.replace(/\s+/g,"").split(";");
	if(document.cookie){
		for(var i=0;i<cookies.length;i++){
			var userName = cookies[i].split("=")[0];
			var password = cookies[i].split("=")[1];
			var num=password.split(",")[1];
			var price=password.split(',')[0];
			if(num){
				var $clone=$('.clone_li').clone(true);
				$clone.children('p').text(userName);
				$clone.children('.shopping_num').children('input').val(num);
				$clone.children('h3').text(price);
				$clone.children('h4').text(parseInt(price)*parseInt(num));
				$('.jiesuan b').text(parseInt(price)*parseInt(num));
				$clone.addClass('clone_1');
				$clone.show();
				$clone.appendTo('.shopping');
			}
		}
	}
})
$('.clone_li h5').on('click',function(){
	$(this).parents('li').hide();
	delCookie($(this).siblings('p').text());
	window.location.href = "shopCar.html";
})
$('.add').on('click',function(){
	$value=$(this).siblings('input').val();
	$value++;
	$(this).siblings('input').val($value);
})
$('.cut').on('click',function(){
	$value=$(this).siblings('input').val();
	if($value>1){
		$value--;
	}
	$(this).siblings('input').val($value);
})
$(".shopping_num").children('.ad').on('click',function(){
	$value=$(this).siblings('input').val();
	$value++;
	$(this).siblings('input').val($value);
	addCookie($('.shopping p').text(),[$('.shopping h3').text(),$value]);
	$('.shopping h4').text($('.shopping h3').text()*$value);
	$('.jiesuan b').text($('.shopping h3').text()*$value);
})
$(".shopping_num").children('.ct').on('click',function(){
	$value=$(this).siblings('input').val();
	if($value>1){
		$value--;
	}
	$(this).siblings('input').val($value);
	addCookie($('.shopping p').text(),[$('.shopping h3').text(),$value]);
	$('.shopping h4').text($('.shopping h3').text()*$value);
	$('.jiesuan b').text($('.shopping h3').text()*$value);
})

