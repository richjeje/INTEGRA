"""Browser checks for the built Astro site. Start npm run preview -- --port 4322."""
from pathlib import Path
import json,sys
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/browser-tools'))
from playwright.sync_api import sync_playwright
OUT=ROOT/'tmp/astro-qa'
OUT.mkdir(exist_ok=True)
BASE='http://127.0.0.1:4322'
report={}
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=str(Path.home()/'AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe'),headless=True)
 page=browser.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1)
 errors=[]
 page.on('pageerror',lambda e: errors.append(str(e)))
 page.goto(BASE,wait_until='networkidle')
 assert page.locator('h1').count()==1
 assert page.locator('a[href*="wa.me"]').count()==1
 assert not any(arrow in page.locator('body').inner_text() for arrow in ['↗','→','←','↑','↓'])
 # All photography must decode, including offscreen and initially hidden tab assets.
 page.locator('img').evaluate_all("els=>els.forEach(i=>i.loading='eager')")
 page.wait_for_function('Array.from(document.images).every(i=>i.complete)')
 assert page.locator('img').evaluate_all('els=>els.every(i=>i.naturalWidth>0)')
 page.evaluate('Promise.all(Array.from(document.images).map(i=>i.decode()))')
 page.evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))')
 for process, expected in [('laser','1520 × 3050 mm'),('doblado','2500 kN'),('rolado','Hidráulico'),('soldadura','Ensamble')]:
  page.locator(f'#tab-{process}').click()
  panel=page.locator(f'#panel-{process}')
  assert panel.is_visible()
  assert expected in panel.inner_text()
  assert page.locator('[role="tabpanel"]:visible').count()==1
  panel.locator('summary').click()
  assert panel.locator('details').get_attribute('open') is not None
  panel.locator('summary').click()
 page.locator('#tab-laser').focus()
 page.keyboard.press('ArrowRight')
 assert page.locator('#tab-doblado').get_attribute('aria-selected')=='true'
 page.keyboard.press('Home')
 assert page.locator('#tab-laser').get_attribute('aria-selected')=='true'
 for category, count in [('altura',1),('carga',1),('energia',1),('herramientas',1),('todos',4)]:
  page.locator(f'[data-filter="{category}"]').click()
  assert page.locator('.equipment-card:visible').count()==count
  assert str(count) in page.locator('#equipment-count').inner_text()
 card=page.locator('.equipment-card').first
 card.locator('summary').click()
 assert '227 kg' in card.inner_text()
 card.locator('[data-contact]').click()
 assert 'Z-34%2F22' in page.locator('#whatsapp').get_attribute('href')
 assert page.locator('#whatsapp').evaluate('el=>el===document.activeElement')
 assert page.locator('#contact-context').inner_text().strip()
 card.locator('summary').click()
 page.emulate_media(reduced_motion='reduce')
 assert page.evaluate('getComputedStyle(document.documentElement).scrollBehavior')=='auto'
 page.wait_for_function("!document.querySelector('.reveal-pending')")
 for width in [1920,1440,1024,768,600,390,320]:
  page.set_viewport_size({'width':width,'height':1000 if width>600 else 844})
  page.evaluate('scrollTo(0,0)')
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),f'overflow at {width}'
  if width==1440:
   page.screenshot(path=str(OUT/'desktop.png'))
   page.screenshot(path=str(OUT/'full.png'),full_page=True)
   page.locator('#met').screenshot(path=str(OUT/'met.png'))
   page.locator('#rent').screenshot(path=str(OUT/'rent.png'))
  if width==390:
   page.locator('.menu-toggle').click()
   assert page.locator('#main-nav').is_visible()
   page.keyboard.press('Escape')
   assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
   assert page.locator('.menu-toggle').evaluate('el=>el===document.activeElement')
   page.locator('.menu-toggle').click()
   page.locator('#main-nav a[href="#met"]').click()
   assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
   page.evaluate('scrollTo(0,0)')
   page.screenshot(path=str(OUT/'mobile.png'))
   page.screenshot(path=str(OUT/'mobile-full.png'),full_page=True)
 assert not errors,errors
 # Server-rendered content must remain available with JavaScript disabled.
 nojs=browser.new_page(java_script_enabled=False,viewport={'width':390,'height':844})
 nojs.goto(BASE,wait_until='networkidle')
 assert nojs.locator('.process-panel:visible').count()==4
 assert nojs.locator('.equipment-card').count()==4
 assert nojs.locator('#whatsapp').get_attribute('href').startswith('https://wa.me/524495411077')
 nojs.locator('#panel-laser summary').click()
 assert 'ASTM A36' in nojs.locator('#panel-laser details').inner_text()
 browser.close()
 report={'page':'Astro production preview','images':'all decoded','specifications':'4 processes and equipment details verified','navigation':'keyboard tabs, mobile menu and Escape passed','filters':'all categories passed','contact':'single WhatsApp link, context and focus passed','no_arrows':True,'widths':[1920,1440,1024,768,600,390,320],'horizontal_overflow':False,'reduced_motion':'passed','without_javascript':'content and contact available','javascript_errors':errors}
(OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))
