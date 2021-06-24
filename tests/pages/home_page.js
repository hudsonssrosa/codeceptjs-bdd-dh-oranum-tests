const { I } = inject();

class HomePage {

  locs = {
    btnViewAllPsychics: 'a[data-testid="cta-button-to-live-search"]',
    btnHeaderSearch: 'div[data-testid="button-header-search"] a > div:first-of-type'
  }

  async openHome(url, expectedTitle) {
    I.amOnPage(url);
    I.grabDataFromPerformanceTiming();
    I.see(expectedTitle);
  }

  pressHeaderSearchButton() {
    I.click(this.locs.btnHeaderSearch);
  }

  scrollIntoViewAllLivePsychics() {
    I.scrollTo(this.locs.btnViewAllPsychics);
    I.seeElement(this.locs.btnViewAllPsychics);
  }

  pressViewAllLivePsychics() {
    let buttonName = "view all live psychics";
    I.click(buttonName, this.locs.btnViewAllPsychics);
  }

}
module.exports = new HomePage();