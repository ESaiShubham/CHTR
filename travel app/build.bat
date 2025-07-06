@echo off
echo ========================================
echo   Building for Production
echo ========================================
echo.

echo Checking if dependencies are installed...
if not exist "frontend\node_modules" (
    echo ERROR: Dependencies are not installed!
    echo Please run setup.bat first.
    pause
    exit /b 1
)

echo Dependencies found ✓
echo.

echo Building the production version...
cd frontend
npm run build

if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Build Complete! ✓
echo ========================================
echo.
echo Production files are in: frontend/build/
echo.
echo To test the production build locally:
echo 1. Install serve: npm install -g serve
echo 2. Run: serve -s build
echo 3. Open: http://localhost:3000
echo.
echo To deploy to Vercel:
echo 1. Push to GitHub: git add . && git commit -m "Ready for deployment" && git push
echo 2. Go to vercel.com and import your repository
echo.
pause 