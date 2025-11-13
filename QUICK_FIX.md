# Quick Fix - Copy & Paste Commands

Run these commands in order to fix the npm cache and build errors on aPanel:

## For your domain: alnamariqgroup.com

```bash
# 1. Navigate to your project
cd /www/wwwroot/alnamariqgroup.com/Namariq-Group-website-master/

# 2. Fix npm cache permissions (this is critical!)
sudo chown -R 1001:1001 /www/server/nodejs/cache

# 3. Clear npm cache
npm cache clean --force

# 4. Remove corrupted files
rm -rf node_modules/ package-lock.json .next/

# 5. Install dependencies (with aPanel compatibility flag)
npm install --production --legacy-peer-deps

# 6. Build the application (THIS IS IMPORTANT!)
npm run build

# 7. Check build was created
ls -la .next/

# 8. Start the application
npm start
```

## If npm start works, you're done!

Your application should now be running. You can:

1. **Stop the server**: Press `Ctrl+C`
2. **Start via aPanel**: Go to your app settings and click "Start" 
3. **Test your website**: Visit https://alnamariqgroup.com/health

## If you still get errors:

### Error: "sudo: command not found"
Try without sudo (aPanel user might have permissions):
```bash
chown -R 1001:1001 /www/server/nodejs/cache
```

### Error: "Permission denied"
Your user might not have access. Contact aPanel support or try:
```bash
npm cache clean --force
npm install --production --legacy-peer-deps
npm run build
```

### Error: Build still fails
Check for specific errors and run with verbose output:
```bash
npm run build --verbose
```

## Summary of what's happening:

1. ✓ Fixes npm cache permissions (allows npm to work)
2. ✓ Cleans cache (removes corrupted data)
3. ✓ Removes old modules (fresh start)
4. ✓ Installs 30+ dependencies (downloads packages)
5. ✓ Builds Next.js app (creates .next/ folder)
6. ✓ Starts the server (listens on port 3000)

**Total time**: 3-5 minutes on first run
