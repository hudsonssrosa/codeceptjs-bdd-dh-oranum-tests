const { I } = inject();
const homePage = require('../pages/home_page');
const resultsPage = require('../pages/results_page');
const profile_page = require('../pages/profile_page');
const assert = require('assert');


Given('that all the live psychics are viewed', () => {
  homePage.scrollIntoViewAllLivePsychics();
  homePage.pressViewAllLivePsychics();
});

When('I type "{word}" on search', (name) => {
  homePage.pressHeaderSearchButton();
  resultsPage.typeSearch(name);
});

Then('only names matching "{word}" are displayed', async (partialResult) => {
  var psychicsFound = await resultsPage.grabAllPsychicsResultsFromDropdownFilter();
  for (let i = 0; i < psychicsFound.length; i++) {
    var partialText = new RegExp(`${partialResult}`, 'i');
    assert.match(psychicsFound[i], partialText);
    resultsPage.validateDropdownWithSearchResults(psychicsFound[i]);
  }
});

Then('only one result is displayed for "{word}"', async (profile) => {
  var psychicsFound = await resultsPage.grabAllPsychicsResultsFromDropdownFilter();
  const oneResultExpected = 1;
  assert.strictEqual(psychicsFound.length, oneResultExpected);
  resultsPage.validateDropdownWithSearchResults(profile);
});

Then('the "{word}" found can be accessed', async (profile) => {
  await resultsPage.pressSearchResultDropdown(profile);
  await profile_page.validateAccessedProfileName(profile)
});

Then('the "{word}" is matching the current topic', async (profile) => {
  // to be implemented
});



