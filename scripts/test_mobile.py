from playwright.sync_api import sync_playwright
import os

html_path = os.path.abspath('卡塞尔学院守夜人社区.html')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 375, "height": 812})
    page.goto(f"file:///{html_path}")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)

    # Check for console errors
    errors = []
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

    page.screenshot(path="screenshot-mobile-test.png", full_page=False)

    # Check if root div has content
    content = page.locator("#root").inner_html()
    has_content = len(content) > 100

    print(f"Root has content: {has_content}")
    print(f"Root content length: {len(content)}")
    print(f"Title: {page.title()}")
    print("Screenshot saved")

    browser.close()