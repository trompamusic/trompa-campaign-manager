const { setHeadlessWhen } = require('@codeceptjs/configure');
const { devices }         = require('playwright');

require('dotenv').config({ path: __dirname + '/.env' });

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests  : './end-to-end-test/*_test.js',
  output : './end-to-end-test/output/firefox',
  helpers: {
    Playwright: {
      url          : 'http://localhost:3000',
      show         : false,
      browser      : 'firefox',
      emulate      : process.profile === 'mobile' ? devices['Pixel 2'] : null,
      waitForAction: 1000,
    },
    ResembleHelper: {
      "require"         : "codeceptjs-resemblehelper",
      "screenshotFolder": "./end-to-end-test/output/firefox",
      "baseFolder"      : "./end-to-end-test/screenshots/base/firefox",
      "diffFolder"      : "./end-to-end-test/screenshots/diff/firefox",
    },
    GraphQL: {
      endpoint: process.env.REACT_APP_GRAPHQL_URL,
    },
  },
  include: {
    I     : './end-to-end-test/steps_file.js',
    env   : process.env,
    mobile: process.profile === 'mobile',
  },
  bootstrap: null,
  mocha    : {},
  name     : 'trompa-campaign-manager',
  plugins  : {
    pauseOnFail    : {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    customLocator: {
      enabled: true,
    },
  },
};