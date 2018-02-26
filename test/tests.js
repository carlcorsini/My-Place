
const expect = chai.expect


describe('getRandomInt', function() {
  it('should be a function', function() {
    expect(getRandomInt).to.be.a('function')
  });

  it('should create a random number ', function() {
    expect(getRandomInt(4)).to.equal(0, 1, 2, 3)
  })

});

describe('#textBoxFocus', function() {
  it('should be a function', function() {
    expect(textBoxFocus).to.be.a('function')
  });

  it('should add an event listener on argument', function() {
    expect(textBoxFocus()).to.equal('#e5fff3');
  })
})
