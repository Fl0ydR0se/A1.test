import SearchAppartment from '../pageobjects/Booking/search.appartment'

require('chai').should();
var assert = require('chai').assert

describe('Search the appartment', () => {
    it('Open site', () => {
        SearchAppartment.open()
        SearchAppartment.verifyOnPage()
    })

    it('Search "Hotel Pennsylvania"', () =>{

      // browser.element('.c-autocomplete__input .sb-searchbox__input .sb-destination__input').should.exist
      SearchAppartment.nameApp.setValue('Hotel Pennsylvania')
      browser.click('.sb-searchbox__button')
      // browser.element('#hotel_1803065').should.exist
      console.log(browser.getCurrentTabId())
      browser.getTitle()
      SearchAppartment.clickHotelName()
      console.log(browser.windowHandle());
      browser.getTitle()
      browser.pause(15000)
      console.log(browser.getCurrentTabId())

      var t = browser.getUrl();
      browser.newWindow(t);

       //browser.click('#right #top-book .b-button_primary')
      SearchAppartment.clickBuyButton()
      browser.getTitle()
      console.log(browser.getCurrentTabId())
      console.log(browser.windowHandle());
      browser.pause(15000)
       
 })
    
})  

