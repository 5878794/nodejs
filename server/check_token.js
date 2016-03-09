/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-15
 * Time: 下午9:23
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */




module.exports = function(mysql,token,fn){
	var time = new Date().getTime() - mysql.tokenTime;

	mysql.conn.query("select * from token where token='"+token+"' and time  >= "+time , function(err, rows, fields) {
		var state = "";
		if (err){
			state = err;
		}else if(rows.length != 1){
			state = "用户长时间未操作，请重新登陆！";
		}else{
			state = "ok";
		}

		fn(state);

	});
};