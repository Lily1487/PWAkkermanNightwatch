module.exports = {
  '@tags' : ['account'],

  'User is on the Log in page' : function (browser) {
    browser
      .maximizeWindow()
      .url(browser.launchUrl)
      .saveScreenshot('screenshots/mainPage.png')
  },

  'The user clicks on the Login option' : function (browser) {
  	browser
  	  .waitForElementVisible('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a', 1000)
  	  .click('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a')
  	  .saveScreenshot('screenshots/test.png')
  },

  'and enters valid username and password' : function (browser) {
    browser
      .waitForElementVisible('input[id=tbUserName]', 1000)
      .setValue('input[id=tbUserName]', 'rivera_1487@hotmail.com')
      .waitForElementVisible('input[id=tbPassword]', 1000)
      .setValue('input[id=tbPassword]', 'lmriverad_1487')
      .saveScreenshot('screenshots/usernameandpass.png')
  },

  'clicks on the Login button and logs in to his account' : function (browser) {
  	browser
      .waitForElementVisible('input[id=btnLogin]', 2000)
  	  .click('input[id=btnLogin]')
  },

  'user goes to the sales page' : function (browser) {
  	browser
  	  .useXpath()
  	  .waitForElementVisible("//*[contains(text(), 'Actions')]", 1000)
  	  .click("//*[contains(text(), 'Actions')]")
  	  .useCss()
  },

  'The user clicks on My Account option' : function (browser) {
  	browser
      .refresh()
      .useXpath()
      .waitForElementVisible('//*[@id="wrapper"]/div[5]/div/ul/div/div[2]/li/a', 5000)
  	  .click('//*[@id="wrapper"]/div[5]/div/ul/div/div[2]/li/a')
      .waitForElementVisible('//*[@id="wrapper"]/div[6]/div/div/div/div[2]/div[2]/div[2]/div[6]/a[2]', 5000)
      .useCss()
  },

  'and updates his first name on his account' : function (browser) {
    browser
      .click('a[href="/en/profile/personalinfo/"]')
      .useXpath()
      .waitForElementVisible('//span[contains(text(), "Personal information")]', 1000)
      .useCss()
      .clearValue('input[id=tbFirstName]')
      .setValue('input[id=tbFirstName]', 'Lilia')
      .click('input[id=btnSave]')
      .expect.element('input[id=tbFirstName]').to.have.value.that.equals('Lilia')
  },

  'The user makes the Ludwig II pen his favorite' : function (browser) {
  	browser
  	  .waitForElementVisible('input[id=tbSearch]', 1000)
  	  .setValue('input[id=tbSearch]', 'Ludwig II')
      .click('button[id=btnSearch]')
      .waitForElementVisible('#wrapper > div.main-container > div > div > div > div.col-main.col-xs-12.col-sm-9 > div.panel.panel-default > div.panel-body > div > ul.products-grid.row > li > div > div.product-description-container > div:nth-child(5) > form > div > a', 2000)
      .click('#wrapper > div.main-container > div > div > div > div.col-main.col-xs-12.col-sm-9 > div.panel.panel-default > div.panel-body > div > ul.products-grid.row > li > div > div.product-description-container > div:nth-child(5) > form > div > a')
      .saveScreenshot('screenshots/favourites.png')
  },

  'and the user Logs Out of his account' : function (browser) {
  	browser
  	  .waitForElementVisible('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a', 1000)
  	  .click('#wrapper > div.main-menu.hidden-xs > div > ul > div > div.col-xs-2.col-xs-offset-2 > li > a')
  	  .click('#wrapper > div.main-container > div > div > div > div.col-main.col-xs-12.col-sm-9 > div.panel.panel-default > div.panel-body.center-block.profile-row > div:nth-child(6) > a.col-xs-9.col-sm-7')
  	  .end();
  }
};