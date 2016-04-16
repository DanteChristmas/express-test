var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("some-text.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('some-text2.txt'));

console.log("file decompressed");
