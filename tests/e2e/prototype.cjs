const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs/promises');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.BROWSER_CHANNEL || 'chrome' });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const url = pathToFileURL(path.resolve(__dirname, '../../apps/landing/index.html')).href;
    const output = await fs.mkdtemp(path.join(os.tmpdir(), 'integra-wireframe-'));
    await page.goto(url);
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(url);
      await page.getByRole('link', { name: 'Explorar Integra MET', exact: true }).click();
      await page.getByRole('link', { name: /Corte láser Piezas/ }).click();
      assert.equal(await page.locator('h1').innerText(), 'Corte láser');
      await page.evaluate(() => { window.open = (...args) => { window.testOpened = args; }; });
      await page.locator('#whatsapp').click();
      const opened = await page.evaluate(() => window.testOpened);
      const destination = new URL(opened[0]);
      assert.equal(destination.hostname, 'wa.me');
      assert.equal(destination.pathname, '/524495411077');
      assert.match(destination.searchParams.get('text'), /Integra MET: Corte láser/);
      assert.equal(opened[2], 'noopener,noreferrer');
      assert.equal(await page.locator('form').count(), 0);
      assert.equal(await page.locator('#whatsapp').count(), 1);
      await page.getByText('¿Qué información comparto para cotizar?', { exact: true }).click();
      assert.equal(await page.locator('details[open]').count(), 1);
      const routes = ['inicio', 'integra', 'met', 'rent', 'rent/montacargas', 'proyectos', 'proyectos/transportadores'];
      for (const route of routes) {
        await page.goto(`${url}#${route}`);
        await page.locator('h1').waitFor();
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow: ${width}, ${route}`);
      }
      await page.goto(url);
      if (width === 390) {
        await page.getByRole('button', { name: 'Menú' }).click();
        await page.getByRole('navigation').getByRole('link', { name: 'Integra RENT' }).click();
        assert.equal(await page.getByRole('button', { name: 'Menú' }).getAttribute('aria-expanded'), 'false');
        assert.match(await page.locator('h1').innerText(), /El equipo/);
        await page.goto(url);
      }
      await page.screenshot({ path: path.join(output, `home-${width}.png`), fullPage: true, animations: 'disabled' });
    }
    assert.deepEqual(errors, []);
    console.log(`Passed: desktop/mobile navigation, overflow, menu, FAQ and WhatsApp destination. Screenshots: ${output}`);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
