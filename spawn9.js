var waitSecond = 3000;

var sayings = [
	"hey this is me",
	"Stay hungry stay foolish",
	"stay Calm",
	"Keep coding"
];
var interval = setInterval(function(){
	 //process.stdout.write(`\n ${sayings}`);
	for(i=0;i<sayings.length;i++){
		console.log(sayings[i]);
	}
},waitSecond);
process.stdin.on("data",function(data){
	  var Info = data.toString();
       if(Info.toLowerCase().trim() === 'exit'){
		 console.log('Data Enters');
			clearInterval();
			process.exit();
		}	
});
			