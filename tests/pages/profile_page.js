const { I } = inject();
const timeout = { _5s: 5, _7s: 7, _10s: 10};

class ProfilePage {

  locs = {
    lblProfileName: 'span[data-testid="influencer-name-text"]'
  }

  locslive = {
    lblProfileName: 'span[data-testid="influencer-name-text"]',
    cardTouchableSection: 'div div[data-testid="touchable"]',
    btnGetFreeCoins: 'div[data-testid="touchable"] span[data-testid="live-status-box-applet"] ~ span',
    btnAddToFavorites: 'div[data-testid="toggle"] button[data-testid="favorites-add-icon-applet"]',
    btnQuickBuy: 'div[data-testid="toggle"] button[data-testid="quick-buy-button-applet"]',
    btnSendMessage: 'div[data-testid="toggle"] button[data-testid="messenger-button-applet"]',
    btnStartSession: 'div[data-testid="toggle"] button[data-testid="start-private-button-applet"]',
    btnSignUpForFree: 'input[id="signup-submit"]'
  }

  async validateAccessedProfileName(psychicName) {
    await I.see(psychicName, this.locslive.lblProfileName);
  }

  async verifyLiveChatOpen() {
    await I.waitForElement(this.locslive.cardTouchableSection, timeout._10s);
    await I.switchTo(this.locslive.cardTouchableSection);
    await I.seeInCurrentUrl("/en/chat/")
  }

  async pressGetCredits() {
    await I.waitForElement(this.locslive.btnGetFreeCoins, timeout._10s);
    await I.forceClick(this.locslive.btnGetFreeCoins);
  }

  async pressAddToFavorites() {
    await I.waitForElement(this.locslive.btnAddToFavorites, timeout._10s);
    await I.retry({
      retries: 5,
      when: err => err.message === 'Favorite was not loaded'
    }).forceClick(this.locslive.btnAddToFavorites);
  }
  
  async pressOranumSuprise(model) {
    const modelId = model.trim();
    const locSurpriseModel = `div[data-testid="reaction-surprise-applet"] button[data-testid*=${modelId}]`;
    await I.forceClick(locSurpriseModel);
  }
  
  async pressQuickBuy() {
    await I.forceClick(this.locslive.btnQuickBuy);
  }
  
  async pressSendMessage() {
    await I.forceClick(this.locslive.btnSendMessage);
  }
  
  async pressStartSession() {
    await I.forceClick(this.locslive.btnStartSession);
  }

  async validateSignUpForFreeDisplayed() {
    await I.waitForElement(this.locslive.btnSignUpForFree, timeout._7s);
    I.seeElement(this.locslive.btnSignUpForFree);
  }

}
module.exports = new ProfilePage();