const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'logs', 'test.log');

const logTestStart = (testName) => {
    const message = `[START] ${new Date().toISOString()} - ${testName}\n`;
    fs.appendFileSync(logFilePath, message);
};

const logTestEnd = (testName) => {
    const message = `[END] ${new Date().toISOString()} - ${testName}\n`;
    fs.appendFileSync(logFilePath, message);
};

module.exports = { logTestStart, logTestEnd };
