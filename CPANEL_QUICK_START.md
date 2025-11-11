# cPanel Quick Start Checklist

Use this checklist for quick reference during deployment.

## Pre-Deployment
- [ ] Domain registered and pointing to hosting server
- [ ] cPanel account created and accessible
- [ ] SSH access available (or FTP alternative)
- [ ] Git installed on server or files ready to upload

## Deployment Process

### 1. Access Your Server
```bash
ssh username@your-domain.com
cd ~/public_html
```

### 2. Get Project Files
```bash
# Option A: Clone from GitHub
git clone https://github.com/NinsonD/Namariq-Group-website.git .

# Option B: Upload via FTP
# Use FTP client to upload all files except node_modules/
```

### 3. Install & Build
```bash
npm install --production
npm run build
```

### 4. Create Node.js App in cPanel
1. Open cPanel → Node.js Selector
2. Click "Create Application"
3. Set Node.js version to 18.17.0 or higher
4. Set Application root: `/home/username/public_html`
5. Set Startup file: `server.js`
6. Click "Create"

### 5. Start Application
1. Find your app in Node.js Selector
2. Click "Start" button
3. Wait for status: "Running"

### 6. Test Website
- Visit: https://your-domain.com
- Check: https://your-domain.com/health (should return "ok")
- Check logs if issues arise

## File Checklist (Must Be Present)

- [ ] `server.js` - Node.js server entry point
- [ ] `.htaccess` - Apache proxy configuration
- [ ] `package.json` - Project dependencies
- [ ] `next.config.js` - Next.js configuration
- [ ] `public/` - Static assets directory
- [ ] `app/` - Next.js application directory
- [ ] `.env.local` - Environment variables (if needed)

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Website shows blank page | Check Node.js app status in cPanel, view logs |
| Images not loading | Verify `/public` directory permissions (755) |
| HTTPS not working | Enable AutoSSL in cPanel, clear browser cache |
| Static files 404 | Ensure .htaccess is present, check rewrite rules |
| App crashes on startup | Check `npm run build` locally first, verify dependencies |

## Restart Application (If Needed)

In cPanel Node.js Selector:
1. Find your application
2. Click "Restart" button
3. Wait 30 seconds for restart to complete

## View Logs

In cPanel Node.js Selector:
1. Find your application
2. Click "View Logs" button
3. Review error messages

## Support
- cPanel Help: Contact your hosting provider
- Deploy Issues: Check GitHub issues at https://github.com/NinsonD/Namariq-Group-website/issues
