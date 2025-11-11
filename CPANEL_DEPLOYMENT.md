# cPanel Deployment Guide for Namariq Group Website

## Overview
This guide walks you through deploying the Next.js application on cPanel with Node.js support.

## Prerequisites
- cPanel account with Node.js selector feature enabled
- Git access (or ability to upload files via FTP)
- Domain already pointed to your hosting account

## Deployment Steps

### Step 1: Connect to Your Server via SSH or cPanel Terminal

```bash
# SSH into your server (replace with your server details)
ssh username@your-domain.com
```

### Step 2: Navigate to Your Public HTML Directory

```bash
cd ~/public_html
# or for a subdomain
cd ~/public_html/subdomain
```

### Step 3: Clone or Upload the Repository

**Option A: Clone from GitHub**
```bash
git clone https://github.com/NinsonD/Namariq-Group-website.git .
```

**Option B: Upload via FTP**
Upload all files except `node_modules/` and `.git/` directories.

### Step 4: Install Dependencies

```bash
npm install --production
```

### Step 5: Build the Application

```bash
npm run build
```

### Step 6: Create Node.js Application in cPanel

#### Using cPanel Node.js Selector:

1. Log in to cPanel
2. Navigate to **Software** → **Node.js Selector** (or search for it)
3. Click **Create Application**
4. Configure:
   - **Node.js version**: 18.17.0 or higher
   - **Application mode**: Production
   - **Application root**: `/home/username/public_html` (or your directory)
   - **Application startup file**: `server.js`
   - **Application URL**: Your domain
   - **Application name**: `namariq-website` (or your choice)

5. Click **Create**

### Step 7: Set Environment Variables (Optional but Recommended)

In the Node.js Selector, after creating the app:
1. Find your application in the list
2. Click the "Environment Variables" button
3. Add any needed variables:
   - `NODE_ENV=production`
   - `PORT=3000` (or assigned port)

### Step 8: Start the Application

In the Node.js Selector:
1. Find your application
2. Click the **Start** button if it's not running
3. Wait for status to show "Running"

### Step 9: Verify Setup

Check that your website is accessible:
```bash
curl -I https://your-domain.com
```

Test the health endpoint:
```bash
curl -I https://your-domain.com/health
```

## cPanel Node.js Selector Information

The Node.js Selector automatically:
- Manages the Node.js process
- Restarts the application on server reboot
- Provides restart functionality
- Creates necessary proxy configurations

## Troubleshooting

### Website Not Loading
1. Check application status in cPanel Node.js Selector
2. Verify logs: In Node.js Selector, click "View Logs"
3. Ensure .htaccess file is present and readable
4. Check that Apache's proxy modules are enabled

### Application Crashes
1. Check Node.js logs in cPanel
2. Verify all dependencies installed: `npm install --production`
3. Confirm `server.js` is executable
4. Check for environment variable issues

### Port Conflicts
- The Node.js Selector automatically assigns available ports
- Don't manually specify a port; let cPanel handle it

### SSL/HTTPS Issues
- Ensure AutoSSL is enabled in cPanel
- Check that .htaccess has HTTPS redirect rules
- Clear browser cache and test in incognito window

### Static Assets Not Loading
- Verify `/public` directory permissions (755)
- Check .htaccess rewrite rules aren't blocking static files
- Ensure image paths use `/` prefix in Next.js code

## File Structure

```
~/public_html/
├── public/               # Static files (images, fonts, etc.)
├── app/                  # Next.js app directory
├── components/           # React components
├── lib/                  # Utilities and API functions
├── types/                # TypeScript types
├── .htaccess             # Apache configuration
├── next.config.js        # Next.js configuration
├── server.js             # Custom Node.js server
├── package.json          # Dependencies
├── package-lock.json     # Dependency lock file
└── tsconfig.json         # TypeScript configuration
```

## Performance Tips

1. **Enable Compression**: Already configured in .htaccess
2. **Cache Control**: Static assets cached for 1 year
3. **Image Optimization**: Next.js automatically optimizes images
4. **Monitor Resource Usage**: Check cPanel Resource Usage regularly
5. **Use CDN**: Consider adding a CDN for static assets

## Updates and Maintenance

### To Update the Application

```bash
cd ~/public_html
git pull origin master
npm install --production
npm run build
```

Then restart the application in Node.js Selector.

### Regular Backups
- Enable automatic backups in cPanel
- Download critical files regularly

## Support Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **cPanel Support**: Your hosting provider's support team
- **Node.js Documentation**: https://nodejs.org/docs

## Production Checklist

- [ ] Node.js application running in cPanel
- [ ] Domain pointing to correct server
- [ ] SSL certificate installed and active
- [ ] .htaccess properly configured
- [ ] Environment variables set if needed
- [ ] Database connections working (if applicable)
- [ ] Email sending working (Nodemailer)
- [ ] Images and static files loading
- [ ] Forms submitting correctly
- [ ] Analytics tracking active
- [ ] Regular backups enabled
- [ ] Error logging in place

## Contact

For issues specific to your setup, contact:
- Your hosting provider's support
- GitHub Issues: https://github.com/NinsonD/Namariq-Group-website/issues
