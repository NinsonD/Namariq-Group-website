#!/bin/bash
# Fix script for aPanel npm cache and build issues
# Run this when you get "root-owned files" error or build missing error

set -e

echo "=========================================="
echo "Namariq Group - aPanel npm Cache Fix"
echo "=========================================="
echo ""

# Get the application directory
APP_DIR="${1:-.}"

echo "[1/4] Fixing npm cache permissions..."
echo "Running: sudo chown -R 1001:1001 /www/server/nodejs/cache"

# Fix the npm cache folder (aPanel specific path)
sudo chown -R 1001:1001 /www/server/nodejs/cache 2>/dev/null || {
    echo "Note: Could not fix system cache (may require sudo)"
    echo "Continuing with local fixes..."
}

echo "✓ npm cache permissions fixed"
echo ""

cd "$APP_DIR"

echo "[2/4] Clearing npm cache..."
npm cache clean --force 2>/dev/null || true
echo "✓ npm cache cleared"
echo ""

echo "[3/4] Building Next.js application..."
echo "This may take 2-5 minutes..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build completed successfully"
else
    echo "✗ Build failed"
    exit 1
fi

echo ""
echo "[4/4] Verifying build..."
if [ -d ".next" ]; then
    echo "✓ Build verified - .next folder exists"
    echo ""
    echo "=========================================="
    echo "Fix Complete!"
    echo "=========================================="
    echo ""
    echo "You can now start the application:"
    echo "  npm start"
    echo ""
    echo "Or restart via aPanel UI"
else
    echo "✗ Build verification failed"
    exit 1
fi
