var colors = require('colors')
  , fs     = require('fs');
  
module.exports = {
  error   : error,
  warning : warning,
  out     : out
}

function error (msg) {
  console.log(('ERROR: ' + msg).red);
}

function warning (msg) {
  console.log(('WARNING: ' + msg).yellow);
}

function out (msg) {
  console.log(msg);
}