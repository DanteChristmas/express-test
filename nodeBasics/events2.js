var events = require("events");
var eventEmitter = new events.EventEmitter();

var listner1 = function () {
  console.log('listner1 executed');
}

var listner2 = function () {
  console.log('listner2 executed');
}

eventEmitter.addListener('connection', listner1);
eventEmitter.on('connection', listner2);

var eventListeners = require('events')
  .EventEmitter.listenerCount(eventEmitter, 'connection');
var listeners2 = eventEmitter.listeners('connection');
console.log(eventListeners + " current Listners");
console.log(listeners2 + " current listners2");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);
console.log("listner1 killed.");

eventEmitter.emit('connection');

eventlisteners = require('events').EventEmitter
  .listenerCount(eventEmitter, 'connection');
listeners2 = eventEmitter.listeners('connection');

console.log(eventListeners + 'current eventListeners');
console.log(listeners2 + 'current listeners2');

console.log('program ended');
