module.exports = {
  '@tags' : ['google'],

  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnK]', 1000)
      .click('button[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};