var https = require('https');
var fs = require('fs');

var options = {
    pfx:fs.readFileSync('../ca/server.pfx'),
    passphrase:'xufeng'
};

https.createServer(options,function(req,res){
    res.writeHead(200,{
        'Content-Type' : "application/json; charset=UTF-8",
        'Access-Control-Allow-Origin': '*'   //可跨域访问
    });
    res.end('hello world\n');
}).listen(443,'172.16.21.111');