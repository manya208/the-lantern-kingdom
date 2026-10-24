@echo off
title The Lantern Kingdom - Manya K N Portfolio
echo ========================================================
echo       THE LANTERN KINGDOM - MANYA K N PORTFOLIO
echo ========================================================
echo.
echo Starting local web server...
echo.

set ELECTRON_RUN_AS_NODE=1
set NODE_EXE="C:\Users\ASUS\AppData\Local\Programs\antigravity\Antigravity.exe"
set RUN_NODE="C:\Users\ASUS\.gemini\antigravity\scratch\bin\run-node.cmd"

:: Open the browser after 1 second
start "" cmd /c "timeout /t 2 >nul & start http://127.0.0.1:3000"

:: Launch Node server
if exist %RUN_NODE% (
    call %RUN_NODE% serve.js
) else if exist %NODE_EXE% (
    %NODE_EXE% serve.js
) else (
    node serve.js
)

pause
