class WikiHome {

    get searchBox() {
        return $('[name = "search"]')
    }

    get searchButton() {
        return $('button[type="submit"]')
    }


    async searchName(name) {
        await this.searchBox.setValue(name)
        await browser.pause(1000)
        await this.searchButton.click()

    }

    open() {
        return browser.url('https://www.wikipedia.org/')
    }





}
module.exports = new WikiHome();
