@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting Cassell College Night Watch Mail System...
echo.
npm start
