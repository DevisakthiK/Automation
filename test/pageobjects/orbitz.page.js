
import Page from './page';

class OrbitzPage extends Page  {
  /**
  * define elements
  */

  get oneWaySubmenu()   { return browser.element('#flight-type-one-way-label-hp-flight'); }
  get searchFrom()  { return browser.element('input#flight-origin-hp-flight'); }
  get searchTo()   { return browser.element('#flight-destination-hp-flight'); }
  get searchFromDate()   { return browser.element('#flight-departing-single-hp-flight'); }
  get submitSearch(){ return browser.element('//label[@class="btn-primary btn-action gcw-submit "]');}
  get resultPage() {return browser.element('#title-city-text');}

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://orbitz.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(500);
  }

  selectOneWaySubMenu(){
      this.oneWaySubmenu.click();
  }
  enterFrom (from) {
    this.searchFrom.clearElement();
    this.searchFrom.setValue(from);
    browser.pause(500);

   // browser.waitForVisible.element('aria-option-0').click();
  }

  enterTo (to) {
    this.searchTo.clearElement();
    this.searchTo.setValue(to);
  }

  enterFromDate (fromDate) {
    this.searchFromDate.clearElement();
    this.searchFromDate.setValue(fromDate);
  }

  search () {
    this.submitSearch.click();
  }
  isSearched () {
    this.resultPage.waitForVisible(1000);
    return this.resultPage.isVisible();
  }
}

export default new OrbitzPage();
