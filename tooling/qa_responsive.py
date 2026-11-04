"""Production regression checks. Requires Playwright and a preview on :4322.
Set PLAYWRIGHT_CHROMIUM_EXECUTABLE to use an existing Chromium installation.
"""
from pathlib import Path
import json, os, sys
from urllib.parse import urlsplit, unquote
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tmp/browser-tools'))
from playwright.sync_api import sync_playwright
OUT = ROOT / 'tmp/astro-qa'
OUT.mkdir(parents=True, exist_ok=True)
BASE = os.environ.get('QA_BASE_URL', 'http://127.0.0.1:4322')
ROUTES = ['/', '/integra/', '/met/', '/rent/']
SIZES = [(320,568),(390,844),(600,800),(768,1024),(900,700),(1024,768),(1440,900),(1920,1080),(844,390)]
with sync_playwright() as p:
    options = {'headless': True}
    if os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE'):
        options['executable_path'] = os.environ['PLAYWRIGHT_CHROMIUM_EXECUTABLE']
    browser = p.chromium.launch(**options)
    page = browser.new_page(reduced_motion='reduce')
    errors, failures, links, documents = [], [], [], {}
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('response', lambda r: failures.append(r.url) if r.status >= 400 else None)
    for route in ROUTES:
        for width,height in SIZES:
            page.set_viewport_size({'width':width,'height':height})
            assert page.goto(BASE+route, wait_until='networkidle').status == 200
            assert page.locator('h1').count() == 1
            assert page.locator('body.enhanced').count() == 1
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), (route,width)
            assert page.locator('.hero,.company-hero').evaluate('''hero=>{
                const bounds=hero.getBoundingClientRect();
                return [...hero.querySelectorAll('h1,.hero-description,.company-hero-description,.hero-actions,.unit-index')].every(e=>{
                    const r=e.getBoundingClientRect();return r.bottom<=bounds.bottom+1&&r.top>=bounds.top;
                });
            }'''), ('hero clipping',route,width,height)
            if route == '/':
                assert page.evaluate("document.querySelector('.hero-actions').getBoundingClientRect().bottom<=document.querySelector('.unit-index').getBoundingClientRect().top"), ('hero overlap',width)
            if width in (390,1440):
                page.screenshot(path=str(OUT/f'{route.strip("/") or "home"}-{width}.png'))
            if width == 390:
                page.locator('.menu-toggle').click()
                assert page.locator('#main-nav').is_visible()
                page.keyboard.press('Escape')
                assert page.locator('.menu-toggle').get_attribute('aria-expanded') == 'false'
                assert page.locator('.menu-toggle').evaluate('e=>e===document.activeElement')
                page.locator('.menu-toggle').click()
                page.locator('#main-nav a').first.click()
                assert page.locator('h1').is_visible()
                page.goto(BASE+route)
        page.locator('img').evaluate_all("els=>els.forEach(i=>i.loading='eager')")
        page.wait_for_function('Array.from(document.images).every(i=>i.complete)')
        assert page.locator('img').evaluate_all('els=>els.every(i=>i.naturalWidth>0)'), ('images',route)
        documents[route] = page.locator('[id]').evaluate_all('els=>els.map(e=>e.id)')
        links.extend(page.locator('a[href]').evaluate_all('els=>els.map(e=>e.href)'))
        assert not page.locator('.reveal-pending').count()
    for href in links:
        if href.startswith(BASE):
            url=urlsplit(href)
            assert url.path in documents, ('route',href)
            assert not url.fragment or unquote(url.fragment) in documents[url.path], ('anchor',href)
    page.goto(BASE+'/rent/')
    for category,count in [('altura',3),('carga',3),('energia',5),('herramientas',1),('obra',1),('transporte',1),('todos',14)]:
        page.locator(f'[data-filter="{category}"]').click()
        assert page.locator('.equipment-card:visible').count() == count, category
        assert page.locator(f'[data-filter="{category}"]').get_attribute('aria-pressed') == 'true'
    page.locator('.equipment-card').first.focus()
    assert 'Zoomlion' in unquote(page.locator('.equipment-inquiry').first.get_attribute('href'))
    for card in page.locator('.equipment-card').all():
        card.locator('summary').click()
        assert card.locator('details').get_attribute('open') is not None
        message = unquote(card.locator('.equipment-inquiry').get_attribute('href'))
        assert card.locator('h3').inner_text() in message and 'Fechas:' in message
        required = ['Origen:', 'Destino:', 'Peso y dimensiones:'] if card.get_attribute('data-category') == 'transporte' else ['Ubicación:', 'Duración']
        assert all(field in message for field in required)
    page.goto(BASE+'/integra/')
    tabs=page.locator('[data-journey-step]')
    tabs.first.focus()
    page.keyboard.press('ArrowRight')
    assert tabs.nth(1).get_attribute('aria-selected') == 'true'
    page.wait_for_timeout(2200)
    assert tabs.nth(1).get_attribute('aria-selected') == 'true'
    page.keyboard.press('End')
    assert tabs.last.get_attribute('aria-selected') == 'true'
    page.locator('a[data-contact]').first.click()
    assert page.locator('#contact-context').inner_text().strip()
    assert page.url.endswith('#brief-integra')
    assert 'ingenier' in unquote(page.locator('#whatsapp').get_attribute('href'))
    touch=browser.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
    touch.goto(BASE+'/rent/')
    card=touch.locator('.equipment-card').first
    card.scroll_into_view_if_needed()
    card.locator('img').evaluate('image=>image.decode()')
    assert card.locator('.equipment-reveal').evaluate("e=>getComputedStyle(e).position==='relative'")
    assert card.locator('.equipment-photo').bounding_box()['height']>0
    card.screenshot(path=str(OUT/'rent-touch-card.png'))
    nojs=browser.new_page(java_script_enabled=False,viewport={'width':320,'height':568})
    for route in ROUTES:
        nojs.goto(BASE+route)
        assert nojs.locator('h1').is_visible()
        assert nojs.locator('#main-nav').is_visible()
        assert nojs.evaluate('document.documentElement.scrollWidth<=innerWidth'), ('nojs',route)
        assert nojs.locator('#whatsapp').get_attribute('href').startswith('https://wa.me/524495411077')
    assert nojs.locator('.equipment-card').count()==14
    assert nojs.locator('.equipment-inquiry:visible').count()==14
    assert not errors, errors
    assert not failures, failures
    browser.close()
report={'routes':ROUTES,'viewports':SIZES,'checks':'HTML, hero bounds, overflow, images, links, mobile menu, filters, keyboard, contact, touch, reduced motion, no JavaScript','javascript_errors':errors,'http_errors':failures}
(OUT/'responsive-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
