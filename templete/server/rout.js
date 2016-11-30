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
	api = require("./api/__api_list"),
	url = require('url'),
	saveFile = require("./fileUpload/save"),
	setting = require("./setting"),
	back404 = require("./response/json");

var wwwDir = setting.wwwDir;



var getRequestData = function(request,callback){
	var postData = "",
		getData = url.parse(request.url, true).query;

	//获取提交的报文
	request.on('data', function (data) {
		postData += data;
	});
	request.on('end', function () {
		postData = url.parse("?" + postData,true).query;
		try{
			postData = JSON.parse(postData);
		}catch(e){

		}
		callback(getData,postData);
	});
};



module.exports = function(request,response){
	var src = url.parse(request.url),   //当前请求的地址，不含前缀
		method = request.method,
		pathName = src.pathname,
		dirName = pathName.match(/^\/[a-zA-Z0-9_-]*\//) || [];
	dirName = dirName[0] || "";
	dirName = dirName.substr(1, dirName.length-2);


	//-----------------------------------------
	//文件上传
	if(dirName.toLowerCase() == "upload" && method.toLowerCase() == "post"){
		saveFile(request,response);
		return;
	}


	//-----------------------------------------
	//api接口   只支持一层的名字解析
	if(dirName.toLowerCase() == "api"){
		//获取接口名
		var apiName = pathName.substr(5);
		//接口存在调用接口
		if(api[apiName]){
			getRequestData(
				request,
				function(getData,postData){
					api[apiName](method,getData,postData,request,response);
				}
			);
		}else{
			back404("error","接口不存在！",response);
		}
		return;
	}


	//-----------------------------------------
	//其他静态资源
	var filePath = src.pathname.substring(1),
		//获取请求的文件名
		fileName = filePath.substr(filePath.lastIndexOf("/")+1),
		//判断是否有文件的后缀名
		hasType = (fileName.lastIndexOf(".") != -1),
		//获取文件后缀名
		type = fileName.substring(fileName.lastIndexOf(".")+1),
		//请求的完整地址
		_url = "",
		//请求地址最后是否需要添加 /
		lastHasG = (filePath.lastIndexOf("/") == filePath.length - 1)? "" : "/";

	if(!hasType){
		//无文件后缀名的，自动修正到index.html
		_url = wwwDir + filePath + lastHasG + "index.html";
	}else{
		//有文件后缀名的
		_url = wwwDir + filePath;
	}

	//获取返回时的type
	type = (hasType)? type : "html";
	type = getFileType(type);


	//返回资源
	responseStaticResources(_url,type,response);

};
