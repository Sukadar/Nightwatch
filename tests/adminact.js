module.exports = {
  'signin via email for temp-2' : function (browser) {
    browser
    .url(browser.globals.urls.adminurl)
    .windowMaximize("current")
    .waitForElementVisible('body', 1000)
    .useXpath()
      .click("//input[@type='email']")
      .setValue("//input[@type='email']",browser.globals.adminemail)
      .pause(2000)
      .click("//input[@type='password']")
      .pause(1000)
      .setValue("//input[@type='password']",browser.globals.adminpassword)
      .pause(1000)
      .click("//input[@type='submit']")
      .pause(1000)
      .click("//a[@class='test-nav-hubs']")
      .pause(1000)
      .click("//a[@class='btn btn-default btn-icon-add test-hub-new']")
      .pause(1000)
      .click("//input[@class='form-control ng-pristine ng-valid']")
      .pause(1000)
      .setValue("//input[@class='form-control ng-pristine ng-valid']",browser.globals.activityname)
      .pause(2000)
      .click("//button[@class='btn btn-default']")
      .pause(2000)
      .click("//span[@class='icon-multiple_answers']")
      .pause(3000)
      .click("//span[@class='icon-promo']")
      .pause(3000)
      .click("//span[@class='table-icon icon-activity-small']")
      .pause(2000)
      .click("//button[@class='btn-edit']")
      .pause(2000)
      .clearValue("//body[@id='admin']/div/div/div[3]/div/input")
      .pause(2000)
      .setValue("//body[@id='admin']/div/div/div[3]/div/input",'Test Activity')
      .pause(2000)
      .click("(//textarea[@type='text'])[1]")
      .pause(2000)
      .clearValue("(//textarea[@type='text'])[1]")
      .pause(3000)
      .setValue("(//textarea[@type='text'])[1]",'This is activity name')
      .pause(3000)
      .click("(//textarea[@rows='1'])[2]")
      .pause(2000)
      .clearValue("(//textarea[@rows='1'])[2]")
      .pause(2000)
      .setValue("(//textarea[@rows='1'])[2]",'This is Mission Offer text')
      .pause(2000)
      .click("(//div[@role='textbox'])[1]")
      .pause(2000)
      .clearValue("(//div[@role='textbox'])[1]")
      .pause(2000)
      .setValue("(//div[@role='textbox'])[1]",'This is Mission details text')
      .pause(2000)
      .click("(//input[@type='checkbox'])[1]")
      .pause(2000)
      .setValue("//input[@class='js-description-image-field'][@type='file']",require('path').resolve('C:/Users/Sukada/Desktop/image4.jpg'))
      .pause(2000)
      .click("(//div[@role='textbox'])[1]")
      .pause(2000)
      .clearValue("(//div[@role='textbox'])[1]")
      .pause(2000)
      .setValue("(//div[@role='textbox'])[1]",'This mission details text')
      .pause(2000)
      .click("(//input[@type='checkbox'])[3]")
      .pause(2000)
      .click("//input[@class='form-control ng-pristine ng-valid placeholder']")
      .pause(2000)
      .setValue("//input[@class='form-control ng-pristine ng-valid placeholder']",browser.globals.urls.adminyoutubeurl)
      .pause(3000)
      .click("(//input[@type='checkbox'])[2]")
      .pause(2000)
      .clearValue("(//div[@role='textbox'])[2]")
      .pause(2000)
      .setValue("(//div[@role='textbox'])[2]",'This is description of the product')
      .pause(2000)
      .click("//input[@ng-model='activity.goal']")
      .pause(2000)
      .clearValue("//input[@ng-model='activity.goal']")
      .pause(2000)
      .setValue("//input[@ng-model='activity.goal']",'100')
      .pause(2000)
      .click("(//input[@type='checkbox'])[4]")
      .pause(2000)
      .setValue("//input[@class='js-badge-image-field'] [@type='file']",require('path').resolve('C:/Users/Sukada/Desktop/image3.jpg'))
      .pause(2000)
      .click("//textarea[@rows='2']")
      .pause(2000)
      .setValue("//textarea[@rows='2']",'Act Badge')
      .pause(2000)
      .click("(//input[@type='checkbox'])[5]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[7]")
      .pause(2000)
      .click("//input[@ng-model='activity.facebook.seed_url']")
      .pause(2000)
      .waitForElementVisible("//ul[@id='ui-id-1']/li/a",1000)
      .moveToElement("//ul[@id='ui-id-1']/li/a", 1, 1)
      .pause(2000)
      .mouseButtonClick(1)
      .pause(2000)
      .click("(//textarea[@rows='1'])[3]")
      .pause(2000)
      .setValue("(//textarea[@rows='1'])[3]", 'Facebook suggested phrase text-Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas')
      .pause(2000)
      .click("(//input[@type='checkbox'])[8]")
      .pause(2000)
      .click("//input[@ng-model='activity.facebook_page.seed_url']")
      .pause(2000)
      .waitForElementVisible("//ul[@id='ui-id-2']/li/a",1000)
      .moveToElement("//ul[@id='ui-id-2']/li/a",1,1)
      .pause(2000)
      .mouseButtonClick(1)
      .setValue("(//textarea[@rows='1'])[5]", 'Facebook page suggested phrase -Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas')
      .pause(2000)
      .execute('scrollTo(0,400)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[9]")
      .pause(2000)
      .click("//input[@ng-model='activity.twitter.seed_url']")
      .pause(2000)
      .waitForElementVisible("//ul[@id='ui-id-3']/li/a",2000)
      .moveToElement("//ul[@id='ui-id-3']/li/a",1,1)
      .pause(2000)
      .mouseButtonClick(1)
      .pause(2000)
      .click("(//textarea[@rows='1'])[6]")
      .pause(2000)
      .setValue("(//textarea[@rows='1'])[6]",'This is twitter seed phrase- Greece is a country')
      .pause(2000)
      .execute('scrollTo(0,300)')
      .click("(//input[@type='checkbox'])[10]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[11]")
      .pause(2000)
      .click("(//textarea[@type='text'])[7]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[7]",'Upload Photo suggested phrase-Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas')
      .pause(2000)
      .execute('scrollTo(0,500)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[12]")
      .pause(2000)
      .click("(//textarea[@type='text'])[9]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[9]", 'Upload Photo suggested phrase for FB page-Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas')
      .pause(2000)
      .execute('scrollTo(0,600)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[13]")
      .pause(2000)
      .click("(//textarea[@type='text'])[10]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[10]", 'Upload Photo Twitter seed Phrase-Greece is a country')
      .pause(2000)
      .execute('scrollTo(0,700)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[14]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[15]")
      .pause(2000)
      .execute('scrollTo(0,850)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[16]")
      .pause(2000)
      .click("(//input[@type='text'])[9]")
      .pause(2000)
      .waitForElementVisible("//ul[@id='ui-id-4']/li/a",2000)
      .moveToElement("//ul[@id='ui-id-4']/li/a",1,1)
      .pause(2000)
      .mouseButtonClick(1)
      .pause(2000)
      .setValue("//input[@class='js-pinterest-image'][@type='file']",require('path').resolve('C:/Users/Sukada/Desktop/image4.jpg'))
      .pause(2000)
      .click("(//textarea[@type='text'])[13]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[13]",'Pinterest description text')
      .pause(2000)
      .execute('scrollTo(0,900)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[17]")
      .pause(2000)
      .click("(//textarea[@type='text'])[14]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[14]",'Instagram instructions text')
      .pause(2000)
      .execute('scrollTo(0,950)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[19]")
      .pause(2000)
      .click("(//textarea[@type='text'])[16]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[16]",'Retail Review instructions set by the admin')
      .pause(2000)
      .execute('scrollTo(0,1000)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[20]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[21]")
      .pause(2000)
      .click("(//textarea[@type='text'])[23]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[23]",browser.globals.bvstagingclnttoken)
      .pause(2000)
      .click("(//textarea[@type='text'])[24]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[24]",browser.globals.bvstagingenkey)
      .pause(2000)
      .click("(//textarea[@type='text'])[25]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[25]",browser.globals.bvstagingprodid)
      .pause(2000)
      .click("(//textarea[@type='text'])[26]")
      .pause(2000)
      .setValue("(//textarea[@type='text'])[26]",'BV instruction to member as set by admin')
      .pause(2000)
      .execute('scrollTo(0,950)')
      .pause(2000)
      .click("(//input[@type='checkbox'])[22]")
      .pause(2000)
      .click("(//input[@type='text'])[14]")
      .pause(2000)
      .waitForElementVisible("//ul[@id='ui-id-5']/li/a",2000)
      .moveToElement("//ul[@id='ui-id-5']/li/a",1,1)
      .pause(2000)
      .mouseButtonClick(1)
      .pause(2000)
      .execute('scrollTo(0,500)')
      .pause(2000)
      .click("(//button[@type='button'])[8]")
      .pause(2000)
      .click("//a[@class='test-hub-link']")
      .pause(2000)
      .click("//a[@class=' test-hub-nav-logic']")
      .pause(2000)
      .click("//div[@class='mlogic-title ng-binding']")
      .pause(2000)
      .click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
      .pause(2000)
      .click("//input[@ng-model='rule.distribution_limit']")
      .pause(2000)
      .setValue("//input[@ng-model='rule.distribution_limit']",'1')
      .pause(2000)
      .click("//span[@ng-show='rule.members_groups.length == 0']")
      .pause(2000)
      .click("(//label[@class='control-checkbox control-checkbox-primary'])[3]")
      .pause(2000)
      .click("//button[@class='btn btn-primary test-hub-logic-item-group-save']")
      .pause(2000)
      .click("//input[@id='date-start']")
      .pause(2000)
      .click("//td[@class='active day']/preceding-sibling::td[@class='day'][1]")
      .pause(2000)
      .click("//label[@class='switcher ng-scope']")
      .pause(2000)
      .assert.visible("//button[@class='btn btn-default pull-right test-hub-logic-save']")
      .pause(2000)
      .click("//button[@class='btn btn-default pull-right test-hub-logic-save']")
      .pause(2000)
      .saveScreenshot('./screenshots/register-result.png')
      .pause(2000)
      .end();
  }
}