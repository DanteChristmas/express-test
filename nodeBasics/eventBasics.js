var events = require("events");

var eventEmitter = new events.EventEmitter();
var connectionHandler = function connected() {
  console.log('connection successful.');

  eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectionHandler);

eventEmitter.on('data_received', function() {
  console.log('data received successfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended");
