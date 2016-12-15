// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
   
   eventEmitter.emit('processing');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

eventEmitter.on('processing', function(){
   console.log('welcome to NodeJs programming world');
});



// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");