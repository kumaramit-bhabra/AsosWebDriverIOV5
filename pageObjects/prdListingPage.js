const pageFactory = require("../config/pageFactory");
let totalPrdCountText = 0;
class prdListingPage{
    
    getPrdCountAndSelectProduct()
    {
        var indexStyle = 0;
        var totalPrdCountWithComma = 0;
        var indexComm = 0;
        var totalPrdCountWithOutComma = 0;

        totalPrdCountText = $(pageFactory.plpPrdCount).getText();
    
        indexStyle = totalPrdCountText.indexOf("styles");
        
        totalPrdCountWithComma = totalPrdCountText.substring(0,indexStyle);
        indexComm = totalPrdCountWithComma.indexOf(',');
        totalPrdCountWithOutComma = (totalPrdCountWithComma.substring(0,indexComm)+totalPrdCountWithComma.substring(indexComm+1))*1
        

        if (totalPrdCountWithOutComma >5)
        {
            $(pageFactory.plpPrdSel).$$('article')[5].click();
            
        }
    }
    
}
module.exports = new prdListingPage();