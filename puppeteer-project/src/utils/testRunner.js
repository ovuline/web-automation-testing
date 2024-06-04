const { logTestStart, logTestEnd } = require('./logger');

const runTests = async (browser, testModule) => {
    for (const testName in testModule) {
        logTestStart(testName);
        await testModule[testName](browser);
        logTestEnd(testName);
    }
};

module.exports = { runTests };
