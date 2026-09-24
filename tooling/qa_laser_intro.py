"""Regression checks for the optional laser intro on the production preview."""
from pathlib import Path
import os, sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/browser-tools'))
from playwright.sync_api import sync_playwright
OUT=ROOT/'tmp/laser-intro-qa'
OUT.mkdir(parents=True,exist_ok=True)
BASE=os.environ.get('QA_BASE_URL','http://127.0.0.1:4322')
with sync_playwright() as p:
    options={'headless':True}
    if os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE'):
        options['executable_path']=os.environ['PLAYWRIGHT_CHROMIUM_EXECUTABLE']
    browser=p.chromium.launch(**options)
    page=browser.new_page(viewport={'width':1440,'height':900})
    errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto(BASE+'/?intro=1')
    assert page.locator('#laser-intro').is_visible()
    page.wait_for_timeout(1800)
    assert page.locator('.is-cut').count()>0
    page.screenshot(path=str(OUT/'desktop-cut.png'))
    page.wait_for_timeout(1650)
    page.screenshot(path=str(OUT/'desktop-finished.png'))
    page.wait_for_function("!document.documentElement.hasAttribute('data-laser-intro')")
    assert not page.locator('[inert]').count()
    page.evaluate("sessionStorage.setItem('integra-intro-seen','1')")
    page.goto(BASE)
    assert page.locator('#laser-intro').is_visible()
    page.reload()
    assert page.locator('#laser-intro').is_visible()
    page.wait_for_timeout(700)
    assert page.locator('.is-cut').count()>0
    page.goto(BASE+'/?intro=1')
    page.locator('[data-intro-skip]').click()
    page.wait_for_function("!document.documentElement.hasAttribute('data-laser-intro')")
    assert not page.locator('[inert]').count()
    for width,height in [(320,568),(390,844),(844,390)]:
        page.set_viewport_size({'width':width,'height':height})
        page.goto(BASE+'/?intro=1')
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        page.wait_for_timeout(2800)
        page.screenshot(path=str(OUT/f'intro-{width}.png'))
        page.keyboard.press('Escape')
        page.wait_for_function("!document.documentElement.hasAttribute('data-laser-intro')")
    page.emulate_media(reduced_motion='reduce')
    page.goto(BASE)
    assert not page.locator('#laser-intro').is_visible()
    page.get_by_role('link',name='Ver intro',exact=True).click()
    assert page.locator('#laser-intro').is_visible()
    page.wait_for_timeout(1000)
    assert page.locator('.is-cut').count()>0
    page.reload()
    assert page.locator('#laser-intro').is_visible()
    page.locator('[data-intro-skip]').click()
    page.wait_for_function("!document.documentElement.hasAttribute('data-laser-intro')")
    nojs=browser.new_page(java_script_enabled=False)
    nojs.goto(BASE)
    assert not nojs.locator('#laser-intro').is_visible()
    assert nojs.locator('h1').is_visible()
    # A failed animation bundle must never leave the page covered.
    failed=browser.new_page()
    failed.route('**/_astro/*.js',lambda route:route.abort())
    failed.goto(BASE+'/?intro=1')
    failed.wait_for_function("!document.documentElement.hasAttribute('data-laser-intro')",timeout=8000)
    assert not failed.locator('[inert]').count()
    assert not errors,errors
    browser.close()
print('PASS: logo tracing, completion, repeat visits and reload with old session flag, skip, Escape, responsive, reduced motion, no JS, failed bundle fallback; no JavaScript errors.')
