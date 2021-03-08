const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests  : './end-to-end-test/*_test.js',
  output : './end-to-end-test/output',
  helpers: {
    Playwright: {
      url    : 'http://localhost:3000',
      show   : false,
      browser: 'chromium',
    },
    ResembleHelper: {
      "require"         : "codeceptjs-resemblehelper",
      "screenshotFolder": "./end-to-end-test/output/",
      "baseFolder"      : "./end-to-end-test/screenshots/base/",
      "diffFolder"      : "./end-to-end-test/screenshots/diff/",
    },
  },
  include: {
    I: './end-to-end-test/steps_file.js',
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