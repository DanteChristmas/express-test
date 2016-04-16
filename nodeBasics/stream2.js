var fs = require("fs");

console.log('gathering file info');

fs.stat('some-text.txt', function (err, stats) {
  if(err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("file info retrieval successful");

  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());
});
