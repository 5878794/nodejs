/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-15
 * Time: 下午9:06
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */




var mysql = require("./../mysql_set"),
	res = require("./../response_json"),
	checkToken = require("./../check_token");


module.exports = function(type,post,get,response){
	mysql.connect();

	var token = post.token;

	checkToken(mysql,token,function(state){
		if(state != "ok"){
			res.timeout(mysql,response,state);
			return;
		}


		mysql.conn.query('SELECT * from list', function(err, rows, fields) {
			if (err){
				res.error(mysql,response,err);
				return;
			}


			res.success(mysql,response,rows);
		});
	});




};