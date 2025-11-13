# aPanel App Category - Manual Module Installation Guide

## Overview
This guide explains how to install Node.js modules manually using aPanel's App Category feature for reliable installation on aPanel servers.

## Prerequisites
- aPanel account with App Category access
- Domain configured in aPanel
- Node.js 18.17.0+ installed on your aPanel server

## Step-by-Step Installation via App Category

### Step 1: Upload Project Files to aPanel

1. **Via FTP**:
   - Connect to your aPanel server using FTP
   - Upload all files to your domain directory (e.g., `/home/username/domains/your-domain.com/`)
   - **Important**: Do NOT upload `node_modules/` folder
   - **Important**: Do NOT upload `.git/` folder
   - **Important**: Do NOT upload `.next/` folder (build folder)

2. **Via Git** (if aPanel supports it):
   ```bash
   cd /home/username/domains/your-domain.com/
   git clone https://github.com/NinsonD/Namariq-Group-website.git .
   ```

### Step 2: Access aPanel App Category

1. Log into aPanel dashboard
2. Navigate to **Apps** or **App Category** section
3. Look for **Node.js Applications** or **Web Applications**
4. Click **+ Add New Application** or **Create App**

### Step 3: Configure Application

Fill in the following details:

| Field | Value |
|-------|-------|
| **Application Name** | `namariq-group-website` |
| **Domain** | Your domain (e.g., `namariqgroup.com`) |
| **Application Type** | Node.js |
| **Node.js Version** | 18.17.0 or higher |
| **Application Directory** | `/home/username/domains/your-domain.com/` |
| **Entry Point** | `server.js` |
| **Port** | Auto (aPanel assigns one) |

### Step 4: Install Dependencies Manually

#### Method A: Using aPanel UI

1. After creating the app, look for **Install Dependencies** or **Modules** button
2. aPanel may show:
   - **One-Click Install** - Click if available
   - **Manual Module Installation** - Select this
   - **Module List** - Browse and select modules

#### Method B: Manual Installation via SSH

1. SSH into your aPanel server:
   ```bash
   ssh username@your-domain.com
   ```

2. Navigate to your project directory:
   ```bash
   cd /home/username/domains/your-domain.com/
   ```

3. Install dependencies using npm:
   ```bash
   # Install production dependencies only
   npm install --production --legacy-peer-deps
   ```

4. Build the application:
   ```bash
   npm run build
   ```

5. Start the application:
   ```bash
   npm start
   ```

### Step 5: Install Individual Modules (If Needed)

If you need to install specific modules one by one through aPanel UI:

**Core Dependencies** (Install in this order):
```
1. next@14.2.33
2. react@18.3.1
3. react-dom@18.3.1
4. react-hook-form@7.65.0
5. i18next@25.5.2
6. nodemailer@7.0.10
```

**UI/Component Libraries**:
```
7. @radix-ui/react-accordion@1.2.12
8. @radix-ui/react-dialog@1.1.15
9. @radix-ui/react-label@2.1.7
10. @radix-ui/react-slot@1.2.3
11. @radix-ui/react-tabs@1.1.13
12. lucide-react@0.546.0
13. embla-carousel-react@8.6.0
```

**Analytics & Tracking**:
```
14. gtag@1.0.1
15. react-ga4@2.1.0
16. react-facebook-pixel@1.0.4
17. react-google-recaptcha-v3@1.11.0
18. react-cookie-consent@9.0.0
```

**Utilities**:
```
19. zod@4.1.12
20. clsx@2.1.1
21. tailwind-merge@3.3.1
22. class-variance-authority@0.7.1
23. gsap@3.13.0
```

**CSS/Styling**:
```
24. tailwindcss@3.4.17
25. autoprefixer@10.4.21
26. postcss@8.5.6
```

**i18n (Internationalization)**:
```
27. i18next-browser-languagedetector@8.2.0
28. i18next-http-backend@3.0.2
29. react-i18next@16.0.0
```

**Other Dependencies**:
```
30. @hookform/resolvers@5.2.2
31. next-seo@7.0.1
32. shadcn-ui@0.9.5
```

### Step 6: Verify Installation

After modules are installed, verify everything worked:

```bash
# Check if node_modules exists
ls -la node_modules/ | head -20

# Check if .next build folder exists
ls -la .next/ | head -10

# Test the application
npm start
```

Visit your domain in a browser:
```
https://your-domain.com/health
```

Should return: `ok`

## Troubleshooting Manual Installation

### Issue: "npm command not found"

**Solution**: npm should be installed with Node.js. Verify:
```bash
which npm
npm --version
```

If npm is not found, reinstall Node.js in aPanel.

### Issue: Module installation fails with permission errors

**Solution**: Change directory permissions:
```bash
chmod 755 /home/username/domains/your-domain.com/
chmod 755 /home/username/domains/your-domain.com/node_modules -R
```

### Issue: "Peer dependency warnings"

**Solution**: Use the `--legacy-peer-deps` flag:
```bash
npm install --production --legacy-peer-deps
```

### Issue: Build fails after installing modules

**Solution**: Try rebuilding:
```bash
npm run build --verbose
```

Check for errors in the output and fix any TypeScript issues.

### Issue: Application crashes on startup

**Solution**: Check the logs and ensure all modules installed correctly:
```bash
npm ls --production
```

This shows the dependency tree and any issues.

### Issue: Slow installation or timeout

**Solution**: Increase timeout and install with specific registry:
```bash
npm install --production --legacy-peer-deps --registry https://registry.npmjs.org/ --fetch-timeout=120000
```

## Manual Module Installation Script

If aPanel App Category requires manual input, you can use this script to install all modules at once:

**Create `install-modules.sh`**:
```bash
#!/bin/bash

echo "Installing Namariq Group Website Dependencies..."
cd /home/username/domains/your-domain.com/

# Install all production dependencies
npm install --production --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "Installation failed!"
    exit 1
fi

# Build the application
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Installation complete! Starting application..."
npm start
```

**Run the script**:
```bash
chmod +x install-modules.sh
./install-modules.sh
```

## After Installation - Configuration

### 1. Set Environment Variables (if needed)

Create `.env.local` file:
```bash
# Add your environment variables here
# Example:
# NEXT_PUBLIC_ANALYTICS_ID=your-google-analytics-id
# NEXT_PUBLIC_RECAPTCHA_KEY=your-recaptcha-key
```

### 2. Verify Apache Proxy

Ensure `.htaccess` is present and contains:
```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

### 3. Start Application via aPanel

1. Go back to your app in aPanel App Category
2. Click **Start** or **Run** button
3. Wait for status to show "Running"

### 4. Test Website

```bash
# Test HTTPS
curl -I https://your-domain.com

# Test health endpoint
curl -I https://your-domain.com/health

# View application logs
tail -f /home/username/logs/application.log  # Path varies
```

## File Structure After Installation

```
/home/username/domains/your-domain.com/
├── node_modules/              ← Installed modules
├── .next/                      ← Build output
├── public/                     ← Static files
├── app/                        ← Next.js application
├── components/                 ← React components
├── lib/                        ← Utilities
├── types/                      ← TypeScript types
├── .htaccess                   ← Apache proxy config
├── server.js                   ← Entry point
├── next.config.js              ← Next.js config
├── package.json                ← Dependencies list
├── package-lock.json           ← Lock file
├── .npmrc                       ← npm configuration
├── tsconfig.json               ← TypeScript config
└── .env.local                  ← Environment variables (optional)
```

## aPanel App Category Best Practices

1. **Always use `--legacy-peer-deps`** for npm 7+ compatibility
2. **Install to production only** - use `--production` flag
3. **Keep `.htaccess` file** - critical for Apache proxy to Node.js
4. **Monitor logs regularly** - check application logs for errors
5. **Test after each major update** - verify functionality
6. **Keep backups** - backup your project files regularly
7. **Update modules periodically** - stay secure with latest patches

## Quick Command Reference

| Command | Purpose |
|---------|---------|
| `npm install --production --legacy-peer-deps` | Install all dependencies |
| `npm run build` | Build Next.js application |
| `npm start` | Start Node.js server |
| `npm ls --production` | View dependency tree |
| `npm ls --production --depth=0` | View top-level deps only |
| `npm outdated` | Check for outdated packages |
| `npm update --production` | Update to latest versions |
| `npm cache clean --force` | Clear npm cache |

## Getting Help

If you encounter issues:

1. **Check logs**: Look for errors in aPanel logs
2. **Verify Node.js version**: Should be 18.17.0+
3. **Test locally first**: Run on your computer before deploying
4. **Check GitHub**: https://github.com/NinsonD/Namariq-Group-website/issues
5. **aPanel Support**: Contact your hosting provider

## Deployment Checklist for aPanel App Category

- [ ] All files uploaded except node_modules/, .git/, .next/
- [ ] Node.js version 18.17.0+ available
- [ ] Dependencies installed successfully
- [ ] Application built without errors
- [ ] .htaccess file in place
- [ ] Application starts without crashing
- [ ] Website accessible at https://your-domain.com
- [ ] Health endpoint works (/health)
- [ ] Static files/images loading
- [ ] Contact form working
- [ ] Analytics tracking active
- [ ] Regular backups configured
