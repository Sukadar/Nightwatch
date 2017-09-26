module.exports = {
  'signin via email for temp-2' : function (browser) {
    browser
      .url(browser.globals.urls.memberurl)
      .windowMaximize("current")
      .waitForElementVisible('body', 1000)
      .saveScreenshot('./screenshots/signin.png')
      .useXpath()
      .click("//div[@id='template-2']/div/div/div/div[2]/a[1]")
      .pause(4000)
      .click("//div[6]/div/div/div[2]/div/div[2]/a/div")
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
      .pause(2000)
      .end();
  }
}
