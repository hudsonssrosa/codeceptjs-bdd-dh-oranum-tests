const { I } = inject();
const TestHelper = require('../helpers/test_helper');
const homePage = require('../pages/home_page');
const resultsPage = require('../pages/results_page');


Given('that Oranum website is open', () => {
    homePage.openHome(TestHelper.oranumUrl(), 'Oranum.com');
});

Given('that I scroll until the View all live psychics', () => {
    homePage.scrollIntoViewAllLivePsychics();
});

When('I access the View all live psychics', () => {
    homePage.pressViewAllLivePsychics();
});

When('I choose a "{word}"', (topic) => {
    resultsPage.pressSpecificTopicAtOverview(topic);
});

Then('all the psychics are displayed', () => {
    resultsPage.validateVisiblePsychics();
});
