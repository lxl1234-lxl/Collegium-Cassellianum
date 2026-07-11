from playwright.sync_api import sync_playwright
import os

html_path = os.path.abspath('卡塞尔学院守夜人社区.html')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop screenshot
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(f"file:///{html_path}")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(800)
    page.screenshot(path="screenshot-desktop.png", full_page=False)

    # Verify SSS0024076 exists
    content = page.content()
    assert "SSS0024076" in content, "Missing new serial number"

    # Verify contact previews
    for preview in ["师兄救我", "刀已磨好", "加图索家族", "版主发布", "小弟，学姐", "年轻人，来杯啤酒", "检测到龙族"]:
        assert preview in content, f"Missing preview: {preview}"

    # Click through contacts and verify mail content changes
    contact_checks = [
        ("Ricardo", "师兄，救命啊"),
        ("村雨", "明日0600"),
        ("狄克推多", "凯撒·加图索"),
        ("炎之龙斩者", "版主我又来啦"),
        ("NoNo", "陪学姐去挑辆新车"),
        ("守夜人", "晚上来我阁楼一趟"),
        ("Eva", "很遗憾通知你"),
    ]

    for name, expected_text in contact_checks:
        page.click(f"button:has-text('{name}')")
        page.wait_for_timeout(300)
        body = page.locator("article").inner_text()
        assert expected_text in body, f"Contact {name} did not show expected text: {expected_text}"

    page.screenshot(path="screenshot-desktop-ricardo.png", full_page=False)

    # Test star functionality on Eva's mail
    page.click("button[aria-label='标记为重要']")
    page.wait_for_timeout(300)
    page.click("button:has-text('重要邮件')")
    page.wait_for_timeout(300)
    contact_list_text = page.locator("aside.hidden.lg\\:flex:has(.font-serif-cn:has-text('重要联系人'))").inner_text()
    assert "Eva" in contact_list_text, "Starred Eva should appear in important folder"
    page.screenshot(path="screenshot-desktop-important.png", full_page=False)

    # Switch back to inbox
    page.click("button:has-text('收件箱')")
    page.wait_for_timeout(300)

    # Test reply composer
    page.click("button[aria-label='回复']")
    page.wait_for_timeout(300)
    page.fill("textarea[placeholder='输入你的回复……']", "收到，立刻出发。")
    page.wait_for_timeout(300)
    page.screenshot(path="screenshot-desktop-reply.png", full_page=False)
    page.click("button:has-text('取消')")

    # Test delete modal
    page.click("button[aria-label='删除']")
    page.wait_for_selector("div:has-text('一切情报痕迹不得清除')")
    modal_text = page.locator("div:has-text('一切情报痕迹不得清除')").first.inner_text()
    assert "学院指令" in modal_text, "Delete modal missing title"
    assert "一切情报痕迹不得清除，仅可存档" in modal_text, "Delete modal missing warning text"
    page.screenshot(path="screenshot-desktop-delete-modal.png", full_page=False)
    page.click("button:has-text('我知道了')")
    page.wait_for_timeout(300)

    # Mobile screenshot
    page2 = browser.new_page(viewport={"width": 375, "height": 812})
    page2.goto(f"file:///{html_path}")
    page2.wait_for_load_state("networkidle")
    page2.wait_for_timeout(800)
    page2.screenshot(path="screenshot-mobile.png", full_page=False)

    # Mobile: open drawer and click a contact inside drawer
    page2.click("button[aria-label='打开菜单']")
    page2.wait_for_selector("aside[aria-label='侧边菜单']")
    page2.click("aside[aria-label='侧边菜单'] button:has-text('Ricardo')")
    page2.wait_for_timeout(300)
    body2 = page2.locator("article").inner_text()
    assert "师兄，救命啊" in body2, "Mobile contact switch failed"
    page2.screenshot(path="screenshot-mobile-ricardo.png", full_page=False)

    print("All checks passed!")
    browser.close()
