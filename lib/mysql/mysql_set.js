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


 var mysql = require('mysql');

var conn;




module.exports.connect = function(){
	conn = mysql.createConnection({
		host: 'localhost',
		user: 'bens',
		password: 'xf771026aa',
		database:'chenhong',
		port: 3306
	});
	conn.connect();
	module.exports.conn = conn;
};

module.exports.end = function(){
	conn.end();
};


module.exports.tokenTime = 1000000;



//mysql = require("./../mysql_set")
//mysql.connect();
//mysql.conn.query('SELECT * from user where user = ? and pass=?',[post.user,post.pass], function(err, rows, fields) {
//	if (err) {
//		res.error(mysql, response, err);
//		return;
//	}
//
//	if(rows.length != 1){
//		res.error(mysql,response,"用户名或密码错误!");
//		return;
//	}
//});
