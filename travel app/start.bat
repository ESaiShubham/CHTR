@echo off
echo ========================================
echo   Starting Chhattisgarh Travel Explorer
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

echo Starting the development server...
cd frontend
npm start

if %errorlevel% neq 0 (
    echo ERROR: Failed to start the app!
    pause
    exit /b 1
) 