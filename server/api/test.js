/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-13
 * Time: 下午8:13
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */



var mysql = require("./../mysql_set"),
	res = require("./../response_json");


var test = function(request,response){

	//res.test(response,{a:"hello world"});

	mysql.connect();

	mysql.conn.query('SELECT * from users', function(err, rows, fields) {
		if (err){
			res.error(response,err);
			return;
		}
		res.success(response,rows);
	});
	mysql.end();
};



module.exports = test;
