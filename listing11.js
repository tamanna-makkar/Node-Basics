var fs = require('fs');
/* Sync Method */
var files = fs.readFileSync('global.js','utf8');
console.log(files);
fs.writeFileSync('writeMe.txt',files);
/* Asyn Method
fs.readFile('global.js','utf8', function(err,data){
	if(err) {
	 throw err;
	}
	else{
		console.log(`data is here ${data}`);
	}
}); */
