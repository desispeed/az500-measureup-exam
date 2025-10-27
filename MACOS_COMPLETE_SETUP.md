# macOS Setup Package - Complete Summary

All files needed to set up and run the AZ-500 MeasureUp exam on macOS.

## 📦 macOS-Specific Files

### 🚀 Automated Setup (EASIEST)

**`setup.sh`** - Automated installation script
- One command installs everything
- Checks for Homebrew, Node.js
- Installs dependencies
- Verifies installation
- Usage: `bash setup.sh`

### 📖 Documentation Files

#### For Complete Setup
**`MACOS_INSTALLATION.md`** - Comprehensive macOS guide (RECOMMENDED FOR FIRST-TIME USERS)
- System requirements
- Homebrew installation (recommended)
- Manual installation (alternative)
- M1/M2/M3 Apple Silicon support
- IDE setup (VS Code, WebStorm, etc.)
- Terminal tips and tricks
- Extensive troubleshooting guide
- 50+ solutions to common issues

#### For Quick Start
**`MACOS_QUICK_START.md`** - Get running in 10 minutes
- Fastest path to running exam
- Step-by-step minimal instructions
- Setup script usage
- Common problems & quick fixes
- Perfect for experienced developers

#### Reference Material
**`MACOS_TERMINAL_CHEATSHEET.md`** - Terminal command reference
- Navigation commands
- Project commands (npm)
- Git commands
- File management
- System commands
- Keyboard shortcuts
- Aliases and tips
- 100+ useful commands at a glance

### 🛠️ Core Application Files (All Platforms)

These work on macOS exactly the same:
- `src/App.jsx` - Main exam component
- `src/index.js` - React entry point
- `src/index.css` - Styling
- `public/index.html` - HTML template
- `package.json` - Dependencies
- Configuration files

## 🎯 Quick Start Paths

### Path 1: Complete Beginner (First Time on macOS)
1. Read: `MACOS_INSTALLATION.md` (comprehensive guide)
2. Run: `bash setup.sh` (automated setup)
3. Start: `npm start` (run exam)

### Path 2: Experienced Developer (Know what you're doing)
1. Read: `MACOS_QUICK_START.md` (fast overview)
2. Run: `bash setup.sh` (automated setup)
3. Start: `npm start` (run exam)

### Path 3: Advanced User (DIY)
1. Install Homebrew manually
2. Install Node.js manually
3. Run: `npm install` and `npm start`

### Path 4: Scripted Installation (One command)
```bash
bash setup.sh
```

## 📊 File Purposes

| File | Purpose | Read If |
|------|---------|---------|
| `setup.sh` | Automated installer | Want easiest setup |
| `MACOS_INSTALLATION.md` | Complete guide | First-time user |
| `MACOS_QUICK_START.md` | Quick reference | In a hurry |
| `MACOS_TERMINAL_CHEATSHEET.md` | Command reference | Need quick lookup |
| `README.md` | Project overview | Want features list |
| `INSTALLATION.md` | All platforms | Need generic help |
| `DEPLOYMENT.md` | GitHub deployment | Want to push to GitHub |

## 🍎 What the Setup Script Does

When you run `bash setup.sh`:

1. ✅ Verifies you're on macOS
2. ✅ Checks for Homebrew (installs if needed)
3. ✅ Checks for Node.js (installs if needed)
4. ✅ Verifies Node version (needs v14+)
5. ✅ Checks project files exist
6. ✅ Runs `npm install` automatically
7. ✅ Provides helpful summary
8. ✅ Shows next steps

**Total time**: 5-10 minutes (first time)

## 🚀 Three Ways to Start

### Option 1: Automated (Easiest) ⭐ RECOMMENDED
```bash
cd ~/Desktop/az500-measureup-exam
bash setup.sh
npm start
```

### Option 2: Manual (More Control)
```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node
brew install node

# Setup project
npm install
npm start
```

### Option 3: All-in-One
```bash
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git && \
cd az500-measureup-exam && \
bash setup.sh && \
npm start
```

## ⚙️ System Requirements

- **macOS**: 10.15+ (Catalina or newer)
- **Processor**: Intel or Apple Silicon (M1/M2/M3)
- **RAM**: 4 GB (8 GB recommended)
- **Disk**: 2 GB free
- **Internet**: Required for installation

## 🍎 Apple Silicon (M1/M2/M3) Support

The setup script automatically handles:
- ✅ Native ARM64 installation
- ✅ Rosetta 2 emulation fallback
- ✅ Compatibility verification
- ✅ Proper architecture detection

If you have issues:
```bash
arch -x86_64 npm install
arch -x86_64 npm start
```

## 📱 Terminal Apps for macOS

| App | Description | Installation |
|-----|-------------|--------------|
| **Terminal** | Default (built-in) | Applications > Utilities |
| **iTerm2** | Better alternative | `brew install iterm2` |
| **Hyper** | Modern terminal | Download from hyper.is |
| **Warp** | AI-powered terminal | Download from warp.dev |

## 🎯 Typical Installation Flow

```
1. Download Project
   ↓
2. Open Terminal
   ↓
3. Navigate to project folder
   ↓
4. Run: bash setup.sh
   ↓
5. Run: npm start
   ↓
6. Browser opens → http://localhost:3000
   ↓
7. Start practicing for AZ-500! 🎓
```

## 🆘 Common Issues & Quick Fixes

| Issue | Solution |
|-------|----------|
| "command not found: npm" | Run setup.sh or `brew install node` |
| "Port 3000 in use" | Use different port: `PORT=3001 npm start` |
| "Permission denied" | Run: `sudo chown -R $(whoami) ~/.npm` |
| "M1/M2 issues" | Run: `arch -x86_64 npm install` |
| "Module not found" | Run: `npm install` again or `npm cache clean --force` |

More solutions in: `MACOS_INSTALLATION.md`

## 📚 Knowledge Base

### Getting Started
1. `MACOS_QUICK_START.md` - 10-minute setup
2. `MACOS_INSTALLATION.md` - Detailed guide
3. `setup.sh` - Automated script

### Reference
4. `MACOS_TERMINAL_CHEATSHEET.md` - Command reference
5. `README.md` - Feature overview

### Deployment
6. `GITHUB_QUICK_START.md` - Push to GitHub
7. `DEPLOYMENT.md` - Full deploy guide

### General
8. `PROJECT_STRUCTURE.md` - File organization
9. `BUILD_GUIDE.md` - Build process
10. `CONTRIBUTING.md` - Contributing guidelines

## 💻 Development Workflow

### First Time
```bash
# Download, setup, run
git clone <repo>
cd az500-measureup-exam
bash setup.sh
npm start
```

### Daily Usage
```bash
# Start developing
cd ~/Desktop/az500-measureup-exam
npm start

# Stop: Press Ctrl+C
```

### Changes & Deploy
```bash
# Make changes to code
# ...

# Commit to Git
git add .
git commit -m "Add questions"

# Push to GitHub
git push origin main

# GitHub Actions builds & deploys automatically
```

## 🎉 Success Checklist

After running setup.sh and npm start:

- [ ] No errors in Terminal
- [ ] Browser opened automatically
- [ ] Website loads at http://localhost:3000
- [ ] Can see exam questions
- [ ] Can click answer options
- [ ] Can navigate questions
- [ ] Score tracking works
- [ ] Review mode works

## 🔒 Security Notes

- ✅ No credentials in code
- ✅ Setup script is safe (auditable)
- ✅ All dependencies are official
- ✅ No telemetry or tracking
- ✅ MIT License included

## 📞 Help & Support

1. **Check Documentation**: Start with MACOS_INSTALLATION.md
2. **Search Errors**: Google exact error message + "macOS"
3. **Terminal Cheatsheet**: Check MACOS_TERMINAL_CHEATSHEET.md
4. **GitHub Issues**: Check project issues
5. **Stack Overflow**: Search your specific error

## 🎓 After Installation

Once running successfully:

1. **Practice Exam**: Take full 125-question exam
2. **Review Results**: Study explanations for wrong answers
3. **Learn Topics**: Deep dive into AZ-500 domains
4. **Retake Exam**: Practice multiple times
5. **Build for Production**: `npm run build`
6. **Deploy**: Push to GitHub Pages

## 🚀 Next Steps After Setup

```bash
# If you want to deploy to GitHub
git push origin main

# If you want to build for production
npm run build
serve -s build

# If you want to stop the server
Ctrl+C

# If you want to reinstall fresh
rm -rf node_modules package-lock.json
npm install
npm start
```

## 📖 File Reading Guide

**For First-Time Setup**: 
1. Start with `MACOS_INSTALLATION.md`
2. Then run `setup.sh`
3. Keep `MACOS_TERMINAL_CHEATSHEET.md` handy

**For Quick Help**:
1. Check `MACOS_QUICK_START.md`
2. Reference `MACOS_TERMINAL_CHEATSHEET.md`
3. Troubleshoot in `MACOS_INSTALLATION.md`

**For Deployment**:
1. Read `GITHUB_QUICK_START.md`
2. Follow `DEPLOYMENT.md`

## 💡 Pro Tips

- Use the `setup.sh` script (handles 99% of issues)
- Keep Terminal open on second monitor while developing
- Bookmark Terminal cheatsheet for quick reference
- Create aliases in `~/.zshrc` for common commands
- Use VS Code's integrated Terminal

## 🎉 You're All Set!

With these files, you can:
- ✅ Install on macOS in 5-10 minutes
- ✅ Run locally for development
- ✅ Build for production
- ✅ Deploy to GitHub Pages
- ✅ Add more questions
- ✅ Share with others

---

**Recommended First Steps:**
1. Read: `MACOS_QUICK_START.md` (5 min)
2. Run: `bash setup.sh` (5 min)
3. Start: `npm start` (instant)
4. Study: Begin AZ-500 exam prep! 🎓

Good luck with your Azure certification! 🍎🚀
