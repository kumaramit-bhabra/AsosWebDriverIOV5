const landingPage = require("../pageObjects/landingPage");
var opsys = process.platform;

beforeEach("Method being run before each it", ()=>{
    browser.url("/");
    browser.maximizeWindow();
    console.log("Value of opsys is "+opsys);
})

describe("Launch asos, Add product to shopping bag and checkout",()=>{
    it.skip("Launch the website",()=>{
        
        console.log("title of the page is "+browser.getTitle());
        browser.$("#chrome-search").setValue("Coin Purse");
    
        var size = browser.$("#search-results").$$("li").length;
        console.log("size is :"+ size);

        //console.log(browser.$("#search-results").$$("li")[2].$('button').$$("span")[0].getText());
        //browser.$("#search-results").$$("li")[0].$('button').$$("span")[0].click();
    
        browser.$("#search-results").$$("li")[0].click();
        browser.pause(10000);
        
        
    });

    it("Select Women as Division and select one of the category",()=>{
        console.log("title of the page is "+browser.getTitle());
        landingPage.selectDivision();
        browser.pause(10000);    
    })
})
