# Santhiya T - Portfolio Website

An advanced 3D animated personal portfolio website built with React, Three.js, and modern web technologies.

## 🌟 Features

- **3D Animated Background**: Interactive Three.js background with rotating cubes and floating particles
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with light pink color scheme and smooth animations
- **Interactive Sections**: Multiple portfolio sections with hover effects and scroll animations
- **Contact Integration**: Working contact form with email service integration
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **Shadcn/ui** - Beautiful and accessible UI components

### Backend
- **Express.js** - Web application framework
- **Node.js** - JavaScript runtime

### Styling & Design
- **Custom CSS Variables** - Light pink (#FFEDFA) color scheme with contrasting colors
- **Glass Morphism Effects** - Modern translucent design elements
- **Responsive Grid Layouts** - Mobile-first responsive design
- **Custom Animations** - CSS and JavaScript animations

### Email Integration
- **EmailJS** or **Formspree** - Contact form email handling
- **Environment Variables** - Secure API key management

## 📱 Sections

1. **Hero Section** - Introduction with 3D animated background
2. **About Me** - Professional summary and achievements
3. **Skills** - Technical and soft skills showcase
4. **Projects** - Featured project portfolio with 3D hover effects
5. **Experience** - Professional timeline with animations
6. **Education** - Academic background
7. **Research & Awards** - Conference presentations and recognition
8. **Languages** - Language proficiency
9. **Contact** - Interactive contact form and information

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # EmailJS Configuration (Optional)
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Formspree Configuration (Alternative)
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

4. **Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`

5. **Build for Production**
   ```bash
   npm run build
   ```

6. **Start Production Server**
   ```bash
   npm start
   ```

## 🌐 Deployment to Render

### Prerequisites
- GitHub account
- Render account (free tier available)
- Your project code pushed to GitHub repository

### Step-by-Step Deployment Guide

#### 1. Prepare Your Repository
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio website commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/santhiya-portfolio.git

# Push to GitHub
git push -u origin main
```

#### 2. Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up using your GitHub account
3. Authorize Render to access your repositories

#### 3. Deploy to Render
1. **Create New Web Service**
   - Click "New +" button in Render dashboard
   - Select "Web Service"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Name: santhiya-portfolio
   Environment: Node
   Region: Choose closest to your location
   Branch: main
   Root Directory: (leave empty)
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Environment Variables** (Optional)
   Add these if using email services:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id  
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete (5-10 minutes)
   - Your site will be available at: `https://santhiya-portfolio.onrender.com`

#### 4. Custom Domain (Optional)
1. Go to your service settings in Render
2. Click "Custom Domains"
3. Add your domain name
4. Update your domain's DNS settings:
   ```
   Type: CNAME
   Name: www (or @)
   Value: santhiya-portfolio.onrender.com
   ```

#### 5. Automatic Deployments
- Any push to your main branch will automatically trigger a new deployment
- Check deployment status in Render dashboard
- View logs for debugging if needed

### Alternative: Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect GitHub repository for continuous deployment

### Troubleshooting Deployment

#### Common Issues:
1. **Build Fails**: Check package.json scripts and dependencies
2. **Environment Variables**: Ensure all required variables are set
3. **Port Issues**: Render automatically assigns ports, no configuration needed
4. **Static Files**: Ensure build outputs to correct directory

#### Build Commands Reference:
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Install dependencies
npm install
```

## 📧 Contact Form Setup

### Using EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to environment variables
4. Update the `emailService.ts` file with EmailJS implementation

### Using Formspree

1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get the endpoint URL
3. Add the endpoint to environment variables
4. Update the `emailService.ts` file with Formspree implementation

## 🎨 Customization

### Color Scheme
The website uses a light pink (#FFEDFA) primary color scheme. To customize:

1. Update CSS variables in `src/index.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Update Three.js particle colors in `ThreeBackground.tsx`

### Content
Update personal information in the respective component files:
- `HeroSection.tsx` - Name and title
- `AboutSection.tsx` - Biography and achievements
- `ProjectsSection.tsx` - Project details
- `ExperienceSection.tsx` - Work experience
- `ContactSection.tsx` - Contact information

## 🔧 Performance Optimization

- **Lazy Loading** - Components load as needed
- **Optimized Assets** - Compressed images and fonts
- **Efficient Animations** - GPU-accelerated CSS animations
- **Code Splitting** - Bundle optimization with Vite

## 📱 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **WebGL Support** - Required for Three.js animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Santhiya T**
- **Role**: Software Engineer & Full Stack Developer
- **Email**: anbulegend101@gmail.com / sivambanbu1012005@gmail.com
- **Phone**: +91 9790155280
- **Location**: Tiruvannamalai, Tamil Nadu, India

### Professional Background
- **Education**: B.E. Computer Science and Engineering, S.K.P. Engineering College (2022-2026)
- **Specializations**: Full Stack Development, AI/ML, Web Technologies
- **Experience**: Multiple internships and freelance projects in web development and data science
- **Achievements**: 15+ National Conference presentations, 10+ Research awards

---

*Built with ❤️ using React, Three.js, and modern web technologies*
