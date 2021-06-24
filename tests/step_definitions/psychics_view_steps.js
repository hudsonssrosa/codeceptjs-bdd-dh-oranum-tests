const { I } = inject();
const homePage = require('../pages/home_page');
const viewAllPage = require('../pages/view_all_page');
const assert = require('assert');


Given('that all the live psychics are viewed', () => {
  homePage.scrollIntoViewAllLivePsychics();
  homePage.pressViewAllLivePsychics();
});

When('I verify all the psychic profile nicknames', () => {
  viewAllPage.grabAllPsychicsNamesDisplayed()
});

Then('each profile is displayed only once', async () => {
  var psychicNames = await viewAllPage.grabAllPsychicsNamesDisplayed();
  var uniqueNames = psychicNames.filter((thatValue, iterIndex) => psychicNames.indexOf(thatValue) === iterIndex)

  noDuplicatesExpected = false;
  hasDuplicates = psychicNames.length != uniqueNames.length;
  assert.strictEqual(hasDuplicates, noDuplicatesExpected);
});

Then('all psychic pictures are displayed', async () => {
  var totalPsychics = await viewAllPage.grabAllPsychicsNamesDisplayed();
  viewAllPage.validatePicturesFromPsychics(totalPsychics.length)
});

// Then('all psychics has its languages spoken displayed', () => {
//   // From "features/req01_psychics_view.feature" {"line":33,"column":3}
//   throw new Error('Not implemented yet');
// });

// Then('all psychics has its rating displayed', () => {
//   // From "features/req01_psychics_view.feature" {"line":39,"column":3}
//   throw new Error('Not implemented yet');
// });

Then('psychics are showed with different status:', (table) => {
  for (let id in table.rows) {
    if (id < 1) {
      continue;
    };
    const cells = table.rows[id].cells;
    const commonStatus = cells[0].value;
    const sporadicStatus = cells[1].value;

    viewAllPage.validateBadgeCommonStatus(commonStatus);
    viewAllPage.validateBadgeSporadicStatus(sporadicStatus);
  }
});



