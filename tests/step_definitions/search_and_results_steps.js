const { I } = inject();
const homePage = require('../pages/home_page');
const assert = require('assert');


Given('that all the live psychics are viewed', () => {
  homePage.scrollIntoViewAllLivePsychics();
  homePage.pressViewAllLivePsychics();
});

When('I type "{string}" on search', (name) => {
  // to be implemented
});

Then('only matching "{string}" are displayed', async (results) => {
  // to be implemented
});

Then('only the "{string}" searched is displayed', async (profile) => {
  // to be implemented
});

Then('the "{string}" is matching the current topic', async (profile) => {
  // to be implemented
});



