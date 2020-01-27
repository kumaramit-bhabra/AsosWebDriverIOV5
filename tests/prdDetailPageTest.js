const landingPage = require("..//pageObjects/landingPage");
const prdListPage = require("../pageObjects/prdListingPage");
const prdDetPage = require("../pageObjects/prdDetailPage");

beforeEach("Will be called every time before a test run",()=>{
    browser.url('/');
    browser.maximizeWindow();
    landingPage.selectDivision();
    prdListPage.getPrdCountAndSelectProduct();
})

describe("From the product detail page select the product and add it to shopping Bag",()=>{
    it("Select size and add it to shopping Bag",()=>{
        prdDetPage.selectSizeAndAddToBag();
        prdDetPage.clickOnBag();

    })
})