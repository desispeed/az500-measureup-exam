# GitHub Deployment Guide

## Quick Start for GitHub

### Prerequisites
- GitHub account (free)
- Git installed on your computer
- Code editor (VS Code recommended)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `az500-measureup-exam`
3. Description: `Azure AZ-500 Security Engineer Practice Exam in MeasureUp Format`
4. Choose Public (for sharing) or Private (for yourself)
5. Click "Create repository"

## Step 2: Connect Local Project to GitHub

```bash
# Navigate to project directory
cd /path/to/az500-measureup-exam

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: AZ-500 MeasureUp exam with 125 questions"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/az500-measureup-exam.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: File Structure to Push

```
az500-measureup-exam/
├── .github/
│   └── workflows/
│       └── build-deploy.yml
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── INSTALLATION.md
├── LICENSE
├── README.md
├── DEPLOYMENT.md
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Step 4: Enable GitHub Pages (Optional)

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `root`
5. Save

Site will be available at: `https://YOUR_USERNAME.github.io/az500-measureup-exam`

## Step 5: Automatic Deployment (CI/CD)

The `.github/workflows/build-deploy.yml` file automatically:
- Builds the project on every push
- Tests the build
- Deploys to GitHub Pages (main branch)

## Making Updates

```bash
# Make changes to code

# Commit changes
git add .
git commit -m "feat: Add 10 new AZ-500 security questions"

# Push to GitHub
git push origin main
```

## Sharing Your Project

### GitHub URL
```
https://github.com/YOUR_USERNAME/az500-measureup-exam
```

### Deployed Live Version
```
https://YOUR_USERNAME.github.io/az500-measureup-exam
```

### Share with Others
1. Copy repository link
2. Share in chat/email
3. They can fork/clone to use locally

## Managing Collaborators

To allow others to contribute:

1. Go to Settings > Collaborators > Add people
2. Enter GitHub usernames
3. They can then push to repository

## Protecting Main Branch

For team projects:

1. Go to Settings > Branches
2. Add rule for `main`
3. Require pull requests before merge
4. Require status checks pass

## Repository Settings

### Recommended Configuration

**General**
- ✓ Require pull requests before merge
- ✓ Require status checks to pass
- ✓ Dismiss stale pull requests
- ✓ Allow auto-merge

**Branches**
- ✓ Protect `main` branch
- ✓ Require code review

**Secrets & Variables**
- Add any API keys here (if needed in future)
- Use in GitHub Actions workflows

## Adding to README Badge

Update README.md with repository badge:

```markdown
# Azure AZ-500 Security Engineer Practice Exam

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/YOUR_USERNAME/az500-measureup-exam)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Build](https://github.com/YOUR_USERNAME/az500-measureup-exam/actions/workflows/build-deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/az500-measureup-exam/actions)
```

## Forking & Contributing

If you want others to contribute:

1. Fork button on GitHub allows others to create their own copy
2. They submit pull requests with improvements
3. You review and merge

## Troubleshooting

### Push Rejected
```bash
# Pull latest changes first
git pull origin main

# Then push again
git push origin main
```

### Large File Error
```bash
# Check file sizes
git ls-files -s | sort -k4 -n -r | head

# Remove large files and recommit
git rm --cached largeFile
git commit -m "Remove large file"
```

### GitHub Pages Not Deploying

1. Check Settings > Pages
2. Verify branch is set correctly
3. Check GitHub Actions for build errors
4. Wait 2-3 minutes for deployment

## Deployment Checklist

- [ ] Project pushed to GitHub
- [ ] README.md complete
- [ ] LICENSE added
- [ ] .gitignore properly configured
- [ ] INSTALLATION.md clear
- [ ] GitHub Pages enabled (if using)
- [ ] CI/CD workflow running
- [ ] Repository is public (for sharing)
- [ ] Badges added to README

## Next Steps

1. **Share with Community**
   - Reddit: r/Azure, r/learnprogramming
   - GitHub: Add to awesome-lists
   - LinkedIn: Share your project
   - Twitter: Tweet about it

2. **Get Feedback**
   - Enable discussions
   - Accept pull requests
   - Respond to issues

3. **Improve Project**
   - Add more questions
   - Add features
   - Improve documentation
   - Fix issues

4. **Monetize (Optional)**
   - Sponsor button
   - Premium version
   - Consulting services

## Resources

- GitHub Help: https://docs.github.com
- GitHub Actions: https://docs.github.com/en/actions
- GitHub Pages: https://pages.github.com
- Git Documentation: https://git-scm.com/doc

---

**Your project is now live on GitHub!** 🎉

Share it with others preparing for AZ-500 certification. Good luck!
