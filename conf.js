exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/tests/*.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        acceptInsecureCerts: true
    },
};
