var chai = require('chai');
var expect = chai.expect;

var appendPublicPath = require('../lib/appendPublicPath');

describe('appendPublicPath', function() {

  it('appends public path to the list', function() {
    var list = ['helloWorld.js'];

    var output = appendPublicPath('/assets/')(list);

    expect(output[0]).to.be.equal('/assets/helloWorld.js');
  });

  it('appends an empty public path', function() {
    var list = ['helloWorld.js'];

    var output = appendPublicPath('')(list);

    expect(output[0]).to.be.equal('helloWorld.js');
  });

});
