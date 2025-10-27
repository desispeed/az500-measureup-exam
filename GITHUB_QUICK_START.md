# GitHub Quick Start Guide (5 Minutes)

Complete this in 5 minutes to push your project to GitHub!

## Step 1: Create GitHub Repository (1 min)

1. Go to https://github.com/new
2. Name: `az500-measureup-exam`
3. Description: `Azure AZ-500 Security Engineer Practice Exam`
4. Click "Create repository"
5. Copy the repository URL

## Step 2: Copy Files to Output Directory (1 min)

All files are already in `/mnt/user-data/outputs/`. You're ready to push!

Files included:
- ✅ `src/App.jsx` (exam component)
- ✅ `src/index.js` (entry point)
- ✅ `src/index.css` (styles)
- ✅ `public/index.html` (HTML template)
- ✅ `package.json` (dependencies)
- ✅ Configuration files (Tailwind, PostCSS)
- ✅ GitHub Actions (CI/CD)
- ✅ Documentation files (README, etc.)
- ✅ `.gitignore` (exclude node_modules)

## Step 3: Initialize Git & Push (3 min)

```bash
cd /mnt/user-data/outputs

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AZ-500 MeasureUp exam with 125 questions"

# Connect to GitHub (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/az500-measureup-exam.git
git branch -M main

# Push to GitHub
git push -u origin main
```

✅ **Done!** Your project is now on GitHub!

## View Your Project

- **Repository**: `https://github.com/USERNAME/az500-measureup-exam`
- **Files**: Click on file names to view
- **Share**: Copy repository URL and share with others

## Next Steps (Optional)

### Deploy Live (Automatic)

GitHub Actions will automatically build and deploy:

1. Go to Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages / root
4. **Live URL**: `https://USERNAME.github.io/az500-measureup-exam`

### Make Changes

```bash
# Edit files
# Make changes to questions, styling, etc.

# Commit and push
git add .
git commit -m "Add 10 new AZ-500 questions"
git push origin main
```

### Enable Discussions

1. Go to Settings
2. Under "Features", enable "Discussions"
3. People can ask questions about the exam

## Clone for Local Development

```bash
git clone https://github.com/USERNAME/az500-measureup-exam.git
cd az500-measureup-exam
npm install
npm start
```

## GitHub Links to Remember

| Link | Purpose |
|------|---------|
| `github.com/USERNAME/az500-measureup-exam` | Repository |
| `github.com/USERNAME/az500-measureup-exam/edit/main/README.md` | Edit README online |
| `github.com/USERNAME/az500-measureup-exam/issues` | Bug reports |
| `github.com/USERNAME/az500-measureup-exam/actions` | Build status |

## Troubleshooting

**Fatal: not a git repository?**
```bash
git init
git add .
git commit -m "Initial commit"
```

**Permission denied (publickey)?**
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/USERNAME/repo-name.git
```

**Already a git repository?**
```bash
rm -rf .git
git init
# Then follow Step 3 again
```

## Celebrate! 🎉

Your project is now:
- ✅ On GitHub
- ✅ Publicly shareable
- ✅ Ready for collaboration
- ✅ Automatically built and deployed
- ✅ Backed up in the cloud

## Share Your Project

Send others this link to use your exam:
```
https://github.com/YOUR_USERNAME/az500-measureup-exam
```

Or share the live version:
```
https://YOUR_USERNAME.github.io/az500-measureup-exam
```

---

That's it! You're done. Enjoy your AZ-500 practice exam! 🚀
