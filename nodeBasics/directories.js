var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test', function (err) {
  if(err) {
    console.error(err);
  }
  console.log('directory created successfully');
});

console.log("going to read tmp directory");
fs.readdir("/tmp/", function (err, files) {
  if(err) {
    console.error(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});


console.log("going to delete directory /tmp/test");
fs.rmdir("/tmp/test", function (err) {
  if(err) {
    console.error(err);
  }
  console.log('going to read directory /tmp');
  fs.readdir("/tmp", function(err, files) {
    if(err) {
      console.error(err);
    }
    files.forEach(function(file) {
      console.log(file);
    });
  });
});
