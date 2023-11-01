const { Given, When, Then } = require('@wdio/cucumber-framework');
const WikiHome = require('../pageobjects/wikihome.page');
const ArticlePage = require('../pageobjects/article.page');
const assert = require('assert');


Given(/^I open web browser for wikipedia;$/, async () => {
    WikiHome.open()
});

When(/^I type "([^"]*)" on the search box$/, async (name) => {
    await WikiHome.searchBox.setValue(name)
    await browser.pause(2000)
});

When(/^I click on search button$/, async () => {
    await WikiHome.searchButton.click()
    await browser.pause(2000)
});

Then(/^the URL should be "([^"]*)";$/, async (url) => {
    await expect(browser).toHaveUrl(url)
    await browser.pause(1000)
});

Then(/^I want to see an image under title "([^"]*)" on the right column$/, async (title) => {
    await expect(ArticlePage.articleImg).toBeDisplayed()

    const titleElement = await $(`//div[contains(text(), '${title}')]`);


    await expect(titleElement).toBeDisplayed();


});


Then(/^I want to read information about "([^"]*)", "([^"]*)", "([^"]*)" on the right column$/, async (args1, args2, args3) => {
    await ArticlePage.getHeaderText(args1)
    await ArticlePage.getHeaderText(args2)
    await ArticlePage.getHeaderText(args3)
});



Then(/^I want to  a section about "([^"]*)"$/, async (sectionName) => {

    //span[contains(@class, 'mw-headline') and text()="Early years"]/following::*[self::h2 or self::p]
        try {
    
            const elements = await browser.$$(`//span[contains(@class, 'mw-headline') and text()="${sectionName}"]/following::*[self::h2 or self::p]`);
            let index = 0;
            while (index < elements.length) {
                const element = elements[index];
                const tagName = await element.getTagName();
    
                if (tagName === 'h2') {
    
                    break;
                }
    
                if (tagName === 'p') {
                    const text = await element.getText();
                    console.log(text);
                }
                index++;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    );
