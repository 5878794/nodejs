/**
 * Created by beens on 16/11/28.
 */


var back = require("../response/json");


module.exports = function(method,getData,postData,response){
    //处理过程

    var data = {
        a:1,
        b:2,
        c:3
    };

    back("success",data,response);


};