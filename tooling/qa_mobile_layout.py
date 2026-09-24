"""Responsive layout regression checks against a running Astro preview."""
from pathlib import Path
import os, sys, json
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tmp/responsive-tools'))
from playwright.sync_api import sync_playwright
BASE = os.environ.get('QA_BASE_URL', 'http://127.0.0.1:4321')
OUT = ROOT / 'tmp/mobile-layout-qa'
OUT.mkdir(parents=True, exist_ok=True)
sizes = [(320,568),(390,844),(600,800),(768,1024),(1024,768),(844,390),(1280,800),(1440,900)]
with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge')
    page = browser.new_page(reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    for route in ['integra','met','rent']:
        for width,height in sizes:
            page.set_viewport_size({'width':width,'height':height})
            assert page.goto(f'{BASE}/{route}/').status == 200
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (route,width,'overflow')
            assert page.locator('.company-hero').evaluate('''hero => {
                const box = hero.getBoundingClientRect();
                return box.height >= innerHeight - 1 && [...hero.querySelectorAll('h1,.company-hero-description,.hero-actions')].every(e => {
                  const r=e.getBoundingClientRect();return r.top>=box.top && r.bottom<=box.bottom && r.left>=0 && r.right<=innerWidth;
                });
            }'''), (route,width,height,'hero bounds')
            if width<=1024:
                page.locator('.menu-toggle').click()
                assert page.locator('#main-nav').is_visible()
                bounds=page.locator('#main-nav').bounding_box()
                assert bounds['x']>0 and abs(bounds['height']-height)<2, (route,width,'drawer')
                assert page.locator('main').evaluate('e=>e.inert')
                page.locator('#main-nav a').last.focus()
                page.keyboard.press('Tab')
                assert page.locator('.menu-toggle').evaluate('e=>e===document.activeElement')
                page.keyboard.press('Escape')
                assert not page.locator('#main-nav').is_visible()
                assert not page.locator('main').evaluate('e=>e.inert')
                assert page.locator('.menu-toggle').evaluate('e=>e===document.activeElement')
                page.locator('.menu-toggle').click()
                page.mouse.click(2,height//2)
                assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
                page.locator('.menu-toggle').click()
                page.locator('#main-nav a').last.click()
                assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
                page.goto(f'{BASE}/{route}/')
            else:
                assert not page.locator('.menu-toggle').is_visible()
                assert page.locator('#main-nav').is_visible()
            if route=='rent':
                image=page.locator('.company-hero-media img')
                image.evaluate('e=>e.decode()')
                assert ('broderson' if width<=1024 else 'genie') in image.evaluate('e=>e.currentSrc')
                if width<=1024:
                    assert page.locator('.company-hero-media').bounding_box()['height']>=height-1
                    image_box=image.bounding_box()
                    hero_box=page.locator('.company-hero').bounding_box()
                    assert abs(image_box['y']-hero_box['y'])<1 and abs(image_box['height']-hero_box['height'])<1
            if route=='met':
                for grid in page.locator('.process-resource-grid').all():
                    assert grid.evaluate('''grid=>{
                      const cards=[...grid.children].map(e=>e.getBoundingClientRect());
                      const last=cards.filter(r=>Math.abs(r.top-cards.at(-1).top)<2);
                      const g=grid.getBoundingClientRect();
                      return Math.abs((last[0].left+last.at(-1).right)/2-(g.left+g.right)/2)<2;
                    }'''), (width,'last row center')
            if width in [390,768,1440]:
                page.screenshot(path=str(OUT/f'{route}-{width}.png'))
        page.locator('img').evaluate_all("els=>els.forEach(e=>e.loading='eager')")
        page.wait_for_function('Array.from(document.images).every(i=>i.complete)')
        assert page.locator('img').evaluate_all('els=>els.every(i=>i.naturalWidth>0)'), (route,'broken image')
        assert 'restaurad' not in page.locator('body').inner_text().lower()
    page.set_viewport_size({'width':390,'height':844})
    page.goto(BASE+'/met/')
    page.locator('.menu-toggle').click()
    page.screenshot(path=str(OUT/'menu-390.png'))
    page.set_viewport_size({'width':1440,'height':900})
    assert not page.locator('main').evaluate('e=>e.inert')
    assert 'menu-is-open' not in page.locator('body').get_attribute('class')
    nojs=browser.new_page(java_script_enabled=False,viewport={'width':320,'height':568})
    for route in ['integra','met','rent']:
        nojs.goto(f'{BASE}/{route}/')
        assert nojs.locator('#main-nav').is_visible()
        assert nojs.evaluate('document.documentElement.scrollWidth <= innerWidth')
    assert not errors, errors
    browser.close()
print(json.dumps({'pages':3,'viewports':sizes,'errors':errors,'result':'passed'}))
