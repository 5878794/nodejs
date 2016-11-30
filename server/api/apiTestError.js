/**
 * Created by beens on 16/11/28.
 */


var back = require("../response/json");

module.exports = function(method,getData,postData,request,response){
    //处理过程

    var msg = "参数错误";

    back("error",msg,response);
};