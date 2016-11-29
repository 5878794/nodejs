

var mysql = require("mysql"),
    setting = require("../setting");


//var conn = mysql.createConnection({
//    host: 'localhost',
//    user: 'bens',
//    password: 'xf771026aa',
//    database:'chenhong',
//    port: 3306
//});
var conn = mysql.createConnection(setting.mysql);

conn.connect();



var sql = [
    "CREATE TABLE IF NOT EXISTS c_user (" +
    "                      t_id int(50) not null auto_increment primary key, " +
    "                      t_name VARCHAR(30), " +
    "                      t_pwd VARCHAR(30));"
    ,
    "CREATE TABLE IF NOT EXISTS c_token (" +
    "                       t_id int(50) not null auto_increment primary key, " +
    "                       t_token VARCHAR(30), " +
    "                       t_time VARCHAR(50));"


];


var a = 0;
var _complete = function(){
    var l = sql.length;
    a++;
    if(l == a){
        console.log("sql run complete!");
    }
};



for(var i= 0,l=sql.length;i<l;i++){
    conn.query(sql[i],function(err, rows, fields){
        if (err){
            console.log(err);
        }
        _complete();
    })
}
