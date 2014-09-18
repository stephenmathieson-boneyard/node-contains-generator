
/**
 * Module dependencies.
 */

var regenerator = require('regenerator');
var fs = require('fs');
var containsGenerator = require('./');

var js = fs.readFileSync('./es6.js', 'utf8');
if (containsGenerator(js)) {
  js = regenerator.compile(js, { includeRuntime: true }).code;
}

console.log(js);
