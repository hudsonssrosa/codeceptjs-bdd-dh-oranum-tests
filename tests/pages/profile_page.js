const { I } = inject();


class ProfilePage {

  locs = {
    lblProfileName: 'span[data-testid="influencer-name-text"]'
  }

  async validateAccessedProfileName(psychicName) {
    await I.see(psychicName, this.locs.lblProfileName);
  }

}
module.exports = new ProfilePage();