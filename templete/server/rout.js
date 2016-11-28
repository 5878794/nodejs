/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-10
 * Time: 下午9:21
 * Email:5878794@qq.com
 * =====================================
 * Desc:  路由文件
 */


var fs = require('fs'),            // 用于处理本地文件
	getFileType = require("./response/getFileType"),
	responseStaticResources = require("./response/staticResources"),
	api = require("./api/__api_list");


//var text = require("./api/test");
//var login = require("./api/login");
//var memberList = require("./api/memberList");



module.exports = function(src,method,getData,postData,request,response,wwwDir){
	//判断是否是请求的接口
	if(src.pathname.indexOf("/api/") > -1){
		//获取接口名
		var apiName = src.pathname.substr(src.pathname.lastIndexOf("/api/")+5);
		//接口存在调用接口
		if(api[apiName]){
			api[apiName](method,getData,postData,response);
			return;
		}
	}



		// 去掉前面的'/'
	var filePath = src.pathname.substring(1),
		//获取请求的文件名
		fileName = filePath.substr(filePath.lastIndexOf("/")+1),
		//判断是否有文件的后缀名
		hasType = (fileName.lastIndexOf(".") != -1),
		//获取文件后缀名
		type = fileName.substring(fileName.lastIndexOf(".")+1),
		//请求的完整地址
		url = "",
		//请求地址最后是否需要添加 /
		lastHasG = (filePath.lastIndexOf("/") == filePath.length - 1)? "" : "/";

	if(!hasType){
		//无文件后缀名的，自动修正到index.html
		url = wwwDir + filePath + lastHasG + "index.html";
	}else{
		//有文件后缀名的
		url = wwwDir + filePath;
	}

	//获取返回时的type
	type = (hasType)? type : "html";
	type = getFileType(type);


	//返回资源
	responseStaticResources(url,type,response);


    //
	//// 特殊URL会让服务器在发送响应前先等待
	//switch(src.pathname) {
    //
	//	case '/api':
	//		console.log("api test");
	//		//memberList(method,postData,getData,response);
	//		break;
    //
    //
    //
    //
    //
	//	default:// 处理来自本地目录的文件
	//			// 去掉前面的'/'
	//		var filePath = src.pathname.substring(1),
	//			//获取请求的文件名
	//			fileName = filePath.substr(filePath.lastIndexOf("/")+1),
	//			//判断是否有文件的后缀名
	//			hasType = (fileName.lastIndexOf(".") != -1),
	//			//获取文件后缀名
	//			type = fileName.substring(fileName.lastIndexOf(".")+1),
	//			//请求的完整地址
	//			url = "",
	//			//请求地址最后是否需要添加 /
	//			lastHasG = (filePath.lastIndexOf("/") == filePath.length - 1)? "" : "/";
    //
	//		if(!hasType){
	//			//无文件后缀名的，自动修正到index.html
	//			url = wwwDir + filePath + lastHasG + "index.html";
	//		}else{
	//			//有文件后缀名的
	//			url = wwwDir + filePath;
	//		}
    //
	//		//获取返回时的type
	//		type = (hasType)? type : "html";
	//		type = getFileType(type);
    //
    //
	//		//返回资源
	//		responseStaticResources(url,type,response);
	//		break;
	//}
};

