/**
 * Created by beens on 16/11/29.
 */



var sqlite = require("sqlite3"),
    setting = require("../setting");



var db = new sqlite.Database(setting.sqlite.url);





var sql = [
    "CREATE TABLE IF NOT EXISTS test (t_name TEXT PRIMARY KEY, t_pass TEXT)",
    "CREATE TABLE IF NOT EXISTS test1 (t_name TEXT PRIMARY KEY, t_pass TEXT)",
    "insert into test (t_name,t_pass) values('bens','123123')"
];







var _run = function(){
    if(sql.length == 0){
        db.close();
        console.log("complete!");
    }else{
        var _sql = sql.shift();
        _runSql(_sql);
    }
};

var _runSql = function(sql){
    db.run(
        sql,
        [],
        function(err){
            if(err){
                console.log(err);
                db.close();
            }else{
                _run();
            }
        }
    );
};


_run();

