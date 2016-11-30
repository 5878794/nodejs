/**
 * Created by beens on 16/11/29.
 */



var formidable = require('formidable'),
    util = require('util');

//http.createServer(function(req, res) {
//    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload


module.exports = function(req,res){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = "/Users/beens/code/github/nodejs/templete/server/fileUpload";
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
    form.multiples = true;

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });
};



    //}


//}).listen(8003);
