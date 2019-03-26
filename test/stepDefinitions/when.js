
import { When } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/ta-login.page';
import orbitzPage from '../pageobjects/orbitz.page';


//*** belongs to obrbitz search feature */
When(/^I click on One way submenu$/, function () {
  orbitzPage.selectOneWaySubMenu();
  browser.pause(1000);
  expect(browser.element('div.col.gcw-date-field.gcw.disabled')).to.exist;
});

When(/^Enter Flying From City as "([^"]*)"$/, function (fromCity) {
orbitzPage.enterFrom(fromCity) ;
browser.element('input#flight-origin-hp-flight-airport_code').getValue().should.equal('MEL'); 
});

  // *** belongs to Yahoo serch feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    yahooPage.search();
  });

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });


