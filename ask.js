/* 
 process.stdout.write("Hello");
 process.stdout.write(" world \n\n\n"); */
var question = [
  "Wht's your name",
  "wht's your fav hobby",
  "wht's your preffered programming language"		
];
var answers = [];
function answered(j){
   process.stdout.write(`${answers[j]}`);
}
function ask(i){
   process.stdout.write(`\n ${question[i]} >`);
}
 process.stdin.on('data',function (data){
              if(data.toString().trim() === ""){
                 console.log('please fill these fields above');  
              }else{
              answers.push(data.toString().trim());
              }
              if(answers.length < question.length){
                  ask(answers.length); 
              }else{
              process.exit();
              } 
});
     
   process.on('exit',function(){
    process.stdout.write(`You Go on ${answers[0]} ${answers[1]} ${answers[2]} \n\n`);
 }); 

ask(0);