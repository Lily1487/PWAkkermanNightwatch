module.exports = {
  '@tags' : ['basket'],

  'Given the user is logged in' : function (browser) {
    browser
      .maximizeWindow()
      .url(browser.launchUrl)
      .waitForElementVisible('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a', 1000)
      .click('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a')
      .waitForElementVisible('input[id=tbUserName]', 1000)
      .setValue('input[id=tbUserName]', 'rivera_1487@hotmail.com')
      .setValue('input[id=tbPassword]', 'lmriverad_1487')
      .click('input[id=btnLogin]')
      .pause(2000)
  },

  'the user searches for the Ludwig II pen... again' : function (browser) {
  	browser
      .waitForElementVisible('input[id=tbSearch]', 1000)
  	  .setValue('input[id=tbSearch]', 'Ludwig II')
      .click('button[id=btnSearch]')
      .pause(3000)
  },

  'and selects the desired product to see all the info' : function (browser) {
    browser
      .click('#wrapper > div.main-container > div > div > div > div.col-main.col-xs-12.col-sm-9 > div.panel.panel-default > div.panel-body > div > ul.products-grid.row > li > div > div.product-img-container > a')
      .saveScreenshot('screenshots/productDescription.png')
  },

  'on the product\'s info page, the user sees different sections' : function (browser) {
  	browser
  	  .assert.elementPresent('div[class=product-shop]')
  	  .assert.elementPresent('div[class=product-img-box]')
  	  .assert.elementPresent('div[class=product-table-content]')
  	  // .useXpath()
  	  // .assert.elementPresent("//div[contains(class(), table-responsive)]")
  	  // .useCss()  	 
  },

  'the user selects two Ludwig II pens because he\'s fucking rich' : function (browser) {
  	browser
  	  .click('#divProductInfo > div:nth-child(2) > div.col-xs-12.col-sm-5 > div > div.product-options > div.row.add-to-cart > form > div.col-xs-4 > div > span:nth-child(3) > button')
  	  .expect.element('input[id=quantity]').to.have.value.that.equals('2')
  },

  'and adds them to his shopping basket' : function (browser) {
  	browser
  	  .click('#divProductInfo > div:nth-child(2) > div.col-xs-12.col-sm-5 > div > div.product-options > div.row.add-to-cart > form > div.col-xs-7.col-xs-offset-1 > a')
  	  .click('#header > div > div > div:nth-child(4) > div > div.text-center > a')
  	  .expect.element('#frmShoppingCart > div.row > div.col-xs-12.col-sm-4.col-sm-offset-1.col-md-3.col-md-offset-2 > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > b').text.to.equal('€5,090.01')
  	  .saveScreenshot('screenshots/shoppingcart.png')
  	  .end();
  }

};