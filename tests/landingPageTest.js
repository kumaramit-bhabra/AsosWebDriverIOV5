const landingPage = require("../pageObjects/landingPage");

beforeEach("Method being run before each it",()=>{
    browser.url("/");
    browser.maximizeWindow();
})

describe("Launch asos, Add product to shopping bag and checkout",()=>{
    it("Launch the website",()=>{
        
        console.log("title of the page is "+browser.getTitle());
        browser.$("#chrome-search").setValue("Coin Purse");
    
        var size = browser.$("#search-results").$$("li").length;
        console.log("size is :"+ size);

        //console.log(browser.$("#search-results").$$("li")[2].$('button').$$("span")[0].getText());
        //browser.$("#search-results").$$("li")[0].$('button').$$("span")[0].click();
        console.log("Hello")
        browser.$("#search-results").$$("li")[0].click();
        browser.pause(10000);
        
        //a[@data-testid="women-floor"]
    });

    it("Select Women as Division and select one of the category",()=>{
        console.log("title of the page is "+browser.getTitle());
        landingPage.selectDivision();
        browser.pause(10000);
        
        /*$("//a[@data-testid='women-floor']").click();
        $("//button[@data-id='0edf7894-4f2f-42fb-896d-3e91a01704b1']/span/span").click();
        
        $("//section[@class='_1g1PWkA _2SQx27S']//a[@class='_1cjL45H _2Y7IAa_ CLdGn9X _1XjY6Zd']").getText()
   

        //section[@class='_1g1PWkA _1rF5dEp]//a[contains(@class,'_1cjL45H _2Y7IAa_ CLdGn9X _1XjY6Zd') and text()='Sandals']
        var text = $("//section[@class='_1g1PWkA _1rF5dEp']//a[contains(@class,'_1cjL45H _2Y7IAa_ CLdGn9X _1XjY6Zd') and text()='Sandals']").getText();
        console.log("text is "+ text);
        $("//section[@class='_1g1PWkA _1rF5dEp']//a[contains(@class,'_1cjL45H _2Y7IAa_ CLdGn9X _1XjY6Zd') and text()='Sandals']").click();
        
            div[data-auto-id='productList']
        $("//div[@class='_3-pEc3l']").$$('article')[2].$('a').click();

        $("//select[@data-id='sizeSelect']").selectByIndex(1);
        $("//span[contains(text(),'Add to bag')]").click();

        $("//span[@class='_1z5n7CN']").click();
        $("//span[@class='_1M-cSy1' and text()='Checkout']").click();
        //browser.pause(10000)    */
    })
})
