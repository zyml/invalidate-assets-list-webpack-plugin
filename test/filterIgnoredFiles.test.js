var chai = require('chai');
var expect = chai.expect;

var filterIgnoredFiles = require('../lib/filterIgnoredFiles');

describe('filterIgnoredFiles', function() {

  it('filters a single pattern', function() {
    var list = [
      'helloWorld.js',
      'index.html'
    ];

    var pattern = '*.js';

    var output = filterIgnoredFiles(pattern, {})(list);

    expect(output).to.not.include('helloWorld.js');
  });

  it('filters multiple patterns', function() {
    var list = [
      'helloWorld.js',
      'helloWorld.js.map',
      'index.html',
    ];

    var patterns = ['*.map', '*.html'];

    var output = filterIgnoredFiles(patterns, {})(list);

    expect(output).to.not.include('helloWorld.js.map');
    expect(output).to.not.include('index.html');
  });

});
