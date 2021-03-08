// const assert = require('assert');

Feature('home');

Scenario('Going to landing page viewing the first section', async ({ I }) => {
  I.amOnPage('/');
  I.saveScreenshot("landing_page.png");
  I.seeVisualDiff("landing_page.png", { tolerance: 1, prepareBaseImage: true });

  I.say('I am looking at the current campaign');

  I.say('On the left side I can see the call to action with a subtitle');
  I.see('Make even Mozart more memorable');
  I.see('Help us digitize the 6 Variations in F major, Op.34');
  I.see('Create modern, playable scores from known and unknown classics.');

  I.say('On the right side I can see a image');
  I.seeElement('img');

  I.say('I can read the explanation');

  I.see('Great scores are expensive');
  I.see('Finding playable scores for your orchestra is difficult. Renting great editions comes at a cost, public domain editions are often unplayable. A shame, because most classics belong to us all.');

  I.see('We unlock the classics for all');
  I.see('Turn a free public domain work into a ready to perform, digital score. With advanced machine learning and a bit of help from your community any orchestra can do it.');
});

Scenario('View the second section', async ({ I }) => {
  // I.amOnPage('/');
  I.saveScreenshot("landing_page.png");
  I.seeVisualDiff("landing_page.png", { tolerance: 1, prepareBaseImage: true });
  I.say('I can read the steps needed to run the campaign');
  I.say('Step 1');
  I.see('Pick a score and invite your collaborators', 'h2');
  I.say('Step 2');
  I.see('Our algorithms will distribute tasks to everyone', 'h2');
  I.say('Step 3');
  I.see('Every collaborator can contribute to a better score', 'h2');
});

// Scenario('View the active campaigns', async ({ I }) => {
//   I.scrollTo('.makeStyles-root-308');
//   I.saveScreenshot("landing_page_active_campaigns.png");
//   I.seeVisualDiff("landing_page_active_campaigns.png", { tolerance: 1, prepareBaseImage: true });
  
//   I.see('Active campaigns', 'h2');

//   within('.slider', async () => {
//     let currentSlide             = 1;
//     const numerOfVisibleElements = await I.grabNumberOfVisibleElements('.slide-visible');

//     assert.equal(4, numerOfVisibleElements);

//     I.see(`Slide ${currentSlide} of 20`);

//     I.click('.slider-control-centerright');
//     currentSlide += numerOfVisibleElements;
//     I.see(`Slide ${currentSlide} of 20`);

//     I.click(locate('.paging-item > button').at(3).as('dot'));
//     currentSlide += numerOfVisibleElements;
//     I.see(`Slide ${currentSlide} of 20`);

//     I.dragSlider('.slider-frame', -70);
//     currentSlide += numerOfVisibleElements;
//     I.see(`Slide ${currentSlide} of 20`);
//   });
// });

// Scenario('View the Supported by', async ({ I }) => {
//   I.scrollTo(locate('section').withChild('h2').withText('Supported by'));
//   I.saveScreenshot("landing_page_supported_by.png");
//   I.seeVisualDiff("landing_page_supported_by.png", { tolerance: 1, prepareBaseImage: true });
  
//   I.see('Supported by', 'h2');

//   // within('.makeStyles-container-745', async () => {
//   //   I.seeElement('.makeStyles-testimonialItem-746');
//   // });
// });