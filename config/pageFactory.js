// This file will have all the Web Elements associated with the respective Pages

module.exports =
{
    //------------Landing/Index Page Web Elements -----------//
    divWom: "a[aria-label='Women\\'s products']",
    divCat: "div[role=tablist] button:nth-of-type(3) span span",
    divRange: "//a[text()='Activewear' and contains(@href,'nlid=ww|clothing')]",
    landingPageTitle: "ASOS | Online Shopping for the Latest Clothes & Fashion",

    //-----------Product Landing Page Web Element-------//
    plpPrdCount: "p[data-auto-id='styleCount']",
    plpPrdSel: "div[data-auto-id='productList']",

    //-----------Product Detail Page ------------//
    pdpSize:"select[data-id='sizeSelect'] option",
    pdpSelectSize:"select[data-id='sizeSelect']",
    pdpAddToBag: "span[data-bind='text: buttonText']",
    //pdpBag:"a[data-testid='bagIcon']",
    pdpBag:"a[data-testid='bagIcon'] span:nth-of-type(2)",
    pdpViewBag:"a[data-test-id='checkout-link']",
    pdpCheckOut:"//span[text()='Checkout']"

}