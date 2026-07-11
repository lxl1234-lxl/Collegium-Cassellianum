@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Building standalone HTML...
echo.
call npm run build
if errorlevel 1 goto fail
echo.
echo Patching for mobile compatibility...
python scripts/patch_html.py
echo.
echo Done!
echo File: 卡塞尔学院守夜人社区.html
echo Transfer to phone and open with browser.
pause
exit /b 0

:fail
echo Build failed!
pause
exit /b 1