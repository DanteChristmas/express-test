var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("some-text.txt");

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end', function () {
  console.log(data);
});

readerStream.on('error', function (e) {
  console.log(e.stack);
});

var output = "some text i want to save";
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(output, 'utf8')

writerStream.end();

writerStream.on('finish', function () {
  console.log("write finished.");
});

writerStream.on('error', function (e) {
  console.log(e.stack);
});
console.log('program ended');
