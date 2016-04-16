var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('some-text.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('some-text.txt.gz'));

console.log("program ended");
