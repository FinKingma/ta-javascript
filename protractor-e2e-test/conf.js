let SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*spec.js'],
    /*multiCapabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            prefs: { 'privacy.window.name.update.enabled': false }
        }
    }, {
        browserName: 'chrome'
    }],*/
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                },
            })
        )
    },
    jasmineNodeOpts: {
        //removes ugly dots
        print: function () { }
    }
}