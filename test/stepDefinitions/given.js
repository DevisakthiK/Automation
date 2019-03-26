
import { Given } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import loginPage from '../pageobjects/ta-login.page';
import orbitzPage from '../pageobjects/orbitz.page';

//*** belongs to orbitz search */
Given(/^I am on the Orbitz Home page$/, function () {
  orbitzPage.open();
  browser.getTitle().should.equal('Orbitz Travel: Vacations, Cheap Flights, Airline Tickets & Airfares');


});

Given(/^I click on Flights Tab$/, function () {
  browser.element('#tab-flight-tab-hp').click();
  browser.pause(1000);
});
  // *** belongs to Yahoo serch feature
  Given(/^I am on the search page$/, function() {
    yahooPage.open();
    browser.getTitle().should.equal('Yahoo Search - Web Search');

  });

  // *** belongs to ta-loging  feature
  Given(/^I am on the phptravels page$/, function() {
    loginPage.open();     // navigating to login page
  });


