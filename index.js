var compose = require('lodash/function/compose');
var fs = require('fs');
var merge = require('lodash/object/merge');
var path = require('path');
var pluck = require('lodash/collection/pluck');

var appendHash = require('./lib/appendHash');
var appendPublicPath = require('./lib/appendPublicPath');
var filterIgnoredFiles = require('./lib/filterIgnoredFiles');

/**
 * Constructor.
 * @param {Object} options
 */
function InvalidateAssetsListPlugin(options) {
  this.options = merge({}, {
    filename: 'invalidate-assets.json',
    hash: false,
    ignore: [],
    matchOptions: {
      dot: true,
      matchBase: true
    },
    path: ''
  }, options);
}

/**
 * Parse asset names from webpack stats.
 * @param  {Object} stats
 * @return {Array}
 */
function parseAssets(stats) {
  return pluck(stats.assets, ['name']);
}

InvalidateAssetsListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('after-emit', function(compilation, callback) {

    var stats = compilation.getStats().toJson({
      hash: true,
      publicPath: true,
      assets: true,
      chunks: false,
      modules: false,
      source: false,
      errorDetails: false,
      timings: false
    });

    var outputPath = path.join(this.options.path, this.options.filename);

    fs.writeFile(
      outputPath,
      this.exportList(stats),
      function(err) {
        if (err) {
          console.error('[InvalidateAssetsListPlugin] Error writing a file: ' + err);
        }

        callback();
      }
    );

  }.bind(this));
};

InvalidateAssetsListPlugin.prototype.exportList = function(stats) {
  var list = parseAssets(stats);

  var publicPath = this.options.publicPath || '/';

  return JSON.stringify(compose(
    appendHash(stats.hash, this.options.hash),
    appendPublicPath(publicPath),
    filterIgnoredFiles(this.options.ignore, this.options.matchOptions)
  )(list));
};

module.exports = InvalidateAssetsListPlugin;
