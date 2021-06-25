const { I } = inject();
const homePage = require('../pages/home_page');
const profile_page = require('../pages/profile_page');

Given('that a live profile is open', async () => {
  homePage.pressCardOfALivePsychicAvailable();
  profile_page.verifyLiveChatOpen();
});

When('I press to get free credits', async () => {
  await profile_page.pressGetCredits();
});

When('I press add to favorites', async () => {
  await profile_page.pressAddToFavorites();
});

When('I press to get a surprise {word}', async (model) => {
  await profile_page.pressOranumSuprise(model);
});

// When('I press to vote', () => {
//   profile_page.press
// });

// When('I press to turn the camera on', () => {
//   profile_page.press
// });

// When('I press to start a private show', () => {
//   profile_page.press
// });

When('I press to buy credits', async () => {
  await profile_page.pressQuickBuy();
});

Then('a sign up page is showed', () => {
  profile_page.validateSignUpForFreeDisplayed();
});

