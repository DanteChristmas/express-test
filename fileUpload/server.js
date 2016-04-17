var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).single('file'));

app.get('/index.htm', function(req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post('/file_upload', function(req, res) {
  console.log(req.file.originalname);
  console.log(req.file.path);
  console.log(req.file.type);

  var file = __dirname + "/" + req.file.originaname;
  fs.readFile(req.file.path, function(err, data) {
    if(err) {
      console.error(err);
    } else {
      fs.writeFile(file, data, function(err) {
        if(err) {
          console.error(err);
        } else {
          var response = {
            message: 'File uploaded successfully',
            filename: req.file.originalname
          };
        }
        console.log(response);
        res.end(JSON.stringify(response));
      });
    }
  });
});

var server = app.listen(8081, function() {
  console.log("Server listening on port 8081");
});
