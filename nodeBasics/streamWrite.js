var fs = require("fs");

console.log("going tto write into existing file");
fs.writeFile('some-text.txt', 'i wrote this text after the fact', function (err) {
  if(err) {
    return console.error(err);
  }
  console.log("data write successful");
  console.log("logging new data");

  fs.readFile("some-text.txt", function (err, data) {
    if(err) {
      return console.error(err);
    }
    console.log("new file: " + data.toString());
  });
});
