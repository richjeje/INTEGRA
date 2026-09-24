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
    const url = pathToFileURL(path.resolve(__dirname, '../../apps/landing/v2.html')).href;
    const output = await fs.mkdtemp(path.join(os.tmpdir(), 'integra-v2-'));
    const routes = ['inicio', 'integra', 'integra/transportadores', 'integra/automatizacion', 'integra/ingenieria', 'integra/retrofit', 'met', 'met/corte-laser', 'met/doblado', 'met/rolado', 'met/soldadura', 'rent', 'rent/montacargas', 'rent/plataformas', 'rent/gruas', 'rent/energia', 'proyecto'];
    for (const width of [1440, 1024, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        await page.goto(`${url}#${route}`);
        assert.equal(await page.locator('h1').count(), 1);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Overflow: ${width}, ${route}`);
        assert.equal(await page.locator('#whatsapp').count(), 1);
        if ([1440, 390].includes(width) && ['inicio', 'integra', 'met', 'rent'].includes(route)) {
          await page.screenshot({ path: path.join(output, `${route}-${width}.png`), fullPage: true });
        }
      }
      await page.goto(url);
      const threeEntries = await page.locator('.division h2').evaluateAll(nodes => nodes.map(n => n.getBoundingClientRect().bottom));
      assert.ok(threeEntries.every(bottom => bottom < 822), `Company entry below initial viewport: ${width}`);
      await page.getByRole('link', { name: 'Explorar Integra MET', exact: true }).click();
      await page.getByRole('navigation', { name: 'Procesos de metal' }).getByRole('link', { name: /Doblado/ }).click();
      assert.equal(await page.locator('.process-top h2').innerText(), 'Doblado');
      await page.evaluate(() => { window.open = (...args) => { window.testOpened = args; }; });
      await page.locator('#whatsapp').click();
      const opened = await page.evaluate(() => window.testOpened);
      const destination = new URL(opened[0]);
      assert.equal(destination.pathname, '/524495411077');
      assert.equal(destination.hostname, 'wa.me');
      assert.match(destination.searchParams.get('text'), /Integra MET: Doblado/);
      assert.equal(opened[2], 'noopener,noreferrer');
      await page.getByRole('navigation', { name: 'Empresas' }).getByRole('link', { name: /RENT/ }).click();
      await page.getByRole('button', { name: 'Trabajar en altura' }).click();
      assert.equal(await page.locator('.equipment').count(), 1);
      await page.getByRole('link', { name: 'Explorar equipo', exact: true }).click();
      assert.equal(await page.locator('h1').innerText(), 'Plataformas de elevación');
      await page.getByRole('link', { name: 'Volver al catálogo' }).click();
      assert.equal(await page.getByRole('button', { name: 'Trabajar en altura' }).getAttribute('aria-pressed'), 'true');
      await page.goto(`${url}#integra`);
      await page.getByRole('tab', { name: /Fabricación/ }).click();
      assert.match(await page.getByRole('tabpanel').innerText(), /Cada componente/);
      await page.keyboard.press('ArrowRight');
      assert.equal(await page.getByRole('tab', { name: /Operación/ }).getAttribute('aria-selected'), 'true');
      await page.goto(`${url}#rent`);
      await page.getByRole('button', { name: 'Todos', exact: true }).click();
    }
    assert.deepEqual(errors, []);
    console.log(`PASS: 17 routes, 4 widths, first-viewport company entries, metal navigation, catalogue filters, retained filter, keyboard tabs and WhatsApp. Screenshots: ${output}`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
