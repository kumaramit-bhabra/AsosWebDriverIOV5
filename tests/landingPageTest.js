

describe("Launch asos, Add product to shopping bag and checkout",()=>{
    it("Launch the website",()=>{
        browser.url("https://www.asos.com/");
        browser.maximizeWindow();
        console.log("title of the page is "+browser.getTitle());
        browser.$("#chrome-search").setValue("Purse");
        browser.pause(5000);
        var size = browser.$("#search-results").$$("li").length;
        console.log("size is :"+ size);

        console.log(browser.$("#search-results").$$("li")[2].$('button').$$("span")[0].getText());
        browser.$("#search-results").$$("li")[2].$('button').$$("span")[0].click();
        browser.pause(10000);
        
    })
})
