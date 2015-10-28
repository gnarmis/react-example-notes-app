// This watches and builds public/bundle.js for us

var build = require('webpack-build');

build({
  config: require('path').resolve('./devbuild.config.js'),
  watch: true
}, function(err, data) {
  if (err != undefined) {
    console.log(err);
  }
  console.log("Now building public/bundle.js and watching...")
});