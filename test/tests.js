const expect = chai.expect
      // jsdom = require('jsdom')

// global.document = jsdom.jsdom('<body><div>1</div></body>');
// global.window = document.defaultView;

describe('#getRandomInt', function() {
  it('should be a function', function() {
    expect(getRandomInt).to.be.a('function')
  });
  it('should create a random number ', function() {
    expect(getRandomInt(4)).to.match(/[0-3]/g)
  })

});

describe('#changes', function() {
  it('should be a function', function() {
    expect(textBoxFocus).to.be.a('function')
  });

  it('update local storage', function() {
    expect(changes()).to.equal();
  })
})

describe('#textBoxBlue', function() {
  it('should be a function', function() {
    expect(textBoxBlur).to.be.a('function')
  });

  it('should add an event listener on argument', function() {
    expect(textBoxFocus()).to.equal('white');
  })
})
