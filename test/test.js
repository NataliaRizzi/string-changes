require('chai').should();

const StringChanges = require('../index.js');

describe('String Changes', function () {

  it('should return abcgg when the input is abcNdgM', function () {
    StringChanges('abcNdgM').should.eql('abcgg');
  });

  it('should return rtyg when the input is MrtyNNg', function () {
    StringChanges('MrtyNNg').should.eql('rtyg');
  });

  it('should return ok when the input is MMMMMokN', function () {
    StringChanges('MMMMMokN').should.eql('ok');
  });

  it('should return sv when the input is sNNNNv', function () {
    StringChanges('sNNNNv').should.eql('sv');
  });

});