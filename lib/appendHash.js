var map = require('lodash/map');

/**
 * Appends hash as a query string if the current path does not have it.
 * @param  {String} hash
 * @param  {Boolean} enabled
 * @return {Function}
 */
module.exports = function appendHash(hash, enabled) {
  return function(list) {
    if (!enabled) {
      return list;
    }

    return map(list, function(filename) {
      if (filename.indexOf(hash) === -1) {
        return filename + '?' + hash;
      }

      return filename;
    });
  };
};
