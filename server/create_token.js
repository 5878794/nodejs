/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-15
 * Time: 下午8:36
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */



var md5 = require("md5");

module.exports = function(user,pass){
	var time = new Date().getTime(),
		str = user + "_" + pass + "_" + time;

	return md5(str);


};
