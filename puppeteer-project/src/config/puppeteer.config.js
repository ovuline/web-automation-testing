// config/puppeteer.config.js

const getConfig = () => {
    return {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
        defaultViewport: {
            width: 1280,
            height: 800,
        },
        // Add other Puppeteer options here as needed
    };
};

module.exports = { getConfig };
