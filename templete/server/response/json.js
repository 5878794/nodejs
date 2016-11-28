/**
 * Created by beens on 16/11/28.
 */



var responseJsonFormat = require("./apiJsonFormat");

module.exports = function(type,msg,response){
    var json = (type == "success") ?
            responseJsonFormat.success(msg) :
            responseJsonFormat.error(msg);


    response.writeHead(200, {'Content-type':'application/json; charset=UTF-8'});
    response.write(JSON.stringify(json));
    response.end();
};