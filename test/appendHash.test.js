var chai = require('chai');
var expect = chai.expect;

var appendHash = require('../lib/appendHash');

describe('appendHash', function() {

  it('appends hash when there is no existing hash', function() {
    var list = ['helloWorld.js'];

    var output = appendHash('abcd1234', true)(list);

    expect(output[0]).to.be.equal('helloWorld.js?abcd1234');
  });

  it('does not append hash when disabled', function() {
    var list = ['helloWorld.js'];

    var output = appendHash('nil', false)(list);

    expect(output[0]).to.be.equal('helloWorld.js');
  });

  it('does not append hash when there is existing hash', function() {
    var list = ['helloWorld.js?abcd1234'];

    var output = appendHash('abc', true)(list);

    expect(output[0]).to.be.equal('helloWorld.js?abcd1234');
  });

});
