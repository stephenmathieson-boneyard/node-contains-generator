
var assert = require('assert');
var fmt = require('util').format;
var contains = require('./');

describe('containsGenerator(str)', function () {
  [
    'function* () {}',
    'function* () { yield 7; }',
    'function*() {}',
    'function*() { yield 7; }',
    'function*(){}',
    'function*(){ yield 7; }',
    'function   *\t\t(){}',
    'function\t*\t(\t)\t{\tyield\t7;\t}',
  ].forEach(function (gen) {
    it(fmt('should return true for "%s"', gen), function () {
      assert(true == contains(gen));
    });
  });

  [
    'function () {}',
    'function () { return 7; }',
    'function() {}',
    'function() { return 7; }',
    'function(){}',
    'function(){ return 7; }',
  ].forEach(function (gen) {
    it(fmt('should return false for "%s"', gen), function () {
      assert(false == contains(gen));
    });
  });
});
