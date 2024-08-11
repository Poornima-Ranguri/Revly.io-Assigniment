const puppeteer = require('puppeteer')
const PerformanceData = require('../models/performanceData')

async function analyzeWebsite(req, res) {
  const url = req.body.url
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  const performanceData = await page.evaluate(() => {
    return (
      pageLoadTime:
        window.performance.timing.loadEventEnd -
        window.performance.timing.navigationStart,
      totalRequestSize: window.performance
        .getEntriesByType('resource')
        .reduce((acc, entry) => acc + entry.transferSize, 0),
      numberOfRequests: window.performance.getEntriesByType('resource').length,
    )
  })

  await browser.close()
  const savedData = await PerformanceData.create(performanceData)
  res.json(savedData)
}

module.exports = {analyzeWebsite}
