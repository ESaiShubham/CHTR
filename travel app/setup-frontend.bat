@echo off
echo ========================================
echo Chhattisgarh Travel Explorer - Frontend Only
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Run the installer
    echo 4. Restart your computer
    echo 5. Run this script again
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
node --version
echo.

echo ========================================
echo Installing Frontend Dependencies
echo ========================================
cd frontend
echo Installing essential frontend packages...
npm install
if %errorlevel% neq 0 (
    echo Error installing frontend dependencies!
    pause
    exit /b 1
)
echo Frontend dependencies installed successfully!
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo cd frontend
echo npm start
echo.
echo OR double-click start-frontend.bat
echo.
echo The app will be available at:
echo - Frontend: http://localhost:3000
echo.
echo This is a frontend-only version with:
echo - No backend server required
echo - No database setup needed
echo - Static data included
echo - All features working locally
echo.
pause 