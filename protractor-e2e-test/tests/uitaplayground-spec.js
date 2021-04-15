const { browser, element } = require("protractor");
const getButtonWithText = require("../utils/customGetters")

describe('UI Test Automation Playground', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
    });

    it('Dynamic ID', function () {
        browser.get('http://uitestingplayground.com/dynamicid');
        element(by.buttonText('Button with Dynamic ID')).click()
    });

    it('AJAX Data', function () {
        browser.get('http://uitestingplayground.com/ajax');
        element(by.buttonText('Button Triggering AJAX Request')).click()

        let elem = element(by.css('.bg-success'))
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 20000, 'Element taking too long to appear in the DOM');
    });

    it('Scrollbars', function () {
        browser.get('http://uitestingplayground.com/scrollbars');
        element(by.id('hidingButton')).click()
    });

    it('Visibility', function () {
        browser.get('http://uitestingplayground.com/visibility');
        element(by.id('hideButton')).click()

        expect(browser.isElementPresent(element(by.id('removedButton')))).toBe(false);
        expect(element(by.id('zeroWidthButton')).isDisplayed()).toBe(false);

        element(by.id('overlappedButton')).click().then(
            function () {
                throw "Can click Funds element that should be disabled";
            },
            function () { }
        )

        expect(element(by.id('transparentButton')).isDisplayed()).toBe(false);
        expect(element(by.id('invisibleButton')).isDisplayed()).toBe(false);
        expect(element(by.id('notdisplayedButton')).isDisplayed()).toBe(false);
        expect(element(by.id('offscreenButton')).isDisplayed()).toBe(false);
    });

    it('Class Attribute', function () {
        browser.get('http://uitestingplayground.com/classattr');
        element(by.css('button.btn-primary')).click();
        browser.switchTo().alert().accept();
    });

    it('Client Side Delay', function () {
        browser.get('http://uitestingplayground.com/clientdelay');
        element(by.buttonText('Button Triggering Client Side Logic')).click()

        let elem = element(by.css('.bg-success'))
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 20000, 'Element taking too long to appear in the DOM');

        elem.click()
    });

    it('Dynamic Table', function () {
        browser.get('http://uitestingplayground.com/dynamictable');
        let chromeRow = element(by.cssContainingText('div[role="row"]', 'Chrome'));
        let chromePercentage = chromeRow.all(by.cssContainingText('span[role="cell"]', '%')).first().getText()
        expect(element(by.css('.bg-warning')).getText()).toContain(chromePercentage)
    });

    it('Sample App', function () {
        browser.get('http://uitestingplayground.com/sampleapp');
        element(by.css('input[name="UserName"]')).sendKeys('Fin')
        element(by.css('input[name="Password"]')).sendKeys('pwd')
        element(by.id('login')).click()

        expect(element(by.id('loginstatus')).getText()).toBe('Welcome, Fin!')
    });

    it('Hidden Layers', function () {
        browser.get('http://uitestingplayground.com/hiddenlayers');
        element(by.id('greenButton')).click()

        element(by.id('greenButton')).click().then(
            function () {
                throw "Can click green button element that should be disabled";
            },
            function () { }
        )
    });

    it('Click', function () {
        browser.get('http://uitestingplayground.com/click');
        element(by.buttonText('Button That Ignores DOM Click Event')).click()

        expect(element(by.css('.btn-success')).isDisplayed()).toBe(true)
    });

    it('Verify Text', function () {
        browser.get('http://uitestingplayground.com/verifytext');
        expect(element(by.cssContainingText('span', 'Welcome UserName!')).isDisplayed()).toBe(true)
    });

    it('Mouse Over', function () {
        browser.get('http://uitestingplayground.com/mouseover');
        let button = element(by.cssContainingText('a', 'Click me'));
        button.click();
        button.click();
        expect(element(by.id('clickCount')).getText()).toBe('2')
    });

    it('Load Delay', function () {
        browser.get('http://uitestingplayground.com/loaddelay');
        element(by.buttonText('Button Appearing After Delay')).click()
    });

    it('Text Input', function () {
        browser.get('http://uitestingplayground.com/textinput');
        element(by.id('newButtonName')).sendKeys('MOI')

        let updatingButton = element(by.id('updatingButton'))
        updatingButton.click();
        expect(updatingButton.getText()).toBe('MOI')
    });

    fit('Progress Bar', function () {
        browser.get('http://uitestingplayground.com/progressbar');
        element(by.id('startButton')).click()

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.textToBePresentInElement(element(by.id('progressBar')), '75%'), 40000);

        element(by.id('stopButton')).click()
    });

    it('Non-Breaking Space', function () {
        browser.get('http://uitestingplayground.com/nbsp');
        element(by.buttonText('My\u00a0Button')).click()
    });
});