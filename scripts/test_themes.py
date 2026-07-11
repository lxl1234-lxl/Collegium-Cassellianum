from playwright.sync_api import sync_playwright
import os

html_path = os.path.abspath('卡塞尔学院守夜人社区.html')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop academy theme
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(f"file:///{html_path}")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(800)
    page.screenshot(path="screenshot-theme-academy.png", full_page=False)

    # Click theme toggle to switch to combat
    page.click("button[aria-label='切换至作战主题']")
    page.wait_for_timeout(600)
    page.screenshot(path="screenshot-theme-combat.png", full_page=False)

    # Mobile combat
    page2 = browser.new_page(viewport={"width": 375, "height": 812})
    page2.goto(f"file:///{html_path}")
    page2.wait_for_load_state("networkidle")
    page2.wait_for_timeout(800)
    page2.click("button[aria-label='切换至作战主题']")
    page2.wait_for_timeout(600)
    page2.screenshot(path="screenshot-mobile-combat.png", full_page=False)

    print("Theme screenshots captured!")
    browser.close()
