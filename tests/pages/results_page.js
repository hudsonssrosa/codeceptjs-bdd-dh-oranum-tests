const { I } = inject();


class ResultsPage {

  locs = {
    btnTopicsAtViewAll: 'a div[data-testid="filter-text"]'
  }

  resultlocs = {
    lblAllPsychicNames: 'span[data-testid="influencer-name"]',
    imgAllPsychics: 'div[data-testid="card-cover"] picture img[src*=".jpg"]',
    lblBadgeTagOffline: 'div[data-testid="card-badge"] > div >  *:not(div[data-testid="badge-tag"])',
    lblBadgeTagLiveOrBusy: 'section div[data-testid="card-cover"] div[data-testid="badge-tag"]'
  }

  searchlocs = {
    txtFindPsychics: 'input[data-testid="filter-text"]',
    lblResultListDropdown: 'div[data-testid="search-result-list"] div[id*="downshift-"] a > div div:nth-child(2) div'
  }

  pressSpecificTopicAtOverview(topicName) {
    I.click(topicName, this.locs.btnTopicsAtViewAll);
  }

  typeSearch(profileName) {
    I.fillField(this.searchlocs.txtFindPsychics, profileName);
  }

  async pressSearchResultDropdown(profileName) {
    await I.waitForElement(this.searchlocs.lblResultListDropdown, 5);
    I.click(profileName, this.searchlocs.lblResultListDropdown);
  }

  async validateDropdownWithSearchResults(profileName) {
    await I.waitForElement(this.searchlocs.lblResultListDropdown, 5);
    I.see(profileName, this.searchlocs.lblResultListDropdown);
  }

  async grabAllPsychicsResultsFromDropdownFilter() {
    I.waitForElement(this.searchlocs.lblResultListDropdown, 5);
    let psychicsFound = await I.grabTextFromAll(this.searchlocs.lblResultListDropdown);
    return psychicsFound;
  }

  async grabAllPsychicsNamesDisplayed() {
    I.waitForElement(this.resultlocs.lblAllPsychicNames, 5);
    let allPsychics = await I.grabTextFromAll(this.resultlocs.lblAllPsychicNames);
    return allPsychics;
  }

  async grabTotalNumberOfPsychicsDisplayed() {
    I.waitForElement(this.resultlocs.lblAllPsychicNames, 5);
    let allPsychics = await I.grabNumberOfVisibleElements(this.resultlocs.lblAllPsychicNames);
    return allPsychics;
  }

  async validateVisiblePsychics() {
    let psychicNames = await this.grabAllPsychicsNamesDisplayed();
    for (let i = 0; i < psychicNames.length; i++) {
      I.see(psychicNames[i]);
    }
  }

  async validatePicturesFromPsychics(totalPsychics) {
    await I.seeNumberOfVisibleElements(this.resultlocs.imgAllPsychics, totalPsychics);
  }

  async validateBadgeCommonStatus(commonStatus) {
    const liveTag = "Live";
    await I.see(liveTag.toUpperCase(), this.resultlocs.lblBadgeTagLiveOrBusy);
    await I.seeElement(this.resultlocs.lblBadgeTagOffline);
  }

  async validateBadgeSporadicStatus(sporadicStatus) {
    const busyTag = "Busy";
    const privateTag = "Private";
    await I.dontSee(privateTag.toUpperCase(), this.resultlocs.lblBadgeTagLiveOrBusy);
    await I.dontSee(busyTag, this.resultlocs.lblBadgeTagLiveOrBusy);
  }

}
module.exports = new ResultsPage();