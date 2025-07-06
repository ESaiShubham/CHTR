@echo off
echo ========================================
echo   Chhattisgarh Travel Explorer Setup
echo ========================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Choose the LTS version for best compatibility.
    echo.
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
)

echo Node.js is installed ✓
echo.

echo Checking if npm is available...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available!
    echo Please ensure Node.js is properly installed.
    pause
    exit /b 1
)

echo npm is available ✓
echo.

echo Installing dependencies...
cd frontend
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Setup Complete! ✓
echo ========================================
echo.
echo To start the app, run: start.bat
echo.
pause 