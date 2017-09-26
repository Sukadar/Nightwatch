module.exports = {
  'signin via email for temp-3' : function (browser) {
    browser
      .url(browser.globals.urls.memberurl)
      .windowMaximize("current")
      .waitForElementVisible('body', 4000)
      .useXpath()
      .click("(//a[contains(text(),'Login')])[2]")
      .pause(5000)
      .click("(//div[@class='button-label'])[16] [text()='Email']")
      .pause(4000)
      .click("(//input[@id='login_email'])[6]")
      .pause(4000)
      .setValue("(//input[@id='login_email'])[6]", browser.globals.email)
      .pause(4000)
      .click("(//input[@id='login_password'])[6]")
      .pause(4000)
      .setValue("(//input[@id='login_password'])[6]", browser.globals.password)
      .pause(4000)
      .click("(//button[@type='submit'])[6]")
      .pause(8000)
browser.end();
  }
}
