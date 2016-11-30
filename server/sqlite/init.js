/**
 * Created by beens on 16/11/29.
 */



var sqlite = require("sqlite3"),
    setting = require("../setting");


var db = new sqlite.Database(setting.sqlite.url);


module.exports = db;





//var sqlite = require("./init");

//------------------------------------
//select 一次全部返回
//sqlite.all(
//    "select * from test",
//    function(err,rs){
//        if(err){
//            //失败
//            console.log(err);
//        }else{
//            //成功   返回数组
//            console.log(rs);
//        }
//    }
//);
//sqlite.close();

//------------------------------------
//select 一条数据执行一次回调
//sqlite.each(
//    "select * from test",
//    function(err,row){
//        if(err){
//            console.log(err);   //执行出错  会继续返回下一行，需要加参数控制只返回一次
//        }else{
//            console.log(row);   //返回当前行   json对象
//        }
//    },
//    function(){
//        console.log("all down"); //列表全部返回完成
//    }
//);
//sqlite.close();

//------------------------------------
//执行其他sql语句
//sqlite.run(
//    "insert into test (t_name,t_pass) values(?,?)",
//    ["bens123123","2222222"],
//    function(err){
//        if(err){
//            //失败
//            console.log(err);
//        }else{
//            //成功 无返回参数 null
//            console.log("success");
//        }
//    }
//);
//sqlite.close();