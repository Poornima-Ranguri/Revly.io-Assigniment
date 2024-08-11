const puppeteer = require('puppeteer');

async function launchBrowser() {
  return await puppeteer.launch();
}

async function closeBrowser(browser) {
  await browser.close();
}

module.exports = { launchBrowser, closeBrowser };


+ `package.json`:


{
  "name": "speedx-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.11.15",
    "puppeteer": "^10.2.0"
  }
}

