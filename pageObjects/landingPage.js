const pageFactory = require("../config/pageFactory");

class landingPage{

    selectDivision()
    {
        $(pageFactory.divWom).click();
        $(pageFactory.divCat).click();
        $(pageFactory.divRange).click();
    }



}
module.exports = new landingPage();