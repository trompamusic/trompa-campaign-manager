const {  ariaLabel, compositionModalLocators } = require('./locators');
const {  tolerance }                           = require('./settings');

Feature('Create campaign as Anonymous');
const screenshotSubDir = 'as_anonymous_';
const date             = new Date().getSeconds();

Scenario('Navigate to create campaign', async ({ I }) => {
  I.amOnPage('/');
  I.click('Start your own campaign');

  I.saveScreenshot(screenshotSubDir + "create_campaign_page.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page.png", { tolerance, prepareBaseImage: true });
});

Scenario('Start a camapaign Anonymous',({ I }) => {
  I.click('button[type=submit]');
  I.see('Anonymous');

  I.saveScreenshot(screenshotSubDir + "create_campaign_page_anonymous.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page_anonymous.png", { tolerance, prepareBaseImage: true });
});

Scenario('Select a composition',({ I }) => {
  I.see('Composition & Score');
  I.click(ariaLabel('select_composition'));
  I.see('Search the composition');
  I.waitForElement(compositionModalLocators.headerInitialResults, 3);
  I.click(locate('div.MuiGrid-item').withText('Declaration'));
  I.saveScreenshot(screenshotSubDir + "create_campaign_page_composition.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page_composition.png", { tolerance, prepareBaseImage: true });
});

Scenario('Select a score',({ I }) => {
  I.click(ariaLabel('select_score'));
  I.see('Select score version to improve');
  I.click(locate('[role=listitem]'));
  I.click(ariaLabel('Next'));

  I.saveScreenshot(screenshotSubDir + "create_campaign_page_score.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page_score.png", { tolerance, prepareBaseImage: true });
});

Scenario('Fill in campaign details and submit the campaign', async ({ I }) => {
  I.click('button[type=submit]');
  I.dontSee('Drum up support and invite your fellow musicians.');
  I.fillField('campaignTitle', 'end-to-end-test'+ date);
  I.fillField('campaignDescription', 'end-to-end-test'+ date);
  
  I.fillField('campaignDeadline', 'June 24 00:01');
  I.click('OK');
  I.saveScreenshot(screenshotSubDir + "create_campaign_page_campaign_details.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page_campaign_details.png", { tolerance, prepareBaseImage: true });
});

Scenario('Submit the campaign',({ I }) => {
  I.click('button[type=submit]');
  I.see('Drum up support and invite your fellow musicians.');

  I.saveScreenshot(screenshotSubDir + "create_campaign_page_campaign_share_dialog.png");
  I.seeVisualDiff(screenshotSubDir + "create_campaign_page_campaign_share_dialog.png", { tolerance, prepareBaseImage: true });
  I.click(ariaLabel('Close'));
  I.see('Processing, check back soon');
  
  I.saveScreenshot(screenshotSubDir +"create_campaign_page_campaign_submitted.png");
  I.seeVisualDiff(screenshotSubDir +"create_campaign_page_campaign_submitted.png", { tolerance, prepareBaseImage: true });
  I.clearCookie();
});
