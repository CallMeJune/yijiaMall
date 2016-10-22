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

//验证码
//--------------验证码封装
function codes() {
	var s = ''; //定义一个空的字符串
	function Rand(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min);
	}
	var index = -1;
	var count = 0;
	while(count < 4) {
		var index = Rand(48, 122);
		if((index >= 65 && index <= 90) || (index >= 97 && index <= 122) || (index >= 48 && index <= 57)) {
			s += String.fromCharCode(index);
			count++;
		}
	}
	checkCode.innerHTML = s;
}
//---------------初始验证码
var checkCode = document.getElementsByClassName("checkcode")[0];
var change = document.getElementsByClassName("change")[0];
var s = ''; //定义一个空的字符串
function Rand(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}
var index = -1;
var count = 0;
while(count < 4) {
	var index = Rand(48, 122);
	if((index >= 65 && index <= 90) || (index >= 97 && index <= 122) || (index >= 48 && index <= 57)) {
		s += String.fromCharCode(index);
		count++;
	}
}
checkCode.innerHTML = s;
//alert(s)
//----------点击更换验证码
checkCode.onclick = function() {
	codes();
}
change.onclick = function() {
	codes();
}
//-----------判断验证码输入的正确性
var remind = document.getElementsByClassName("remind")[0];
var ch = document.getElementsByClassName("ch")[0];
var lg_btn = document.getElementsByClassName("lg-btn")[0];
lg_btn.onclick = function(){
	if(ch.value!=checkCode.innerHTML && ch.value!=""){
		remind.innerHTML = "您输入的验证码错误，请重新输入！"
	}
	if(ch.value==""){
		remind.innerHTML = "您输入的验证码为空，请重新输入！"
	}if(ch.value==checkCode.innerHTML){
		remind.innerHTML = "验证码区分大小写哦！"
	}
}




//--------------表单验证
var reg1 = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/; //用户名验证
var reg2 = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/ //密码
var reg3=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;  //邮箱验证
var reg4 = /^1[3-8]\d{9}$/ //手机号码验证
var reg5 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/ //身份证

var mobile = document.getElementsByClassName("mobile")[0];
var e_mail = document.getElementsByClassName("e-mail")[0];
var pwd1 = document.getElementsByClassName("pwd1")[0];
var pwd2 = document.getElementsByClassName("pwd2")[0];
var lg_info1 = document.getElementsByClassName("lg-info")[2];
var lg_info2 = document.getElementsByClassName("lg-info")[3];
var lg_info3 = document.getElementsByClassName("lg-info")[5];
var lg_info4 = document.getElementsByClassName("lg-info")[6];
//手机号码验证
mobile.onblur = function(){
	if(reg4.test(mobile.value)==false && mobile.value!=""){
		lg_info1.innerHTML = "请输入正确的手机号码！";
		lg_info1.style.color = "red";
	}else if(mobile.value==""){
		lg_info1.innerHTML = "手机号码不能为空";
		lg_info1.style.color = "red";
	}if(reg4.test(mobile.value)==true){
		lg_info1.innerHTML = "";
	}
}

//邮箱验证
e_mail.onblur = function(){
	if(reg3.test(e_mail.value)==false && e_mail.value!=""){
		lg_info2.innerHTML = "请输入正确的邮箱地址！";
		lg_info2.style.color = "red";
	}if(e_mail.value==""){
		lg_info2.innerHTML = "邮箱不能为空";
		lg_info2.style.color = "red";
	}if(reg3.test(e_mail.value)==true){
		lg_info2.innerHTML = "";
	}

}

//密码验证
pwd1.onblur = function(){
	if(pwd1.value.length<6&&pwd1.value!=""){
		lg_info3.innerHTML = "密码长度不能小于6";
		lg_info3.style.color = "red";
	}if(pwd1.value==""){
		lg_info3.innerHTML = "密码不能为空";
		lg_info3.style.color = "red";
	}if(pwd1.value.length>=6 && pwd1.value.length<=10){
		lg_info3.innerHTML = "您的密码保密强度有点弱哦！";
		lg_info3.style.color = "red";
	}
}	
pwd2.onblur = function(){	
	if(pwd2.value!=pwd1.value && pwd2.value!=""){
		lg_info4.innerHTML = "两次输入的密码不一致，请重新输入";
		lg_info4.style.color = "red";
	}if(pwd2.value==""){
		lg_info4.innerHTML = "密码不能为空哦！";
		lg_info4.style.color = "red";
	}if(pwd2.value == pwd1.value){
		lg_info4.innerHTML = "";
	}
}

















