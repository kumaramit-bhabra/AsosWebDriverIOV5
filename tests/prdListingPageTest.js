const landingPage = require("../pageObjects/landingPage");
const prdListingPage = require("../pageObjects/prdListingPage");

beforeEach("method to be be called before every test",()=>{
    browser.url('/');
    browser.maximizeWindow();
    landingPage.selectDivision();
})

describe("Test the product listing page functionality", ()=>{
    it("Based upon the count of products, click on the product",()=>{
        prdListingPage.getPrdCountAndSelectProduct();
        
    })
})