class ArticlePage {

  get articleImg() {
    return $('td[class=\'infobox-image\'] a:link :first-child');
  }

  get bornHeader() {
    return $("(//th[contains(text(),'Born')]/../td)");
  }

  //(//th[contains(text(),'Born')]/../td)
  getHeaderTextElement(text) {
    const xpath = `//th[contains(text(),'${text}')]/../td`;
    return $(xpath);
  }


  async isBornHeaderVisible() {
    return browser.waitUntil(() => this.bornHeader.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: 'Born header element is not visible within the specified time',
    });
  }

  waitForBornHeaderVisible() {

    this.bornHeader.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Header not visible' });
  }

  async getHeaderText(header) {

    const text = await this.getHeaderTextElement(header).getText();
    console.log('Text of the ', header, ' header:', text);
    return text;

  }






}





module.exports = new ArticlePage();