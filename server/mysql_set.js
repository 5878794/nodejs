/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-13
 * Time: 下午8:27
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */


// var mysql = require('mysql');

var conn;




module.exports.connect = function(){
	conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'xf771026aa',
		database:'bx',
		port: 3306
	});
	conn.connect();
	module.exports.conn = conn;
};

module.exports.end = function(){
	conn.end();
};


module.exports.tokenTime = 1000000;
