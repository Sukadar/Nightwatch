module.exports = {
  'change settings on Admin-settings page' : function (browser) {
    browser
    .url(browser.globals.urls.adminurl)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
      .click("//input[@type='email']")
      .pause(2000)
      .setValue("//input[@type='email']",browser.globals.adminemail)
      .pause(2000)
      .click("//input[@type='password']")
      .pause(1000)
      .setValue("//input[@type='password']",browser.globals.adminpassword)
      .pause(1000)
      .click("//input[@type='submit']")
      .pause(1000)
      .click("(//a[@class='test-nav-config'])[2]")
      .pause(2000)
      .click("//button[@class='btn btn-default pull-right']")
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[1]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[1]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[1]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[18]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[18]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[18]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[2]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[2]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[2]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[19]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[19]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[19]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[3]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[3]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[3]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[20]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[20]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[20]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[4]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[4]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[4]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[21]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[21]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[21]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[5]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[5]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[5]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[22]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[22]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[22]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[6]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[6]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[6]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[23]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[23]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[23]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[7]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[7]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[7]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[24]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[24]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[24]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[8]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[8]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[8]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[25]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[25]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[25]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[9]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[9]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[9]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[26]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[26]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[26]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[10]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[10]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[10]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[27]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[27]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[27]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[11]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[11]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[11]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[28]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[28]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[28]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[12]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[12]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[12]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[29]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[29]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[29]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[13]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[13]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[13]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[30]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[30]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[30]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[14]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[14]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[14]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[31]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[31]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[31]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[15]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[15]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[15]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[32]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[32]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[32]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[16]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[16]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[16]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[33]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[33]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[33]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[17]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[17]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[17]",'100')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[34]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[34]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[34]",'50')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[41]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[41]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[41]",'500')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[42]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[42]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[42]",'15')
      .pause(2000)
      .click("(//input[@ng-model='value.value'])[43]")
      .pause(2000)
      .clearValue("(//input[@ng-model='value.value'])[43]")
      .pause(2000)
      .setValue("(//input[@ng-model='value.value'])[43]",'I am older than 15 years')
      .pause(2000)
      .click("(//button[@class='btn btn-draggable-add'])[1]")
      .pause(2000)
      .click("//input[@ng-model='config.member_flag_new_item.title']")
      .pause(2000)
      .setValue("//input[@ng-model='config.member_flag_new_item.title']",'Good sharer')
      .pause(2000)
      .click("(//button[@class='btn btn-draggable-add'])[2]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[7]")
      .pause(2000)
      .click("(//input[@class='form-control ng-pristine ng-valid'])[5]")
      .pause(2000)
      .setValue("(//input[@class='form-control ng-pristine ng-valid'])[5]",'World Connect')
      .pause(2000)
      .click("(//input[@type='checkbox'])[8]")
      .pause(2000)
      .click("(//input[@type='checkbox'])[9]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.google_analytics.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.google_analytics.value']",'UA-106808282-1')
      .pause(2000)
      .click("(//input[@type='checkbox'])[10]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.google_tag_manager.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.google_tag_manager.value']",'GTM-PJZH4GJ')
      .pause(2000)
      .click("(//input[@type='checkbox'])[11]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.welcome_email.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.welcome_email.value']",'welcome')
      .pause(2000)
      .click("(//input[@type='checkbox'])[13]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.mission_acceptance_email.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.mission_acceptance_email.value']",'mission-acceptance')
      .pause(2000)
      .click("(//input[@type='checkbox'])[14]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.mission_completion_email.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.mission_completion_email.value']",'mission-complete-dev')
      .pause(2000)
      .click("(//input[@type='checkbox'])[15]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.post_accepted_email.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.post_accepted_email.value']",'activity-accepted')
      .pause(2000)
      .click("(//input[@type='checkbox'])[16]")
      .pause(2000)
      .click("//input[@ng-model='config.feature.values.post_declined_email.value']")
      .pause(2000)
      .setValue("//input[@ng-model='config.feature.values.post_declined_email.value']",'activity-declined')
      .pause(2000)
      .click("(//input[@type='checkbox'])[17]")
      .pause(2000)
      .click("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]")
      .pause(2000)
      .setValue("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]",'http://blog.smiley360.com')
      .pause(2000)
      .click("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]")
      .pause(2000)
      .setValue("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]",'Be Heard Be Happy')
      .pause(2000)
      .click("(//input[@type='checkbox'])[18]")
      .pause(2000)
      .click("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]")
      .pause(2000)
      .setValue("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]",'http://help.smiley360.com')
      .pause(2000)
      .click("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]")
      .pause(2000)
      .setValue("(//input[@class='form-control ng-scope ng-pristine ng-valid'])[1]",'Help Center')
      .pause(2000)
      .execute('scrollTo(0,400)')
      .pause(2000)
      .click("(//input[@class='switch-input ng-pristine ng-valid'])[5]")
      .pause(2000)
      .click("//textarea[@ng-model='config.cookie_notification.values.cookie_modal_text.value']")
      .pause(2000)
      .clearValue("//textarea[@ng-model='config.cookie_notification.values.cookie_modal_text.value']")
      .pause(2000)
      .setValue("//textarea[@ng-model='config.cookie_notification.values.cookie_modal_text.value']",'This website uses cookies in accordance with our Privacy policy.')
      .pause(2000)
      .click("(//input[@class='switch-input ng-pristine ng-valid'])[5]")
      .pause(2000)
      .click("//textarea[@ng-model='config.other_notification.values.other_modal_text.value']")
      .pause(2000)
      .clearValue("//textarea[@ng-model='config.other_notification.values.other_modal_text.value']")
      .pause(2000)
      .setValue("//textarea[@ng-model='config.other_notification.values.other_modal_text.value']",'This is US only community')
      .pause(2000)
      .execute('scrollTo(0,-2050)')
      .pause(2000)
      .assert.visible("//a[@class='btn btn-default']")
      .pause(2000)
      .click("//a[@class='btn btn-default']")
      .pause(2000)
      .saveScreenshot('./screenshots/register-result.png')
      .pause(2000)
      .end();
    }
    }
