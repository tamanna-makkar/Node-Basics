var exec = require('child_process').exec;
exec("ls", function(err,stdout){
		if (err){
			throw err;
		}
		else {
			console.log(`Executing Files inside the Folder: \n${stdout}`);
		}
});
exec("git version", function(err,stdout){
	if(err){
		throw err;
	}
	else{
		console.log(stdout);
	}	
}); 