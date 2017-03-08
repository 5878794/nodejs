var os = require('os');



module.exports = function(){
	var IPv4,hostName;
	hostName=os.hostname();
	for(var i=0;i<os.networkInterfaces().en0.length;i++){
		if(os.networkInterfaces().en0[i].family=='IPv4'){
			IPv4=os.networkInterfaces().en0[i].address;
		}
	}

	return {
		hostName:hostName,
		ip:IPv4
	}
};