var EventEmitter = require('events').EventEmitter;
var util = require('util');
var person = function(name){
  this.name = name;
}; 
/* Person Inherits the properties of Emitter  */
util.inherits(person,EventEmitter); 
module.exports = person;