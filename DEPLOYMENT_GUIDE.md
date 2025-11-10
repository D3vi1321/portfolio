# Deployment Guide - Tushar Bharti Portfolio

This guide provides multiple deployment options for your Java Full Stack portfolio website.

## 🚀 Quick Start Options

### Option 1: Static Version (Easiest - Free Hosting)
The `static-version` folder contains a standalone HTML/CSS/JS version that can be deployed to any static hosting service.

**Recommended Free Hosting Platforms:**
- **Netlify** (Recommended)
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**

#### Deploy to Netlify (Recommended):
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub/Google
3. Drag and drop the `static-version` folder to Netlify
4. Your site will be live instantly with a custom URL

#### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import the `static-version` folder
4. Deploy with one click

#### Deploy to GitHub Pages:
1. Create a new GitHub repository
2. Upload the contents of `static-version` folder
3. Go to Settings > Pages
4. Select source as main branch
5. Your site will be available at `username.github.io/repository-name`

### Option 2: Full Spring Boot Application

#### Prerequisites:
- Java 17 or higher
- Maven 3.6 or higher

#### Local Development:
```bash
# Navigate to project directory
cd "c:\Users\Tushar\OneDrive\Desktop\Tushar Portfolio"

# Install Maven (if not installed)
# Download from: https://maven.apache.org/download.cgi
# Add to PATH environment variable

# Compile and run
mvn clean compile
mvn spring-boot:run
```

#### Access the application:
- Local URL: `http://localhost:8080`
- H2 Database Console: `http://localhost:8080/h2-console`

## 🌐 Free Hosting Options

### For Static Version:

#### 1. Netlify (Recommended)
- **Pros**: Easy deployment, custom domains, form handling, CDN
- **Cons**: None for static sites
- **Steps**:
  1. Visit [netlify.com](https://netlify.com)
  2. Drag and drop `static-version` folder
  3. Get instant custom URL

#### 2. GitHub Pages
- **Pros**: Free, integrated with GitHub, custom domains
- **Cons**: Public repositories only (for free)
- **Steps**:
  1. Create GitHub repository
  2. Upload `static-version` contents
  3. Enable Pages in repository settings

#### 3. Vercel
- **Pros**: Fast deployment, good performance, custom domains
- **Cons**: Limited to static sites on free plan
- **Steps**:
  1. Visit [vercel.com](https://vercel.com)
  2. Import project from GitHub or upload folder
  3. Deploy automatically

### For Full Spring Boot Application:

#### 1. Railway
- **Pros**: Supports Java/Spring Boot, database included, easy deployment
- **Cons**: Limited free tier hours
- **Steps**:
  1. Visit [railway.app](https://railway.app)
  2. Connect GitHub repository
  3. Deploy automatically

#### 2. Render
- **Pros**: Free tier available, supports Spring Boot, PostgreSQL included
- **Cons**: Slower cold starts on free tier
- **Steps**:
  1. Visit [render.com](https://render.com)
  2. Connect GitHub repository
  3. Configure build command: `mvn clean package`
  4. Configure start command: `java -jar target/portfolio-1.0.0.jar`

#### 3. Heroku (Free tier discontinued, but still popular)
- **Alternative**: Use Railway or Render instead

## 📝 Configuration Steps

### For Static Deployment:

1. **Update Contact Form** (in `static-version/index.html`):
   ```html
   <!-- Replace YOUR_FORM_ID with actual Formspree form ID -->
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Update Social Links**:
   - LinkedIn: Update href in social links
   - GitHub: Update href in social links
   - Email: Already configured

3. **Custom Domain** (Optional):
   - Most platforms support custom domains
   - Add CNAME record pointing to platform's URL

### For Spring Boot Deployment:

1. **Environment Variables**:
   ```properties
   SPRING_PROFILES_ACTIVE=prod
   SERVER_PORT=${PORT:8080}
   ```

2. **Database Configuration** (for production):
   ```properties
   # Replace H2 with PostgreSQL for production
   spring.datasource.url=${DATABASE_URL}
   spring.jpa.hibernate.ddl-auto=update
   ```

## 🔧 Customization

### Adding Your Photo:
1. Add your photo to `static-version/images/` folder
2. Update the image placeholder in HTML:
   ```html
   <div class="hero-image">
       <img src="images/your-photo.jpg" alt="Tushar Bharti" class="profile-image">
   </div>
   ```

### Updating Content:
- **Skills**: Modify the skills arrays in JavaScript
- **Projects**: Update project data in the HTML or JavaScript
- **Experience**: Edit the timeline section in HTML
- **Contact Info**: Update contact details throughout the files

### Styling Changes:
- Main styles are in `css/style.css`
- Colors can be changed by updating CSS custom properties
- Responsive breakpoints can be adjusted in media queries

## 📊 Analytics & SEO

### Add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization:
- Update meta tags in HTML head
- Add Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt

## 🚀 Recommended Deployment Path

**For Immediate Deployment (Recommended):**
1. Use the static version
2. Deploy to Netlify
3. Set up Formspree for contact form
4. Add custom domain if desired

**For Full-Stack Showcase:**
1. Deploy Spring Boot version to Railway
2. Configure PostgreSQL database
3. Set up environment variables
4. Monitor application performance

## 📞 Support

If you encounter any issues:
1. Check the browser console for JavaScript errors
2. Verify all file paths are correct
3. Ensure all dependencies are loaded
4. Test on different devices and browsers

**Contact for Support:**
- Email: bhartitushar534@gmail.com
- GitHub: Create an issue in the repository

---

**Choose the deployment option that best fits your needs and technical comfort level. The static version is recommended for quick deployment and showcasing your portfolio immediately.**
