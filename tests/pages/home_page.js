const { I } = inject();
const assert = require('assert');

class HomePage {

  locs = {
    btnViewAllPsychics: 'a[data-testid="cta-button-to-live-search"]',
    allTxtPsychicNames: 'span[data-testid="influencer-name"]',
    allTxtPsychicImages: 'div[data-testid="card-cover"] picture img[src*=".jpg"]',
  }

  async openHome (url, expectedTitle) {
    I.amOnPage(url);
    I.grabDataFromPerformanceTiming();
    I.see(expectedTitle);
  }

  scrollIntoViewAllLivePsychics () {
    I.scrollTo(this.locs.btnViewAllPsychics);
    I.seeElement(this.locs.btnViewAllPsychics);
  }

  pressViewAllLivePsychics () {
    I.click(this.locs.btnViewAllPsychics);
  }

  async grabAllPsychicsNamesDisplayed() {
    I.waitForElement(this.locs.allTxtPsychicNames, 5);
    let allPsychics = await I.grabTextFromAll(this.locs.allTxtPsychicNames);
    return allPsychics;
  }

  async grabTotalNumberOfPsychicsDisplayed() {
    I.waitForElement(this.locs.allTxtPsychicNames, 5);
    let allPsychics = await I.grabNumberOfVisibleElements(this.locs.allTxtPsychicNames);
    return allPsychics;
  }

  async validateVisiblePsychics(){
    let psychicNames = await this.grabAllPsychicsNamesDisplayed();
    for (let i = 0; i < psychicNames.length; i++) {
      I.see(psychicNames[i]);
    }
  }

  async validatePicturesFromPsychics(totalPsychics){
    await I.seeNumberOfVisibleElements(this.locs.allTxtPsychicImages, totalPsychics);
  }

}
module.exports = new HomePage();