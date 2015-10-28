// webpack-build requires the config to be exported as something wrapped up in a
// function that returns the config when called

var webpackDevConfig = require('./webpack.dev.config.js');

module.exports = function() {
  return webpackDevConfig;
};