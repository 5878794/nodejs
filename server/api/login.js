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
	res = require("./../response_json"),
	getToken = require("./../create_token"),
	saveToken = require("./../save_token");


var login = function(type,post,get,response){
	mysql.connect();
	mysql.conn.query('SELECT * from user where user = ? and pass=?',[post.user,post.pass], function(err, rows, fields) {
		if (err){
			res.error(mysql,response,err);
			return;
		}



		if(rows.length != 1){
			res.error(mysql,response,"用户名或密码错误!");
			return;
		}

		//生成token
		var token = getToken(post.user,post.pass);
		saveToken(mysql,rows[0].id,token,function(state){
			if(!state){
				res.error(mysql,response,"登陆程序错误！");
				return;
			}


			res.success(mysql,response,{
				token:token
			});
		});



	});

};




module.exports = login;




