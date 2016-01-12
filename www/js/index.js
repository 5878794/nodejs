/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-17
 * Time: 下午9:06
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */




$(document).ready(function(){
	WELCOME.init();



});


var WELCOME = {
	body:null,
	init:function(){
		this.body = $("#welcome");
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		$$("#welcome").myclickdown(function(){

		}).myclickup(function(){

		}).myclickok(function(){
			_this.body.css({display:"none"});
			LOGIN.init();
		});
	}
};

var LOGIN = {
	body:null,
	init:function(){
		this.body = $("#login");
		this.body.css({display:"block"});

		this.createMedia();
		this.addEvent();
	},
	createMedia:function(){
		var dom = this.body.find(".movie");

		this.movie = new DEVICE.playMovie({
			dom:dom,
			src:["mp4/fll.mp4"],
			poster:"",
			autoPlay:true,
			loop:true,
			controls:false,
			preload:true
		});
		this.movie.play();
		dom.find("video").css3({
			transform:"scaleY(2.8)"
		})

	},
	addEvent:function(){
		var btn = this.body.find(".login_btn_main").find("span"),
			_this = this;

		$$(btn).myclickdown(function(){
			$(this).css({background:"#ccc"});
		}).myclickup(function(){
			$(this).css({background:"#fff"});
		}).myclickok(function(){
			_this.showLoginDiv();
		})
	},
	showLoginDiv:function(){
		var login = this.body.find(".login_btn_main"),
			div = this.body.find(".login_main_body");
		div.find("._rows").css3({
			transform:"translateX(100%)"
		});


		login.find("._login_btn_").cssAnimate({
			opacity:0
		},100);
		login.cssAnimate({
			top:"50%",
			"margin-top":"-85px"
		},150,function(){
			div.css({display:"block"});
			login.find("._login_btn_").css({display:"none"});
			login.cssAnimate({
				height:"170px"
			},500,function(){
				div.find("._rows1").cssAnimate({
					transform:"translateX(0)",
					opacity:1
				},300);
				setTimeout(function(){
					div.find("._rows2").cssAnimate({
						transform:"translateX(0)",
						opacity:1
					},300);
				},50);
				setTimeout(function(){
					div.find("._rows3").cssAnimate({
						transform:"translateX(0)",
						opacity:1
					},300);
				},100);
			},true,"ease");
		},true,"ease-in-out");


	}
};