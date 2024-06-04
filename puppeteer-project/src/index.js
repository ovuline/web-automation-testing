const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { runTests } = require('./utils/testRunner');
const { getConfig } = require('./config/puppeteer.config');

// Get the configuration settings for Puppeteer
// The getConfig function returns an object with settings like whether to run in headless mode, browser arguments, etc.
const config = getConfig();

// Function to create necessary directories if they don't already exist
const createDirectories = () => {
    const directories = ['reports', 'logs']; // List of directories we need
    directories.forEach(dir => { // Loop through each directory in the list
        if (!fs.existsSync(dir)) { // Check if the directory does not exist
            fs.mkdirSync(dir); // Create the directory if it doesn't exist
        }
    });
};

// Main function to run Puppeteer tests
(async () => {
    createDirectories(); // Ensure the required directories are created

    const browser = await puppeteer.launch(config); // Launch Puppeteer with the configuration settings

    // Get the list of all test files in the 'tests' directory
    const testFiles = fs.readdirSync(path.join(__dirname, 'tests')).filter(file => file.endsWith('.test.js'));

    // Loop through each test file and run the tests
    for (const testFile of testFiles) {
        const testModule = require(`./tests/${testFile}`); // Import the test module
        await runTests(browser, testModule); // Run the tests in the test module using the runTests function
    }

    await browser.close(); // Close the Puppeteer browser instance after all tests are done
    console.log('All tests completed'); // Log a message indicating all tests are finished
})();
