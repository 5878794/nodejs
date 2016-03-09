/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-15
 * Time: 下午9:12
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */





module.exports = function(mysql,id,token,fn){
	var time = new Date().getTime();

	mysql.conn.query("delete  from token where user_id ="+id+" ", function(err, rows, fields) {
		var state = "";
		if (err){
			state = false;
			fn(state);
		}else{
			mysql.conn.query("insert into token (user_id,token,time) values('"+id+"','"+token+"',"+time+") ", function(err, rows, fields) {
				var state = "";
				if (err){
					state = false;
				}else{
					state =  true;
				}

				fn(state);
			});
		}


	});





};