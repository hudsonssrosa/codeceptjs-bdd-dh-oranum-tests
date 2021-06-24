const { I } = inject();

class HomePage {

  locs = {
    btnTopicsAtViewAll: 'a div[data-testid="filter-text"]',
    allTxtPsychicNames: 'span[data-testid="influencer-name"]',
    allTxtPsychicImages: 'div[data-testid="card-cover"] picture img[src*=".jpg"]',
    txtBadgeTagOffline: 'div[data-testid="card-badge"] > div >  *:not(div[data-testid="badge-tag"])',
    txtBadgeTagLiveOrBusy: 'section div[data-testid="card-cover"] div[data-testid="badge-tag"]'
  }

  pressSpecificTopicAtOverview(topicName) {
    I.click(topicName, this.locs.btnTopicsAtViewAll);
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

  async validateVisiblePsychics() {
    let psychicNames = await this.grabAllPsychicsNamesDisplayed();
    for (let i = 0; i < psychicNames.length; i++) {
      I.see(psychicNames[i]);
    }
  }

  async validatePicturesFromPsychics(totalPsychics) {
    await I.seeNumberOfVisibleElements(this.locs.allTxtPsychicImages, totalPsychics);
  }

  async validateBadgeCommonStatus(commonStatus) {
    const liveTag = "Live"
    await I.see(liveTag.toUpperCase(), this.locs.txtBadgeTagLiveOrBusy);
    await I.seeElement(this.locs.txtBadgeTagOffline);
  }

  async validateBadgeSporadicStatus(sporadicStatus) {
    const busyTag = "Busy"
    const privateTag = "Private"
    
    await I.dontSee(privateTag.toUpperCase(), this.locs.txtBadgeTagLiveOrBusy);
    await I.dontSee(busyTag, this.locs.txtBadgeTagLiveOrBusy);
  }

}
module.exports = new HomePage();