const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests  : './tests/*_test.js',
  output : './output',
  helpers: {
    Playwright: {
      url    : 'http://localhost:3000',
      show   : false,
      browser: 'chromium',
    },
    ResembleHelper: {
      "require"         : "codeceptjs-resemblehelper",
      "screenshotFolder": "./tests/output/",
      "baseFolder"      : "./tests/screenshots/base/",
      "diffFolder"      : "./tests/screenshots/diff/",
    },
  },
  include: {
    I: './tests/steps_file.js',
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