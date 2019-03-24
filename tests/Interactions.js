
module.exports = {
  '@tags' : ['interactions'],

  'User navigates to the main page' : function (browser) {
    browser
      .maximizeWindow()
      .url(browser.launchUrl)
  },

  'then searches for Ludwig II fountain pen' : function (browser) {
  	browser
  	  .waitForElementVisible('input[id=tbSearch]', 2000)
      .setValue('input[id=tbSearch]', 'Ludwig II')
      .click('button[id=btnSearch]')
      .saveScreenshot('screenshots/productSearch.png')
  },

  'The user searches for sales' : function (browser) {
  	browser
  	  .useXpath()
  	  .click("//*[contains(text(), 'Actions')]")
  	  .useCss()
  	  .saveScreenshot('screenshots/salesPage.png')
  },

  'and sorts the sales by descending price' : function (browser) {
  	browser
  	  .click('a[id=rsPrice]')
  },

  'then sorts the sales by ascending price' : function (browser) {
  	browser
  	  .click('a[id=rsPrice]')
  },

  'The user clicks on the Customer Service links' : function (browser) {
    browser
      .useXpath()
      .click("//*[contains(text(), 'Shipping method')]")
      .waitForElementVisible('//span[contains(text(), "Way of delivering")]', 1000)
      .back()
      .click("//*[contains(text(), 'Return')]")
      .waitForElementVisible('//span[contains(text(), "Returns")]', 1000)
      .back()
      .click("//*[contains(text(), 'Disclaimer')]")
      .waitForElementVisible('//span[contains(text(), "General terms and conditions")]', 1000)
      .back()
      .click("//*[contains(text(), 'Opening hours')]")
      .waitForElementVisible('//span[contains(text(), "Opening hours")]', 1000)
      .back()
      .click("//*[contains(text(), 'Privacy policy')]")
      .waitForElementVisible('//span[contains(text(), "Page not found")]', 1000)
      .back()
      .useCss()
  },

  'The user changes the site to Dutch' : function (browser) {
    browser
      .click('#header > div > div > div:nth-child(3) > ul > li:nth-child(1) > a')   
      .end();   
  }

  // 'The user selects the brand Mont Blanc' : function (browser) {
  // 	browser
  // 	  .click('a[href=montblanc]')
  // },
};