const { I } = inject();

class HomePage {

  locs = {
    btnViewAllPsychics: 'a[data-testid="cta-button-to-live-search"]'
  }

  async openHome(url, expectedTitle) {
    I.amOnPage(url);
    I.grabDataFromPerformanceTiming();
    I.see(expectedTitle);
  }

  scrollIntoViewAllLivePsychics() {
    I.scrollTo(this.locs.btnViewAllPsychics);
    I.seeElement(this.locs.btnViewAllPsychics);
  }

  pressViewAllLivePsychics() {
    let buttonName = "view all live psychics";
    I.waitForClickable(this.locs.btnViewAllPsychics, 5);
    I.click(buttonName, this.locs.btnViewAllPsychics);
  }

}
module.exports = new HomePage();