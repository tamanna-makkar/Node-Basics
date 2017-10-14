var home = "hey this fst variable";
var justNode = home.slice(3);
console.log(`Rock on the Floor of Node.js ${justNode}`);
console.log(`Directory name is ${__dirname}`);
console.log(`Filename is ${__filename}`);
/* Extention */
var path = require("path");
console.log(`path will be ${path.basename(__filename)}`);
