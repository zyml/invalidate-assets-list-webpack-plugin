var difference = require('lodash/array/difference');
var multimatch = require('multimatch');

/**
 * Remove ignored files.
 * @param  {String|Array} patterns
 * @return {Function}
 */
module.exports = function filterIgnoredFiles(patterns, options) {
  return function(list) {
    if (!Array.isArray(patterns)) {
      patterns = [patterns];
    }

    var blacklist = multimatch(list, patterns, options);

    return difference(list, blacklist);
  };
};
