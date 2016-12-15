var fs = require("fs");
var data = 'Write demo by Manish';

// Create a readable stream
var writerStream = fs.createWriteStream('output.txt');

// write the data with utf8 format. 
writerStream.write(data, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> data, end, and error
writerStream.on('finish', function(chunk){
		console.log("Write activity completed");
});

writerStream.on('error', function(err){
		console.log(err.stack);
});

console.log("Program Ended");