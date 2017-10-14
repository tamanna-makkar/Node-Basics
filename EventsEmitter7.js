/* var EventEmitter = require('events').EventEmitter;
 var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
   console.log(msg);
});
myEmitter.emit('someEvent','the event was emitted'); 
var util = require('util');
var person = function(name){
  this.name = name;
}; */
/* Person Inherits the properties of Emitter 
util.inherits(person,EventEmitter); */
var person = require("./lib/Person");
var ben = new person("Ben Frankins");
ben.on('speak',function(said){
	console.log(`${this.name} : ${said}`);
});
ben.emit('speak','you must do it');

