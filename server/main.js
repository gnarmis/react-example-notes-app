// This is an Express.js based server that is meant to server everything in the
// public/ directory

var express = require('express');
var app = express();

// Other static files to render out
const PUBLIC_DIR_PATH = require('path').resolve('public');
app.use(express.static(PUBLIC_DIR_PATH));

// All roads lead to the same thing. This allows us to represent routes entirely
// client side
app.get('/*',function(req,res){
  res.sendFile(PUBLIC_DIR_PATH + '/index.html');
});

const SERVER_PORT = 8383;
app.listen(SERVER_PORT);
console.log("Listening on 127.0.0.1:" + SERVER_PORT + "...");