var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;
var project = process.env.PROJECT || 'default'
var projDir = path.join(__dirname,project);

app.use('/',express.static(projDir));

app.listen(port, function(){
  console.log("Server started on port ",port," for project ", project);
});
