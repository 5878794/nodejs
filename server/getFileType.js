/*
 * Filename : 
 * =====================================
 * Created with WebStorm.
 * User: bens
 * Date: 15-9-10
 * Time: 下午9:40
 * Email:5878794@qq.com
 * =====================================
 * Desc:
 */




module.exports = function(endTag){
	var type=null;
	switch(endTag){
		case 'html' :
		case 'htm' :
			type = 'text/html; charset=UTF-8';
			break;
		case 'js' :
			type = 'application/javascript; charset="UTF-8"';
			break;
		case 'css' :
			type = 'text/css; charset="UTF-8"';
			break;
		case 'txt' :
			type = 'text/plain; charset="UTF-8"';
			break;
		case 'manifest' :
			type = 'text/cache-manifest; charset="UTF-8"';
			break;
		default :
			type = 'application/octet-stream';
			break;
	}
	return type;
};