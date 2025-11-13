# TODO: Fix Next.js Build Error on aPanel Server

## Steps to Complete

- [ ] Navigate to project directory on aPanel server
- [ ] Fix npm cache permissions
- [ ] Clear npm cache and remove corrupted files
- [ ] Install dependencies
- [ ] Build the Next.js application
- [ ] Start the server
- [ ] Test the application

## Commands to Run on aPanel Server

Run these commands in your aPanel terminal (one by one):

```bash
# 1. Navigate to your project directory
cd /www/wwwroot/alnamariqgroup.com/Namariq-Group-website-master

# 2. Fix npm cache permissions (critical for aPanel)
sudo chown -R 1001:1001 /www/server/nodejs/cache

# 3. Clear npm cache
npm cache clean --force

# 4. Remove corrupted files
rm -rf node_modules/ package-lock.json .next/

# 5. Install dependencies with aPanel compatibility
npm install --production --legacy-peer-deps

# 6. Build the Next.js application
npm run build

# 7. Verify build was created
ls -la .next/

# 8. Start the application
npm start
```

## Testing

After starting, test with:
```bash
curl http://localhost:3000/health
```

Should return: "ok"

## Notes
- If sudo is not available, try without it: `chown -R 1001:1001 /www/server/nodejs/cache`
- The build process may take 2-5 minutes
- If you get permission errors, contact aPanel support
