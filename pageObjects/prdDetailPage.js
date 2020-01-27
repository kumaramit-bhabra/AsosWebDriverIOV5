const pageFactory = require("..//config/pageFactory");

class prdDetailPage{

    selectSizeAndAddToBag()
    {
        var size = $$(pageFactory.pdpSize);

        for (var i = 0; i<size.length;i++)
        {
            console.log("Text is"+size[i].getText());
        }
        if(size.length>2)
        {
            $(pageFactory.pdpSelectSize).selectByIndex(size.length-1);
        }

        $(pageFactory.pdpAddToBag).click();
          
    }

    clickOnBag()
    {
        $(pageFactory.pdpBag).click();
        browser.pause(10000);
        $(pageFactory.pdpCheckOut).click();
        browser.pause(10000);
    }
}
module.exports = new prdDetailPage();