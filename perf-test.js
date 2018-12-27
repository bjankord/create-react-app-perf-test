const puppeteer = require('puppeteer');
const tracealyzer = require('tracealyzer');

const TRACE_FILE = 'trace.json';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({ path: TRACE_FILE });
  // serve defaults to http://localhost:5000
  await page.goto('http://localhost:5000');
  await page.tracing.stop();

  let performance = JSON.parse(
    await page.evaluate(() => {
      let total = window.performance
      let entries = total.getEntries()
      return JSON.stringify({ total, entries })
    })
  );

  const pageMetrics = await page.metrics();
  await browser.close();

  const metrics = tracealyzer(TRACE_FILE);

  // More Info: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming
  console.log(performance, 'performance-timing');

  // More info: https://github.com/GoogleChrome/puppeteer/blob/v1.11.0/docs/api.md#pagemetrics
  console.log(pageMetrics, 'page-metrics');

  // More info: https://www.npmjs.com/package/tracealyzer
  console.log(metrics, 'tracealyzer-metrics');
})();