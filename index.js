
/**
 * Export `containsGenerator`.
 */

module.exports = containsGenerator;

/**
 * Check if the given `str` contains a generator function.
 *
 * @param {String} str
 * @return {Boolean}
 * @api private
 */

function containsGenerator(str) {
  return /\bfunction\s*\*/.test(str);
}
