var fs = require("fs");
var buf = new Buffer(1024);

//Full File Read
console.log("Getting file...");
fs.open('some-text.txt', 'r+', function(err, fd) {
  if(err) {
    return console.error(err);
  }
  console.log("File opened successfully");
  console.log("Going to read the file");
  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if(err) {
      console.log(err);
    }
    console.log(bytes + " bytes read");

    if(bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }

    fs.close(fd, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("File closed.")
    });
  });
});

//Truncated File Read
fs.open('some-text.txt', 'r+', function(err, fd) {
  if(err) {
    return console.error(err);
  }
  console.log("File opened successfully");
  console.log("Going to truncate the file after 10 bytes");

  fs.ftruncate(fd, 10, function (err) {
    if(err) {
      console.log(error);
    }
    console.log("File truncated succcessfully.");
    console.log("Reading truncated File");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if(err) {
        console.log(err);
      }

      if(bytes > 0) {
        console.log(buf.slice(0, bytes).toString());
      }

      fs.close(fd, function(err) {
        if(err) {
          console.log(err);
        }
        console.log("File closed successfully.");
      });
    });
  });
});
