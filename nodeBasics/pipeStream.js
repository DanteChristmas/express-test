var fs = require("fs");

var readerStream = fs.createReadStream('some-text.txt');

var writerStream = fs.createWriteStream('output2.txt');

readerStream.pipe(writerStream);

console.log("program ended");
