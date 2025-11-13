# aPanel One-Key Install Troubleshooting

## Common Issues & Solutions

### Issue 1: npm Cache Permission Error

**Error Message**:
```
npm ERR! Your cache folder contains root-owned files
npm ERR! sudo chown -R 1001:1001 "/www/server/nodejs/cache"
```

**Cause**: npm cache has permission issues due to previous npm version

**Quick Fix**:
```bash
sudo chown -R 1001:1001 /www/server/nodejs/cache
npm cache clean --force
```

**Or use the fix script**:
```bash
chmod +x fix-npm-cache.sh
./fix-npm-cache.sh
```

---

### Issue 2: Build Not Found Error

**Error Message**:
```
Error: Could not find a production build in the '.next' directory.
Try building your app with 'next build' before starting the production server.
```

**Cause**: Application was not built before starting

**Quick Fix**:
```bash
npm run build
npm start
```

---

### Issue 3: No Packages Installed

**Problem Description**:
After clicking "One-Key Install" in aPanel, you see:
- ✓ "The dependency package is installed successfully!"
- BUT: `node_modules/` folder is empty or doesn't exist
- `.next/` build folder is also missing
- Application won't start

**Cause**: This is a known aPanel issue where it only checks for `package.json` but doesn't actually run `npm install`.

## Complete Fix Process for aPanel

If you're getting the npm cache error AND build missing error, follow this EXACT process:

### Step 1: Fix npm Cache Permissions

```bash
cd /www/wwwroot/alnamariqgroup.com/Namariq-Group-website-master/

# Fix npm cache permissions
sudo chown -R 1001:1001 /www/server/nodejs/cache

# Clear npm cache
npm cache clean --force
```

### Step 2: Install Dependencies (Fresh)

```bash
# Delete existing node_modules if corrupted
rm -rf node_modules/ package-lock.json

# Install with legacy peer deps (aPanel required)
npm install --production --legacy-peer-deps
```

### Step 3: Build the Application

```bash
# Build Next.js
npm run build

# Verify build was created
ls -la .next/
```

### Step 4: Restart the Application

```bash
# Option A: Via SSH/Terminal
npm start

# Option B: Via aPanel UI
# - Go to your app in aPanel
# - Click Restart or Stop, then Start
```

### Step 5: Test

```bash
# Test if running
curl http://localhost:3000/health
# Should return: ok

# Or test via browser
# https://your-domain.com/health
```

---

## Solution: Manual Installation Methods

### Method 1: Use Post-Install Script (Recommended)

aPanel has created the app but not installed dependencies. You need to run the post-install script:

#### Via SSH Terminal
```bash
cd /home/username/domains/your-domain.com/

# Make the script executable
chmod +x post-install.sh

# Run the post-install script
./post-install.sh
```

Or with full output:
```bash
bash -x post-install.sh
```

#### Via aPanel Terminal (if available)
1. Open aPanel Terminal/Console
2. Navigate to your domain directory
3. Paste and run:
```bash
chmod +x post-install.sh && ./post-install.sh
```

### Method 2: Manual npm Install Command

If the post-install script doesn't work, manually run the commands:

```bash
cd /home/username/domains/your-domain.com/

# Step 1: Check npm is available
npm --version
node --version

# Step 2: Clean npm cache
npm cache clean --force

# Step 3: Install dependencies (with aPanel compatibility)
npm install --production --legacy-peer-deps

# Step 4: Build the application
npm run build

# Step 5: Verify installation
ls -la node_modules/ | head -20
ls -la .next/
```

### Method 3: Using aPanel's Built-in Terminal

1. Log into aPanel
2. Click **Terminal** or **Console**
3. Navigate to your application directory:
   ```bash
   cd /home/username/domains/your-domain.com/
   ```
4. Run the commands from Method 2 above

### Method 4: Install Custom Command in aPanel

If aPanel has a **Custom Install Command** field:

1. Go to your app settings in aPanel
2. Look for **Install Command** or **Custom Command** field
3. Add this command:
   ```bash
   npm install --production --legacy-peer-deps && npm run build
   ```
4. Save and click **Install** again

## Verification Checklist

After running any of the above methods, verify the installation:

```bash
# Check 1: Verify node_modules exists
ls -la node_modules/ | head -5
# Should show: @hookform, @radix-ui, embla-carousel-react, etc.

# Check 2: Verify .next build folder exists
ls -la .next/
# Should show: server, static, standalone, etc.

# Check 3: Check for errors in package-lock.json
wc -l package-lock.json
# Should be > 5000 lines

# Check 4: Count installed packages
ls node_modules/ | wc -l
# Should be > 200 folders

# Check 5: Verify key packages
ls node_modules/ | grep -E "^next|^react|^@radix-ui"
# Should show installed packages
```

## Common Errors & Fixes

### Error: "Command not found: npm"
```bash
# Check if npm is installed
which npm

# If not found, install Node.js via aPanel first
# Then try again
```

### Error: "Permission denied"
```bash
# Fix permissions
chmod 755 /home/username/domains/your-domain.com/
chmod 755 /home/username/domains/your-domain.com/post-install.sh
```

### Error: "package-lock.json not found"
```bash
# If package-lock.json is missing, delete node_modules and reinstall
rm -rf node_modules/
npm install --production --legacy-peer-deps
```

### Error: "Peer dependency warnings"
```bash
# These are normal - they're handled by --legacy-peer-deps flag
# If build still works, you can ignore these warnings
```

### Error: "Build failed - TypeScript error"
```bash
# This usually means not all packages installed correctly
# Try full clean reinstall:
rm -rf node_modules/ package-lock.json
npm install --production --legacy-peer-deps
npm run build
```

## After Installation - Start Application

Once all packages are installed and build completes:

### Via aPanel UI
1. Go back to your app in aPanel
2. Click **Start** or **Run** button
3. Wait for status to show "Running"

### Via SSH/Terminal
```bash
npm start
# or
node server.js
```

## Test the Installation

After starting, verify the application works:

```bash
# Test if server is running
curl http://localhost:3000/health
# Should return: ok

# Test full site
curl -I https://your-domain.com/health
```

## Troubleshooting Installation Failures

### If npm install still fails:

1. **Check npm version**:
   ```bash
   npm --version
   # Should be 9.0.0 or higher
   ```

2. **Update npm if needed**:
   ```bash
   npm install -g npm@latest
   ```

3. **Try installing with verbose output**:
   ```bash
   npm install --production --legacy-peer-deps --verbose 2>&1 | tee install.log
   ```

4. **Check disk space**:
   ```bash
   df -h
   # Should have at least 500MB free space
   ```

5. **Check network connectivity**:
   ```bash
   ping registry.npmjs.org
   ```

### If build fails after npm install:

```bash
# Clear Next.js cache and rebuild
rm -rf .next/
npm run build --verbose

# Or rebuild from scratch
rm -rf node_modules/ .next/ package-lock.json
npm install --production --legacy-peer-deps
npm run build
```

## Alternative: Use aPanel's Built-in Package Manager

Some aPanel versions have a **Dependency Manager** UI:

1. Go to App Settings
2. Click **Dependency Manager** or **Modules**
3. Search for and install packages from the list in `DEPENDENCIES.txt`
4. Install in the order specified

## Pre-Installation Checklist

Before running installation, verify:

- [ ] All project files uploaded (except `node_modules/`, `.git/`, `.next/`)
- [ ] `package.json` file is present
- [ ] `server.js` file is present
- [ ] `.npmrc` file is present
- [ ] Node.js 18.17.0+ available in aPanel
- [ ] At least 500MB free disk space
- [ ] Internet connection stable on server

## Getting Help

If you're still having issues:

1. **Check aPanel logs**:
   ```bash
   tail -f /var/log/aPanel.log  # or similar path
   ```

2. **Check application logs**:
   ```bash
   npm start 2>&1 | tee app.log
   ```

3. **Review error messages**:
   - Save complete error output: `npm install 2>&1 | tee error.log`
   - Share error.log with support

4. **Contact aPanel Support**:
   - Include Node.js version
   - Include npm version
   - Include complete error messages
   - Include your domain name

## Quick Reference Commands

```bash
# Enter project directory
cd /home/username/domains/your-domain.com/

# Full fresh installation
rm -rf node_modules/ .next/ package-lock.json
npm cache clean --force
npm install --production --legacy-peer-deps
npm run build

# Verify installation
ls node_modules/ | wc -l
ls .next/ | head -10

# Start application
npm start

# Check if running
curl http://localhost:3000/health
```

## Files You Need

Make sure these files are present:
- ✓ `package.json` - dependency list
- ✓ `package-lock.json` - locked versions
- ✓ `.npmrc` - npm configuration
- ✓ `server.js` - Node.js entry point
- ✓ `next.config.js` - Next.js config
- ✓ `post-install.sh` - post-install script
- ✓ All app files (but NOT `node_modules/`, `.next/`, `.git/`)

## Success Indicators

After successful installation:
- ✓ `node_modules/` folder contains 200+ packages
- ✓ `.next/` folder exists with build artifacts
- ✓ `npm start` runs without errors
- ✓ `/health` endpoint returns "ok"
- ✓ Website loads at your domain
- ✓ No 502 Bad Gateway errors
