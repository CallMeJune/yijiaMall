/***
 * 
 *这是我的运动框架
 *
 *
 *
 *
 *
 *
 */
function startMove(obj, json, durationTime, fx, fn) {
	//var objB = {width:100,height:100}; //初始化值
	//var objC = {width:200,height:200}; //变化的值
	var objB = {}; //初始值对象
	var objC = {}; //变化值对象
	for(var attr in json) {
		//attr: width:300, height:300
		objB[attr] = parseFloat(getStyles(obj, attr)) || 0;
		objC[attr] = json[attr] - objB[attr];
		//objC.width = 300 - 100;
		//objC.height = 300 - 100;
	}
	//console.log(objB);
	//console.log(objC);
	var d = durationTime;
	var startTime = (new Date()).getTime(); //当前时间
	//要防止多次点击的时候，计时器累加，所以一开始就先清掉计时器，把计时器绑定给对象
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var changeTime = (new Date()).getTime();
		var t = Math.min(changeTime - startTime, d);
		//当时间到了
		//console.log(t);
		if(t >= d) {
			clearInterval(obj.timer);
			if(fn) {
				fn();
			}

		}
		//obj.style[attr] = c*t/d+b+"px"; 

		for(var attr in json) {
			if(fx == "") {
				fx = "linear";
			}

			var value = Tween[fx](t, objB[attr], objC[attr], d);
			if(attr == "opacity") {
				obj.style.opacity = value;
				obj.style.filter = 'alpha(opacity=' + (value * 100) + ')'
			}
			obj.style[attr] = value + "px";
		}
		//我的每一次值=变化值*（每次时间占的比）+初始位置+"px"
	}, 15);
}

//获得计算后的样式
function getStyles(obj, attr) {
	if(window.getComputedStyle) {
		//针对FF CH
		return window.getComputedStyle(obj, null)[attr];
	} else {
		//针对IE
		//obj.currentStyle.filter = alpha(opacity=10)
		if(attr=="opacity"){
			return obj.currentStyle.opacity|| (obj.currentStyle.filter).match(/\d+/)/100;
			
		}else{
			return obj.currentStyle[attr];
		}
	}
}

var Tween = {
	linear: function(t, b, c, d) { //匀速
		return c * t / d + b;
	},
	easeIn: function(t, b, c, d) { //加速曲线
		return c * (t /= d) * t + b;
	},
	easeOut: function(t, b, c, d) { //减速曲线
		return -c * (t /= d) * (t - 2) + b;
	},
	easeBoth: function(t, b, c, d) { //加速减速曲线
		if((t /= d / 2) < 1) {
			return c / 2 * t * t + b;
		}
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d) { //加加速曲线
		return c * (t /= d) * t * t * t + b;
	},
	easeOutStrong: function(t, b, c, d) { //减减速曲线
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d) { //加加速减减速曲线
		if((t /= d / 2) < 1) {
			return c / 2 * t * t * t * t + b;
		}
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p) { //正弦衰减曲线（弹动渐入）
		if(t === 0) {
			return b;
		}
		if((t /= d) == 1) {
			return b + c;
		}
		if(!p) {
			p = d * 0.3;
		}
		if(!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	elasticOut: function(t, b, c, d, a, p) { //正弦增强曲线（弹动渐出）
		if(t === 0) {
			return b;
		}
		if((t /= d) == 1) {
			return b + c;
		}
		if(!p) {
			p = d * 0.3;
		}
		if(!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	elasticBoth: function(t, b, c, d, a, p) {
		if(t === 0) {
			return b;
		}
		if((t /= d / 2) == 2) {
			return b + c;
		}
		if(!p) {
			p = d * (0.3 * 1.5);
		}
		if(!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		if(t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
				Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
		return a * Math.pow(2, -10 * (t -= 1)) *
			Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	},
	backIn: function(t, b, c, d, s) { //回退加速（回退渐入）
		if(typeof s == 'undefined') {
			s = 1.70158;
		}
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	backOut: function(t, b, c, d, s) {
		if(typeof s == 'undefined') {
			s = 3.70158; //回缩的距离
		}
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	backBoth: function(t, b, c, d, s) {
		if(typeof s == 'undefined') {
			s = 1.70158;
		}
		if((t /= d / 2) < 1) {
			return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		}
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d) { //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d - t, 0, c, d) + b;
	},
	bounceOut: function(t, b, c, d) {
		if((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if(t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
		} else if(t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
		}
		return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
	},
	bounceBoth: function(t, b, c, d) {
		if(t < d / 2) {
			return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	}
}