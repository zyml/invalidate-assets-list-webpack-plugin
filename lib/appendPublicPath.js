var map = require('lodash/collection/map');
var path = require('path');

/**
 * Appends the public path to the list.
 * @param  {String} publicPath
 * @return {Function}
 */
module.exports = function appendPublicPath(publicPath) {
  return function(list) {
    return map(list, function(filename) {
      return path.join(publicPath, filename);
    });
  };
};
