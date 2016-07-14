/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-13
 * Time: 下午8:38
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */


 var responseJson= function(response,rs){
	response.writeHead(200, {
		'Content-type':'application/json; charset=UTF-8',
		"Access-Control-Allow-Origin":"*",
		"Access-Control-Allow-Headers":"Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
		"Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
	});
	response.write(JSON.stringify(rs));
	response.end();
};


module.exports.test = function(response,data){
	responseJson(response,{state:1,data:data,msg:"ok"});
	//mysql.end();
};


module.exports.success = function(response, rs){
	responseJson(response,{state:1,data:rs,msg:"ok"});
	//mysql.end();
};


module.exports.error = function (response, err) {
	responseJson(response,{state:0,msg:err,data:{}});
	//mysql.end();
};

module.exports.timeout = function (response, err) {
	responseJson(response,{state:-1,msg:err,data:{}});
	//mysql.end();
};