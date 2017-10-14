var fs = require('fs');
fs.readdir('./lib',function(err,data){
	if(err){
		console.log(err);
	}
	else{
	  console.log(data);
	}
});
