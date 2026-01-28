@echo off
REM Shree Ram Properties - Quick Start Script (Windows)
REM This script sets up and runs the development server

echo.
echo 🏠 Shree Ram Properties - Real Estate Platform
echo ================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo Please download Node.js from https://nodejs.org/
    echo Node 18+ is required.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm version:
npm --version
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

REM Build the project
echo 🔨 Building Next.js project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo.

REM Start the development server
echo 🚀 Starting development server...
echo 📍 Open http://localhost:3000 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
