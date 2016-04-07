var fs = require("fs");

var data = fs.readFileSync('some-text.txt');

console.log(data.toString());
console.log("Program Ended");
