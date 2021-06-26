// const { setHeadlessWhen } = require('@codeceptjs/configure');
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*test.js',
  output: './output',
  timeout: 10000,
  name: 'codecept-bdd-dh-oranum-tests',
  hooks: [],
  bootstrap: null,

  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'firefox' // chromium does not support pages with video streaming
    },
    SetupBlocks: {
      require: './tests/helpers/setupblocks_helper.js'
    },
    TestHelper: {
      require: './tests/helpers/test_helper.js'
    },
  },

  include: {
    I: './steps_file.js',
    homePage: './tests/pages/home_page.js',
    resultsPage: './tests/pages/results_page.js',
    profilePage: './tests/pages/profile_page.js'
  },

  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/step_definitions/*_steps.js'
  },

  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output'
    }
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: "./output"
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true,
      output: "./output",
      deleteSuccessful: false
    }
  },

  multiple: {
    chrome: {
      "browsers": ["chrome"]
    },
    firefox: {
      "browsers": ["firefox"]
    },
    safari: {
      "browsers": ["safari"]
    },
    electron: {
      "browsers": ["electron"]
    },
    parallel: {
      //// Splits tests into chunks
      //// i.e: 2 chunks x 6 browsers = 12 threads
      "chunks": 1,
      //// Run all tests in each browser:
      "browsers": ["chrome", "firefox", "safari", "electron"]
    }
  },
}