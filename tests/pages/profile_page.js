const { I } = inject();


class ProfilePage {

  locs = {
    lblProfileName: 'span[data-testid="influencer-name-text"]'
  }

  locslive = {
    lblProfileName: 'span[data-testid="influencer-name-text"]',
    cardTouchableSection: 'div div[data-testid="touchable"]',
    btnGetFreeCoins: 'div[data-testid="touchable"] span[data-testid="live-status-box-applet"] ~ span',
    btnAddToFavorites: 'div[data-testid="toggle"] button[data-testid="favorites-add-icon-applet"]',
    btnQuickBuy: 'button[data-testid="quick-buy-button-applet"]',
    btnSignUpForFree: 'input[id="signup-submit"]'
  }

  async validateAccessedProfileName(psychicName) {
    await I.see(psychicName, this.locslive.lblProfileName);
  }

  async verifyLiveChatOpen() {
    await I.waitForElement(this.locslive.cardTouchableSection, 10);
    await I.switchTo(this.locslive.cardTouchableSection);
    await I.seeInCurrentUrl("/en/chat/")
  }

  async pressGetCredits() {
    await I.waitForElement(this.locslive.btnGetFreeCoins, 10);
    await I.click(this.locslive.btnGetFreeCoins);
  }

  async pressAddToFavorites() {
    await I.waitForElement(this.locslive.btnAddToFavorites, 10);
    await I.retry({
      retries: 5,
      when: err => err.message === 'Favorite was not loaded'
    }).click(this.locslive.btnAddToFavorites);
  }
  
  async pressOranumSuprise(model) {
    if (await I.dontSee("Leave a Message")){
      const modelId = model.trim();
      const locSurpriseModel = `div[data-testid="reaction-surprise-applet"] button[data-testid*=${modelId}]`;
      await I.click(locSurpriseModel);
    }
  }
  
  async pressQuickBuy() {
    await I.click(this.locslive.btnQuickBuy);
  }

  validateSignUpForFreeDisplayed() {
    I.seeElement(this.locslive.btnQuickBuy);
  }
}
module.exports = new ProfilePage();