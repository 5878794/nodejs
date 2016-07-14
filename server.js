var cp = require('child_process'),
	worker;


function spawn(server) {

	//进行守护，开启IPC通道，双向通信
	worker = cp.spawn('node', [ server ], {

		stdio: [ 0, 1, 2, 'ipc' ]

	});

	//监视子进程，当其崩溃时处理
	worker.on('exit', function (code) {

		if (code !== 0) {

			console.log('---------------worker is shut down, restarting...---------');
			spawn(server);//重启服务

		};

	});

	//收到子进程消息
	worker.on('message', function (msg) {

		console.log(msg);

	});
};

function main() {

	spawn('/Users/beens/code/github/nodejs/server/app.js'); //要守护的进程文件

	process.on('SIGTERM', function () {

		worker.kill();
		process.exit(0);

	});
};

main();