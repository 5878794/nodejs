/**
 * Created by beens on 16/11/28.
 */


var wwwDir = "/Users/beens/code/github/nodejs/templete/www/";

module.exports = {
    wwwDir:wwwDir,
    serverPort:"8001",
    url404:wwwDir+"404.html",
    mysql:{
        host:"localhost",
        user: 'bens',
        password: 'xf771026aa',
        database:'chenhong',
        port: 3306
    },
    sqlite:{
        url:"/Users/beens/code/github/nodejs/templete/server/sqlite/database/test.sqlite3"
    },
    fileUpload:{
        saveUrl:wwwDir+"upload/",
        maxSize:2 * 1024 * 1024,
        allowType:[
            "image/png",
            "image/jpg",
            "image/jpeg"
        ]
    }
};