describe('login to the app', function () {
    var fs = require('fs');

    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    it('should login to the Form Application and take screenshot', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://the-internet.herokuapp.com');
        element(by.cssContainingText('a', 'Form Authentication')).click();
        element(by.id('username')).sendKeys('tomsmith');
        element(by.id('password')).sendKeys('SuperSecretPassword!');
        element(by.css('button')).click();

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'screenshot.png');
        });
    });
});