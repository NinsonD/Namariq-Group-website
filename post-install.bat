@echo off
REM Post-install script for aPanel (Windows compatible)
REM This script runs AFTER one-key install to ensure dependencies are properly installed

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo Namariq Group Website - Post-Install Hook
echo ==========================================
echo.

REM Get the application directory (usually passed as first argument)
set APP_DIR=%1
if "%APP_DIR%"=="" set APP_DIR=.

cd /d "%APP_DIR%"

echo [1/5] Checking Node.js and npm...
call node --version
call npm --version

echo.
echo [2/5] Cleaning npm cache...
call npm cache clean --force 2>nul

echo.
echo [3/5] Installing production dependencies...
call npm install --production --legacy-peer-deps

if errorlevel 1 (
    echo X Failed to install dependencies
    exit /b 1
) else (
    echo [OK] Dependencies installed successfully
)

echo.
echo [4/5] Building Next.js application...
call npm run build

if errorlevel 1 (
    echo X Build failed
    exit /b 1
) else (
    echo [OK] Build completed successfully
)

echo.
echo [5/5] Verifying installation...
if exist "node_modules" (
    if exist ".next" (
        echo [OK] Installation verified successfully
        echo.
        echo ==========================================
        echo Installation Complete!
        echo ==========================================
        echo Node modules location: %CD%\node_modules
        echo Build output location: %CD%\.next
        echo.
        echo To start the application, run:
        echo   npm start
        echo.
    ) else (
        echo X Verification failed - missing .next folder
        exit /b 1
    )
) else (
    echo X Verification failed - missing node_modules
    exit /b 1
)

endlocal
