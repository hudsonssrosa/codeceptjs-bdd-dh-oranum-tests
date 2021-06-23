const { I } = inject();
const TestHelper = require('../helpers/test_helper');
const homePage = require('../pages/home_page');


Given('that Oranum website is open', () => {
    homePage.openHome(TestHelper.oranumUrl(), 'Oranum.com');
});

Given('that I scroll until the View all live psychics', () => {
    homePage.scrollIntoViewAllLivePsychics();
});

When('I access the View all live psychics', () => {
    homePage.pressViewAllLivePsychics();
});

Then('all the psychics are displayed', () => {
    homePage.validateVisiblePsychics();
});
