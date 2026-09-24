from pathlib import Path
import sys,json
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/browser-tools'))
from playwright.sync_api import sync_playwright
OUT=ROOT/'apps/landing/propuestas/previews';OUT.mkdir(exist_ok=True)
report=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=str(Path.home()/'AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe'),headless=True)
 for variant in ['editorial','precision','empresas']:
  page=browser.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1)
  errors=[]
  page.on('pageerror',lambda error: errors.append(str(error)))
  page.goto('http://127.0.0.1:8765/apps/landing/propuestas/'+variant+'.html',wait_until='networkidle')
  page.screenshot(path=str(OUT/f'{variant}-desktop.png'))
  # Force load lower-page images and capture the complete composition.
  page.locator('img').evaluate_all("els => els.forEach(e => e.loading='eager')")
  page.wait_for_function("Array.from(document.images).every(i=>i.complete)")
  page.evaluate("Promise.all(Array.from(document.images).map(i=>i.decode().catch(()=>{})))")
  page.evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))")
  page.screenshot(path=str(OUT/f'{variant}-full.png'),full_page=True)
  assert page.locator('h1').count()==1
  assert page.locator('img').evaluate_all('els => els.every(i => i.complete && i.naturalWidth > 0)')
  for process in ['doblado','rolado','soldadura','laser']:
   page.locator(f'[data-process="{process}"]').click()
   assert page.locator('#process-panel').get_attribute('aria-labelledby')=='tab-'+process
   page.locator('#process-panel details').evaluate('(el)=>el.open=true')
  for category in ['altura','carga','energia','herramientas','todos']:
   page.locator(f'[data-filter="{category}"]').click()
   count=page.locator('.equipment-card:visible').count()
   assert count==(4 if category=='todos' else 1)
  page.locator('[data-equipment="genie"]').click()
  assert page.locator('dialog').is_visible()
  assert '227 kg' in page.locator('#dialog-content').inner_text()
  page.locator('.dialog-contact').click()
  assert not page.locator('dialog').is_visible()
  assert 'Z-34%2F22' in page.locator('#whatsapp').get_attribute('href')
  assert page.locator('#whatsapp').get_attribute('href').startswith('https://wa.me/524495411077?text=')
  for width in [1440,1024,760,390,320]:
   page.set_viewport_size({'width':width,'height':844})
   page.evaluate('window.scrollTo(0,0)')
   overflow=page.evaluate('document.documentElement.scrollWidth > innerWidth')
   if overflow:
    print(page.evaluate("Array.from(document.querySelectorAll('body *')).filter(e=>e.getBoundingClientRect().right>innerWidth+1).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right,text:e.innerText?.slice(0,60)}))"))
   assert not overflow,f'Overflow {variant} {width}'
   if width==390:
    page.screenshot(path=str(OUT/f'{variant}-mobile-top.png'))
    page.screenshot(path=str(OUT/f'{variant}-mobile.png'),full_page=True)
    page.locator('.menu-toggle').click()
    assert page.locator('#main-nav').is_visible()
    page.locator('#main-nav a[href="#met"]').click()
    assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
  page.emulate_media(reduced_motion='reduce')
  assert page.evaluate("getComputedStyle(document.documentElement).scrollBehavior")=='auto'
  assert not errors,errors
  report.append({'variant':variant,'javascript_errors':errors,'viewports':[1440,1024,760,390,320],'images':'loaded','met_tabs':'passed','rent_filters':'passed','equipment_dialog':'passed','whatsapp':'correct number and equipment context','mobile_menu':'passed','horizontal_overflow':False,'reduced_motion':'passed'})
  page.close()
 page=browser.new_page(viewport={'width':1440,'height':1050})
 page.goto('http://127.0.0.1:8765/apps/landing/propuestas/index.html',wait_until='networkidle')
 assert page.locator('img').evaluate_all('els => els.every(i=>i.complete && i.naturalWidth>0)')
 page.screenshot(path=str(OUT/'comparador.png'),full_page=True)
 for width in [390,320]:
  page.set_viewport_size({'width':width,'height':844})
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 browser.close()
(ROOT/'tmp/qa-propuestas.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
