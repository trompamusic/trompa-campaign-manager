
const assert         = require('assert');
const {  ariaLabel } = require('./locators');
const {  tolerance } = require('./settings');

const getCampaignDigitalDocument = campaign => campaign ? campaign?.object.find(object => object.name === 'work')?.nodeValue : null;

Feature('home');

Scenario('Going to landing page viewing the first section', async ({ I, env }) => {
  I.amOnPage('/');
  I.saveScreenshot("landing_page.png");
  I.seeVisualDiff("landing_page.png", { tolerance, prepareBaseImage: false });

  const identifier                  = env.REACT_APP_PUBLIC_CAMPAIGN_IDENTIFIER;
  const response                    = await I.sendQuery(GET_CAMPAIGN, { identifier });
  const { ControlAction: campaign } =  response.data.data;
  const digitalDocument             = getCampaignDigitalDocument(...campaign);

  I.say('I am looking at the current campaign');

  I.say('On the left side I can see the call to action with a subtitle');
  I.see('Make even Mozart more memorable');
  I.see(`Help us digitize the ${digitalDocument.title}`);
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
  I.saveScreenshot("landing_page_steps.png");
  I.seeVisualDiff("landing_page_steps.png", { tolerance, prepareBaseImage: false });
  I.say('I can read the steps needed to run the campaign');
  I.say('Step 1');
  I.see('Pick a score and invite your collaborators', 'h2');
  I.say('Step 2');
  I.see('Our algorithms will distribute tasks to everyone', 'h2');
  I.say('Step 3');
  I.see('Every collaborator can contribute to a better score', 'h2');
});

Scenario('View the active campaigns', async ({ I }) => {
  I.scrollTo(ariaLabel("campaigns"));
  I.saveScreenshot("landing_page_active_campaigns.png");
  I.seeVisualDiff("landing_page_active_campaigns.png", { tolerance, prepareBaseImage: false });

  const response                     = await I.sendQuery(GET_CAMPAIGNS);
  const { ControlAction: campaigns } =  response.data.data;
  const numberOfSlides               = campaigns.length < 20 ? campaigns.length : 20;
  
  I.see('Active campaigns', 'h2');

  within('.slider', async () => {
    let currentSlide             = 1;
    const numerOfVisibleElements = await I.grabNumberOfVisibleElements('.slide-visible');

    assert.equal(4, numerOfVisibleElements);

    if (numerOfVisibleElements <= campaigns.length) {
      return;
    }

    I.see(`Slide ${currentSlide} of ${numberOfSlides}`);

    I.click('.slider-control-centerright');
    currentSlide += numerOfVisibleElements;
    I.see(`Slide ${currentSlide} of ${numberOfSlides}`);

    I.click('.slider-control-centerleft');
    currentSlide -= numerOfVisibleElements;
    I.see(`Slide ${currentSlide} of ${numberOfSlides}`);

    I.click(locate('.paging-item > button').at(3).as('dot'));
    currentSlide += numerOfVisibleElements;
    I.see(`Slide ${currentSlide} of ${numberOfSlides}`);

    I.dragSlider('.slider-frame', -30);
    currentSlide += numerOfVisibleElements;
    I.see(`Slide ${currentSlide} of ${numberOfSlides}`);
  });
});

Scenario('View the Supported by', async ({ I }) => {
  I.scrollTo(locate('section').withChild('h2').withText('Supported by'));
  I.saveScreenshot("landing_page_supported_by.png");
  I.seeVisualDiff("landing_page_supported_by.png", { tolerance, prepareBaseImage: false });
  
  I.see('Supported by', 'h2');

  // within('.makeStyles-container-745', async () => {
  //   I.seeElement('.makeStyles-testimonialItem-746');
  // });
});

const GET_CAMPAIGNS =`
query {
	ControlAction(filter:{wasDerivedFrom:{identifier: "b559c52d-6104-4cb3-ab82-39b82bb2de6c"}}, orderBy: endTime_asc, first: 20) {
		identifier
    name
    endTime {
      formatted
    }
    object
    {
			... on PropertyValue {
        name
        value
				nodeValue {
					... on DigitalDocument {
						identifier
						title
            image
					}
				}
			}
		}
	}
}`;

const GET_CAMPAIGN =`
    query Campaign($identifier: ID!) {
        ControlAction (identifier: $identifier) {
            identifier
            name
            description
            object {
                ... on PropertyValue {
                    name
                    value
                    nodeValue {
                        ... on DigitalDocument {
                            identifier
                            title
                            source
                        }
                    }
                }
            }
        }
    }
`;