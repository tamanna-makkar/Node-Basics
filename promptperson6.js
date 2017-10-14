var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface(process.stdin,process.stdout);
var realPerson = {
	name: '',
	saying:[]
};
rl.question("what is the name of a real person? ",function(answer){
	realPerson.name = answer;
	fs.writeFileSync("Sample.md",`${realPerson.name}`);
	rl.setPrompt(`what would ${realPerson.name} say? `);
	rl.prompt();
	rl.on('line',function(sayings){
		realPerson.saying.push(sayings.toString());
		//console.log(sayings);
		//realPerson.saying.push(sayings.toString());
		//console.log(realPerson.saying[0]);
		/* for(var i=0;i<realPerson.saying.length;i++){
			console.log(realPerson.saying[i]);
		} */
		if(sayings.toLowerCase().trim() === 'exit'){
			//rl.close();
			console.log(realPerson.saying);
			process.exit();
		}
		else {
			rl.setPrompt(`what else would ${realPerson.name} say? Press 'exit' to leave `);
			rl.prompt(); 
		} 
	});
});