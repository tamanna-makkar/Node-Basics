var fs = require('fs');
var md = `   

Sample File System =======================   

`;
var trimmedData = md.trim();
fs.writeFile("sample.md", trimmedData ,function(err,data){
    if(err){
		console.log("Error here:" + err);
	}
	else { 
		console.log("Success Date:" + trimmedData);
	}
});