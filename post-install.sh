#!/bin/bash
# Post-install script for aPanel
# This script runs AFTER one-key install to ensure dependencies are properly installed
# Make sure this file is executable: chmod +x post-install.sh

set -e  # Exit on any error

echo "=========================================="
echo "Namariq Group Website - Post-Install Hook"
echo "=========================================="

# Get the application directory (usually passed as first argument)
APP_DIR="${1:-.}"

cd "$APP_DIR"

echo ""
echo "[1/5] Checking Node.js and npm..."
node --version
npm --version

echo ""
echo "[2/5] Cleaning npm cache..."
npm cache clean --force 2>/dev/null || true

echo ""
echo "[3/5] Installing production dependencies..."
npm install --production --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "✗ Failed to install dependencies"
    exit 1
fi

echo ""
echo "[4/5] Building Next.js application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build completed successfully"
else
    echo "✗ Build failed"
    exit 1
fi

echo ""
echo "[5/5] Verifying installation..."
if [ -d "node_modules" ] && [ -d ".next" ]; then
    echo "✓ Installation verified successfully"
    echo ""
    echo "=========================================="
    echo "Installation Complete!"
    echo "=========================================="
    echo "Node modules location: $APP_DIR/node_modules"
    echo "Build output location: $APP_DIR/.next"
    echo ""
    echo "To start the application, run:"
    echo "  npm start"
    echo ""
    echo "To test the installation:"
    echo "  curl http://localhost:3000/health"
    echo ""
else
    echo "✗ Verification failed - missing node_modules or .next"
    exit 1
fi
