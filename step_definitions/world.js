var webdriver = require('selenium-webdriver');
var { setWorldConstructor } = require('cucumber');
var { setDefaultTimeout } = require('cucumber');


function CBTWorld() {
    var remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';
    var caps = {
        name: 'Basic Example',
        build: '1.0',
        browserName: 'Chrome', // Pulls latest version of Chrome by default
        platform: 'Windows 10', // To specify version, add version : 'desired version'
        screen_resolution: '1366x768',
        record_video: 'true',

    };

    this.driver = new webdriver.Builder()
        .usingServer(remoteHub)
        .withCapabilities(caps)
        .build();
}

setDefaultTimeout(60 * 1000);
setWorldConstructor(CBTWorld);