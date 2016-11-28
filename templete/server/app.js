


// 首先加载所有需要用到的模块
var http = require('http'),        // Http服务器API
	rout = require("./rout"),
	url = require('url'),
	setting = require("./setting");


var server = new http.Server(),    // 创建新的HTTP服务器
	wwwDir = setting.wwwDir,
	port = setting.serverPort;



server.listen(port);            // 监听端口8000
// 使用on方法注册时间处理
server.on('request', function(request, response) { // 当有request请求的时候触发处理函数
	var src = url.parse(request.url),   //当前请求的地址，不含前缀
		method = request.method,
		getData = url.parse(request.url, true).query1,
		postData = "";

	//获取提交的报文
	request.on('data', function (data) {
		postData += data;
	});
	request.on('end', function () {
		try{
			postData = JSON.parse(postData);
		}catch(e){

		}

		//获取完成，路由处理
		rout(src,method,getData,postData,request,response,wwwDir);
	});



});



console.log("server start on "+port+" port");