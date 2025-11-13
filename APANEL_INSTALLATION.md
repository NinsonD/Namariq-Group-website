# aPanel Deployment Guide (One-Key Installation)

## Overview
This guide walks you through deploying the Next.js application on aPanel using the one-key installation feature.

## Prerequisites
- aPanel account with Node.js support enabled
- Domain already connected to your aPanel server
- Git access or FTP to upload files

## Step-by-Step Installation

### Step 1: Prepare Your Repository

Before uploading to aPanel, ensure your repository is clean:

```bash
# Remove node_modules if present
rm -rf node_modules

# Remove build artifacts
rm -rf .next

# Clean npm cache (optional)
npm cache clean --force
```

### Step 2: Upload to aPanel

#### Option A: Via Git (Recommended for aPanel)
1. Log into aPanel
2. Navigate to **Website** → **Sites**
3. Click **Add Site**
4. Enter your domain
5. Under **Source**, select **Git**
6. Repository URL: `https://github.com/NinsonD/Namariq-Group-website.git`
7. Branch: `master`
8. Deploy Directory: Select your public directory

#### Option B: Via FTP Upload
1. Use FTP client to upload all files to your domain directory
2. **Exclude these files/folders**:
   - `.git/` (folder)
   - `node_modules/` (folder)
   - `.next/` (folder)
   - `dist/` (folder)

### Step 3: Create Node.js Application

1. In aPanel, go to **Website** → **Sites**
2. Find your site and click **Details** or **Config**
3. Look for **Node.js** or **Application** settings
4. Create a new Node.js application with:
   - **Node.js Version**: 18.17.0 or higher
   - **Entry Point**: `server.js`
   - **Port**: Auto-assigned (usually 3000-3100)
   - **Environment**: Production

### Step 4: Install Dependencies Using One-Key Installation

1. In aPanel, select your Node.js application
2. Click **One-Key Installation** or **Install Dependencies**
3. aPanel will automatically:
   - Run `npm install --production`
   - Build the application (`npm run build`)
   - Start the application

**Wait for completion** - this may take 3-5 minutes on first run.

### Step 5: Verify Installation

Check that your website is working:

```bash
# Check website accessibility
curl -I https://your-domain.com

# Test health endpoint
curl -I https://your-domain.com/health
```

### Step 6: Configure Environment (If Needed)

In aPanel:
1. Go to your Node.js application settings
2. Click **Environment Variables**
3. Add any required variables:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_*` variables for frontend

## Troubleshooting

### Issue: npm install fails with peer dependency errors

**Solution**: aPanel may have npm 7+ which enforces peer dependencies. 

Try installing with legacy peer deps:
```bash
npm install --legacy-peer-deps --production
```

Or update package.json `.npmrc`:
```
legacy-peer-deps=true
```

### Issue: Installation hangs or times out

**Solutions**:
1. Check aPanel server resources (CPU, RAM)
2. Use npm cache clean:
   ```bash
   npm cache clean --force
   ```
3. Try installing with specific npm registry:
   ```bash
   npm install --registry https://registry.npmjs.org/ --production
   ```

### Issue: Application crashes after installation

1. Check logs in aPanel application console
2. Verify Node.js version is 18.17.0+:
   ```bash
   node --version
   ```
3. Rebuild the application:
   ```bash
   npm run build
   npm start
   ```

### Issue: Static files (images) not loading

1. Verify `/public` directory exists and has correct permissions
2. Check `.htaccess` file is present and readable
3. Restart Node.js application in aPanel

### Issue: Port already in use

This usually means another application is running. In aPanel:
1. Stop any other Node.js applications
2. Restart your application
3. Check if aPanel assigned a different port

## Installation via SSH (If One-Key Installation Fails)

```bash
# SSH into your server
ssh username@your-domain.com

# Navigate to your site directory
cd /home/username/domains/your-domain.com

# Install dependencies (production only)
npm install --production --legacy-peer-deps

# Build the application
npm run build

# Start the application (aPanel should handle this, but you can manually start)
npm start
```

## File Structure in aPanel

```
/home/username/domains/your-domain.com/
├── public/                    # Static files
├── app/                       # Next.js app directory
├── components/                # React components
├── lib/                       # Utilities
├── types/                     # TypeScript types
├── .htaccess                  # Apache proxy configuration
├── server.js                  # Node.js entry point
├── next.config.js             # Next.js config
├── package.json               # Dependencies
├── package-lock.json          # Lock file
├── tsconfig.json              # TypeScript config
├── tailwind.config.js         # Tailwind CSS config
└── .env.local                 # Environment variables (if needed)
```

## aPanel One-Key Installation Features

The one-key installation in aPanel automatically:
- ✅ Installs dependencies from package.json
- ✅ Builds the Next.js application
- ✅ Configures Apache reverse proxy
- ✅ Sets up SSL certificate (if enabled)
- ✅ Starts the Node.js application
- ✅ Configures auto-restart on server reboot
- ✅ Sets up monitoring and logging

## Performance Optimization for aPanel

1. **Enable Caching**:
   - Static assets cached for 1 year
   - Already configured in `.htaccess`

2. **Enable Compression**:
   - Gzip compression for text/JS/CSS
   - Already configured in `.htaccess`

3. **Monitor Resources**:
   - Check CPU/Memory usage in aPanel
   - Increase Node.js memory if needed

4. **Update Dependencies** (after installation):
   ```bash
   npm update --production
   npm run build
   npm restart  # Or restart via aPanel UI
   ```

## Updating Your Application

When you push updates to GitHub:

1. **Via Git Deployment** (recommended):
   - Push to master branch
   - aPanel pulls automatically if auto-deploy is enabled
   - Application restarts automatically

2. **Manual Update**:
   ```bash
   cd /home/username/domains/your-domain.com
   git pull origin master
   npm install --production --legacy-peer-deps
   npm run build
   npm restart
   ```

## Common aPanel Tips

- **Restart Application**: Go to Node.js app settings → click "Restart"
- **View Logs**: Go to Node.js app settings → click "View Logs"
- **Check Status**: Green indicator = Running, Red = Stopped
- **Port Assignment**: aPanel automatically assigns available ports (3000+)
- **SSL**: Auto-enabled with Let's Encrypt if configured

## Support & Resources

- **aPanel Documentation**: https://apanel.cloud/docs
- **Next.js Docs**: https://nextjs.org/docs
- **npm Troubleshooting**: https://docs.npmjs.com/cli/v9/using-npm
- **Node.js Docs**: https://nodejs.org/docs/
- **GitHub Issues**: https://github.com/NinsonD/Namariq-Group-website/issues

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Domain connected to aPanel
- [ ] Node.js version 18.17.0+ installed
- [ ] Dependencies installed successfully
- [ ] Application built without errors
- [ ] Website accessible at https://your-domain.com
- [ ] SSL certificate active
- [ ] Health endpoint working (/health)
- [ ] Images and static files loading
- [ ] Contact form working (if applicable)
- [ ] Analytics tracking active
- [ ] Email notifications configured
