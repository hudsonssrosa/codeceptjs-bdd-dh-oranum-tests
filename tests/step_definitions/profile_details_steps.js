const { I } = inject();
const homePage = require('../pages/home_page');
const profile_page = require('../pages/profile_page');

Given('that a live profile is open', async () => {
  homePage.pressCardOfALivePsychicAvailable();
  profile_page.verifyLiveChatOpen();
});

When('I press to get free coins', async () => {
  await profile_page.pressGetCredits();
});

When('I press add to favorites', async () => {
  await profile_page.pressAddToFavorites();
});

When('I press to get a surprise {word}', async (model) => {
  await profile_page.pressOranumSuprise(model);
});

When('I press to buy credits', async () => {
  await profile_page.pressQuickBuy();
});

When('I press send a message', async () => {
  await profile_page.pressSendMessage();
});

When('I press to start session', async () => {
  await profile_page.pressSendMessage();
});

Then('a sign up modal is showed', async () => {
  await profile_page.validateSignUpForFreeDisplayed();
});

