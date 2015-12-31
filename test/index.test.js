/*jshint expr: true*/

var chai = require('chai');
var del = require('del');
var expect = chai.expect;
var path = require('path');
var webpack = require('webpack');

var InvalidateAssetsListPlugin = require('../index.js');

var OUTPUT_DIR = path.join(__dirname, '../tmp');

describe('InvalidateAssetsListPlugin', function() {

  beforeEach(function(done) {
    del(OUTPUT_DIR).then(function() {
      done();
    });
  });

  it('works', function(done) {

    var webpackConfig = {
      entry: path.join(__dirname, 'fixtures/test.js'),
      output: {
        path: OUTPUT_DIR,
        filename: 'app.js'
      },
      plugins: [
        new InvalidateAssetsListPlugin({
          path: OUTPUT_DIR
        })
      ]
    };

    webpack(webpackConfig, function(err, stats) {
      expect(err).to.be.null;
      expect(stats.hasErrors()).to.be.false;

      done();
    });

  });

});
