# Santhiya T Portfolio - Render Deployment Guide

## Prerequisites
- GitHub account
- Render account (free at render.com)
- Git installed on your computer

## Step 1: Push Code to GitHub

```bash
# Navigate to your project directory
cd your-portfolio-project

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio website commit"

# Create repository on GitHub (via web interface)
# Then add remote origin
git remote add origin https://github.com/yourusername/santhiya-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Render

### 2.1 Create Render Account
1. Go to https://render.com
2. Sign up using your GitHub account
3. Authorize Render to access your repositories

### 2.2 Create New Web Service
1. Click "New +" in Render dashboard
2. Select "Web Service"
3. Choose "Connect a repository"
4. Select your portfolio repository

### 2.3 Configure Deployment Settings

```
Service Name: santhiya-portfolio
Environment: Node
Region: Oregon (US West) or closest to you
Branch: main
Root Directory: (leave blank)
Build Command: npm install && npm run build
Start Command: npm start
```

### 2.4 Advanced Settings (Optional)
```
Auto-Deploy: Yes (recommended)
Node Version: 18 or higher
```

### 2.5 Environment Variables (if using email service)
Add these in the Environment section:
```
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Step 3: Deploy

1. Click "Create Web Service"
2. Wait for build process (5-15 minutes)
3. Your site will be live at: `https://santhiya-portfolio.onrender.com`

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain in Render
1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain (e.g., santhiya.dev)

### 4.2 Update DNS Settings
Point your domain to Render:
```
Type: CNAME
Name: www
Value: santhiya-portfolio.onrender.com

Type: A (for root domain)
Name: @
Value: Render's IP (provided in dashboard)
```

## Deployment Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Install dependencies
npm install
```

## Troubleshooting

### Build Fails
- Check package.json scripts
- Ensure all dependencies are listed
- Check Node.js version compatibility

### Environment Variables Not Working
- Prefix frontend variables with `VITE_`
- Restart service after adding variables
- Check variable names for typos

### Site Not Loading
- Check build logs in Render dashboard
- Verify start command is correct
- Ensure port binding uses process.env.PORT

### 3D Animations Not Working
- Verify Three.js CDN is accessible
- Check browser console for errors
- Ensure WebGL is supported

## Email Service Setup (Optional)

### Using EmailJS
1. Create account at emailjs.com
2. Create email service and template
3. Add credentials to environment variables
4. Uncomment EmailJS code in `emailService.ts`

### Using Formspree
1. Create account at formspree.io
2. Create new form
3. Add endpoint URL to environment variables
4. Uncomment Formspree code in `emailService.ts`

## Automatic Deployments

After initial setup:
- Any push to main branch triggers automatic deployment
- Check deployment status in Render dashboard
- View build logs for debugging

## Performance Tips

- Enable HTTP/2 (automatic on Render)
- Use CDN for static assets
- Optimize images before deployment
- Monitor site performance in Render dashboard

## Cost Information

- Free tier: 750 hours/month
- Paid plans start at $7/month
- Custom domains included in all plans
- SSL certificates automatic and free

Your portfolio will be live and accessible worldwide after successful deployment!