var currentTime = 0;
var WaitInterval = 50000;
var percentWaited = 0;
var waitTime = 300;

/*  function writetimingspercentage(p){
	 process.stdout.clearLine();
	 process.stdout.cursorTo(0);
	 process.stdout.write(`Waiting ... ${p}`);
} */
setInterval(function(){
	/*  currentTime +=WaitInterval;
	//console.log(`waiting is ${currentTime}`);
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writetimingspercentage(percentWaited); */
      var d = new Date();
      console.log(d);	
},WaitInterval);

/* var waitTime = 3000;
console.log("wait for this to happen");
setTimeout(function(){
	console.log("this is Done");
    clearInterval(StopInterval);
	writetimingspercentage(100);
},waitTime);

/************* Timer ************/



/***** Percentage *********

writetimingspercentage(percentWaited); */




