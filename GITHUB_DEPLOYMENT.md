# 🚀 GitHub Pages Deployment Guide

## **Step-by-Step Instructions to Deploy Your Portfolio**

### **📋 Prerequisites**
1. **GitHub Account**: Create at [github.com](https://github.com) if you don't have one
2. **Git Installed**: Download from [git-scm.com](https://git-scm.com/) if not installed

---

## **🎯 Method 1: Quick Upload (Easiest)**

### **Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** or **"+"** → **"New repository"**
3. Repository name: `portfolio` (or `your-username.github.io` for main site)
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### **Step 2: Upload Your Files**
1. In your new repository, click **"uploading an existing file"**
2. **Drag and drop** all files from the `docs` folder:
   - `index.html`
   - `css/style.css`
   - `js/script.js`
3. Write commit message: `"Add portfolio website"`
4. Click **"Commit changes"**

### **Step 3: Enable GitHub Pages**
1. Go to repository **Settings** tab
2. Scroll down to **"Pages"** in left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**

### **Step 4: Access Your Live Site**
- Your site will be live at: `https://your-username.github.io/portfolio`
- It may take 5-10 minutes to go live

---

## **🎯 Method 2: Using Git Commands (Recommended)**

### **Step 1: Initialize Git Repository**
Open Command Prompt/Terminal in your project folder:

```bash
cd "c:\Users\Tushar\OneDrive\Desktop\Tushar Portfolio"
git init
git add .
git commit -m "Initial commit: Add portfolio website"
```

### **Step 2: Connect to GitHub**
```bash
# Replace 'your-username' with your actual GitHub username
git remote add origin https://github.com/your-username/portfolio.git
git branch -M main
git push -u origin main
```

### **Step 3: Set Up GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **"Deploy from a branch"**
4. Branch: **"main"** → Folder: **"docs"**
5. Click **"Save"**

---

## **🎯 Method 3: Using docs Folder (Professional)**

This method uses the `docs` folder I created for you:

### **Step 1: Push to GitHub**
```bash
git add .
git commit -m "Add portfolio with docs folder"
git push origin main
```

### **Step 2: Configure Pages**
1. Repository **Settings** → **Pages**
2. Source: **"Deploy from a branch"**
3. Branch: **"main"** → Folder: **"docs"**
4. Click **"Save"**

---

## **🔧 Important Configuration**

### **Update Your Links**
Before deploying, update these in your HTML files:

1. **GitHub Username**: Replace `tushar-bharti` with your actual username
2. **LinkedIn URL**: Update with your LinkedIn profile
3. **Repository URLs**: Update project links to your actual repositories

### **Contact Form Setup**
The contact form uses Formspree. To activate:

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form
4. Replace `xpwzgqpv` in the form action with your form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## **📂 File Structure for GitHub Pages**

```
Your Repository/
├── docs/                    # GitHub Pages will serve from here
│   ├── index.html          # Main portfolio page
│   ├── css/
│   │   └── style.css       # Styles
│   └── js/
│       └── script.js       # JavaScript functionality
├── src/                    # Spring Boot source (optional)
├── static-version/         # Alternative static version
├── README.md              # Project documentation
└── .gitignore            # Git ignore file
```

---

## **🌐 Custom Domain (Optional)**

### **Add Custom Domain**
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In repository **Settings** → **Pages**
3. Add your domain in **"Custom domain"**
4. Create `CNAME` file in docs folder with your domain

### **DNS Configuration**
Add these DNS records at your domain provider:
```
Type: CNAME
Name: www
Value: your-username.github.io

Type: A
Name: @
Value: 185.199.108.153
```

---

## **🚀 Quick Commands Summary**

```bash
# Navigate to project
cd "c:\Users\Tushar\OneDrive\Desktop\Tushar Portfolio"

# Initialize and commit
git init
git add .
git commit -m "Add portfolio website"

# Connect to GitHub (replace with your username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## **✅ Verification Steps**

1. **Check Repository**: Files uploaded successfully
2. **Pages Settings**: Enabled and configured
3. **Live Site**: Accessible at your GitHub Pages URL
4. **Mobile Responsive**: Test on different devices
5. **Contact Form**: Test form submission
6. **Links Working**: All social and project links functional

---

## **🔧 Troubleshooting**

### **Site Not Loading?**
- Wait 5-10 minutes after enabling Pages
- Check Pages settings are correct
- Ensure repository is public
- Verify index.html is in the right folder

### **Styling Issues?**
- Check CSS file path in HTML
- Ensure all files are uploaded
- Clear browser cache

### **Form Not Working?**
- Set up Formspree account
- Update form action URL
- Test with valid email

---

## **🎯 Your Live Portfolio URLs**

After deployment, your portfolio will be available at:

- **Main Site**: `https://your-username.github.io/portfolio`
- **Custom Domain**: `https://your-domain.com` (if configured)

---

## **📞 Need Help?**

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify all file paths are correct
3. Test locally first
4. Contact me at: bhartitushar534@gmail.com

**Your professional portfolio is ready to impress employers! 🎉**
