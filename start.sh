#!/bin/bash

# Shree Ram Properties - Quick Start Script
# This script sets up and runs the development server

echo "🏠 Shree Ram Properties - Real Estate Platform"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please download Node.js from https://nodejs.org/"
    echo "Node 18+ is required."
    exit 1
fi

echo "✅ Node.js version:"
node --version
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version:"
npm --version
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build the project
echo "🔨 Building Next.js project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo ""

# Start the development server
echo "🚀 Starting development server..."
echo "📍 Open http://localhost:3000 in your browser"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
