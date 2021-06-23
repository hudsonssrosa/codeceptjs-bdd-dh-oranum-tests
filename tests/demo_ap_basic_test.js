Feature('Search a product (BASICS)');

const ap_url = 'http://automationpractice.com/index.php';

Scenario('User can search a product', ({ I }) => {
    let product = 'Blouse'
    I.amOnPage(ap_url)
    I.fillField('input#search_query_top', product)
    I.click('#searchbox button[name="submit_search"]')
    I.waitForElement(`h5[itemprop='name'] a[title='${product}']`, 10)
    I.scrollTo(`h5[itemprop='name'] a[title='${product}']`)
    I.seeElement(`h5[itemprop='name'] a[title='${product}']`)
});
