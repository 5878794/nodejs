/**
 * Created by beens on 16/8/9.
 */




var http = require('http');
var qs = require('querystring');



var ajax = function(opt){
    var host = opt.host,
        port = opt.port || "80",
        path = opt.path || "",
        method = opt.method || "get",
        headers = opt.headers || {},
        data = opt.data || {},
        success = opt.success || function(){},
        error = opt.error || function(){};

    var content = qs.stringify(data);

    if(method == "get"){
        path += "?" + content;
    }


    var req = http.request(
        {
            host: host,
            port: port,
            path: path,
            method: method,
            headers: headers
        },
        function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log("success-------------------------");
                chunk = JSON.parse(chunk);
                success(chunk);
                console.log("-------------------------");
            });
        }
    );

    req.on('error', function(e) {
        console.log("err-------------------");
        console.log('problem with request: ' + e.message);
        error(e);
        console.log("----------------------");
    });


    // write data to request body
    if(method == "post"){
        req.write(content);
    }


    req.end();
};


ajax({
    host:"192.168.1.254",
    port:"7001",
    path:"/api/appList.do",
    method:"post",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data :{
        device:1,
        version:4
    },
    success:function(rs){
        console.log(rs);
    },
    error:function(e){
        console.log(e);
    }
});

