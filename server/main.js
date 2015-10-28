// This is an Express.js based server that is meant to server everything in the
// public/ directory

var express = require('express');
var spa = require('express-spa');
var app = express();
var port = process.env.PORT || 8383;

// Other static files to render out
const PUBLIC_DIR_PATH = require('path').resolve('public');
app.use(express.static(PUBLIC_DIR_PATH));

// All roads lead to the same thing. This allows us to represent routes entirely
// client side
app.use(spa(PUBLIC_DIR_PATH + "/index.html"));

app.listen(port);
console.log("Listening on 127.0.0.1:" + port);