# macOS Installation Guide - AZ-500 MeasureUp Exam

Complete step-by-step installation for macOS (Intel & Apple Silicon M1/M2/M3).

## 📋 System Requirements

- **macOS**: 10.15 (Catalina) or newer
- **Processor**: Intel or Apple Silicon (M1/M2/M3)
- **RAM**: 4 GB minimum (8 GB recommended)
- **Disk Space**: 2 GB for installation
- **Internet**: Required for initial setup

## ✅ Pre-Installation Checklist

- [ ] Verify macOS version (Apple > About This Mac)
- [ ] Have admin password ready (for Homebrew)
- [ ] Stable internet connection
- [ ] 2 GB free disk space

## 🍎 Option 1: Using Homebrew (Recommended for macOS)

### Step 1: Install Homebrew (if not already installed)

```bash
# Copy and paste into Terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Expected Output**:
```
==> Downloading Homebrew installer...
==> Installing Homebrew...
==> Installation successful!
```

### Step 2: Verify Homebrew Installation

```bash
brew --version
# Should show: Homebrew 4.x.x
```

### Step 3: Install Node.js via Homebrew

```bash
brew install node
```

**Time**: 2-3 minutes
**Size**: ~200 MB

### Step 4: Verify Node.js Installation

```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: v9.x.x or higher
```

### Step 5: Clone Project from GitHub

```bash
# Navigate to where you want the project
cd ~/Desktop

# Clone the repository
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git
cd az500-measureup-exam
```

Or **manually download** from `/mnt/user-data/outputs/` and extract.

### Step 6: Install Project Dependencies

```bash
npm install
```

**Time**: 2-5 minutes
**Space**: ~500 MB

### Step 7: Start Development Server

```bash
npm start
```

**Expected Output**:
```
> Compiled successfully!
> 
> You can now view az500-measureup-exam in the browser.
> 
>   Local:            http://localhost:3000
>   On Your Network:  http://192.168.x.x:3000
```

The app will automatically open in your default browser at `http://localhost:3000`.

## 🔧 Option 2: Manual Installation (Without Homebrew)

### Step 1: Download Node.js

1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended)
3. This will download a `.pkg` file

### Step 2: Install Node.js

1. Double-click the `.pkg` file
2. Follow the installer wizard
3. Accept the license
4. Choose installation location (default is fine)
5. Enter your password when prompted
6. Click "Install"

**Time**: 2-3 minutes

### Step 3: Verify Installation

Open Terminal and run:

```bash
node --version
# Should show: v18.x.x

npm --version
# Should show: v9.x.x
```

### Step 4: Set up Project

```bash
# Create project directory
mkdir ~/az500-exam
cd ~/az500-exam

# Copy all files from /mnt/user-data/outputs/ here
# Then run:
npm install
npm start
```

## 🎯 M1/M2/M3 Apple Silicon Specific Setup

If you have an M1, M2, or M3 Mac, follow these steps:

### Method 1: Native Apple Silicon (Recommended)

```bash
# Homebrew will automatically install ARM64 versions
brew install node

# Verify it's ARM64 version
file $(which node)
# Should show: Mach-O 64-bit executable arm64
```

### Method 2: If You Have Issues with ARM64

```bash
# Install via Rosetta 2 (Intel emulation)
arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node
arch -x86_64 brew install node
```

### Verify Architecture

```bash
# Check your Mac architecture
uname -m

# Should show: arm64 (M1/M2/M3) or x86_64 (Intel)
```

## 📂 Alternative: Using Docker (Optional)

If you prefer containerized setup:

```bash
# Install Docker Desktop for Mac from: https://www.docker.com/products/docker-desktop

# Create a Dockerfile in project directory
# Then: docker build -t az500-exam .
# Then: docker run -p 3000:3000 az500-exam
```

## 🚀 First Run Checklist

After `npm start`:

- [ ] Browser opens to http://localhost:3000
- [ ] Exam questions load
- [ ] Can select answers
- [ ] Can navigate through questions
- [ ] No errors in terminal
- [ ] Can mark questions for review

## 🔨 Common macOS Setup Issues & Solutions

### Issue 1: "command not found: npm"

**Solution**:
```bash
# Check if Node is installed
which node

# If not found, install Homebrew then Node:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

# Close and reopen Terminal
```

### Issue 2: Permission Denied When Installing

**Solution**:
```bash
# Run with sudo if needed
sudo npm install -g npm

# Or fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Issue 3: Port 3000 Already in Use

**Solution**:
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### Issue 4: "npm ERR! code EACCES"

**Solution**:
```bash
# Fix npm permissions permanently
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to ~/.zshrc or ~/.bash_profile
export PATH=~/.npm-global/bin:$PATH

# Then reload
source ~/.zshrc  # or ~/.bash_profile
```

### Issue 5: M1/M2 Intel Compatibility Error

**Solution**:
```bash
# Use Rosetta 2 emulation
arch -x86_64 npm install
arch -x86_64 npm start

# Or force native ARM64
npm install --no-optional
npm start
```

### Issue 6: "Cannot find module" Error

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

### Issue 7: Xcode Command Line Tools Missing

**Solution**:
```bash
# Install Xcode Command Line Tools
xcode-select --install

# If that doesn't work
sudo xcode-select --reset
xcode-select --install
```

## 📱 IDE/Editor Setup for macOS

### Visual Studio Code (Recommended)

1. **Download**: https://code.visualstudio.com/
2. **Extract**: Drag to Applications folder
3. **Launch**: Open Applications > Visual Studio Code

**Recommended Extensions**:
```bash
# Open Extensions in VS Code and search for:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier - Code formatter
- Thunder Client (API testing)
```

**VS Code Settings** (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### WebStorm (Professional IDE)

1. Download from https://www.jetbrains.com/webstorm/
2. Install to Applications
3. Open project folder
4. Dependencies auto-install

### Sublime Text (Lightweight)

1. Download from https://www.sublimetext.com/
2. Install to Applications
3. Use for quick editing

## 🌐 Using Terminal Effectively on macOS

### Open Terminal Quickly

```bash
# Method 1: Spotlight search
Cmd + Space → type "Terminal" → Enter

# Method 2: Finder
Applications > Utilities > Terminal

# Method 3: iTerm2 (optional)
brew install iterm2
```

### Essential Terminal Commands

```bash
# Navigate to project
cd ~/Desktop/az500-measureup-exam

# Start development server
npm start

# Create production build
npm run build

# View file contents
cat package.json

# List files
ls -la

# Create new directory
mkdir my-folder

# Change directory up one level
cd ..

# Show current directory
pwd

# Copy files
cp -r src/ backup/

# Remove files/folders
rm -rf node_modules
```

### Custom Terminal Aliases (Optional)

Add to `~/.zshrc` (macOS default shell):

```bash
# Edit with nano
nano ~/.zshrc

# Add these aliases
alias start="npm start"
alias build="npm run build"
alias install="npm install"
alias azexam="cd ~/Desktop/az500-measureup-exam && npm start"

# Save: Ctrl+O → Enter → Ctrl+X

# Reload shell
source ~/.zshrc
```

Now you can just type `azexam` to start!

## 📦 Managing Node.js Versions

### Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.zshrc

# Install specific Node version
nvm install 18
nvm use 18

# Check version
node --version
```

### Using Homebrew to Update Node

```bash
# Check current version
brew list node

# Update
brew upgrade node

# Verify
node --version
```

## 🚀 Building for Deployment

### Create Optimized Production Build

```bash
npm run build
```

**Output**: `build/` directory (ready to deploy)

### Test Production Build Locally

```bash
# Install serve globally (optional)
npm install -g serve

# Serve production build
serve -s build

# Open: http://localhost:3000
```

### Deploy to GitHub Pages

```bash
# Push to main branch
git add .
git commit -m "Deploy: AZ-500 exam"
git push origin main

# GitHub Actions builds and deploys automatically
# Live at: username.github.io/az500-measureup-exam
```

## 🔐 Security Tips for macOS

- ✅ Always use `https://` URLs
- ✅ Don't store credentials in code
- ✅ Use `.env.local` for secrets (in .gitignore)
- ✅ Keep Node.js updated: `brew upgrade node`
- ✅ Use strong GitHub passwords or personal access tokens

## 🆘 Advanced Troubleshooting

### Check npm Modules Location

```bash
npm list -g
npm list  # Current project
```

### View npm Configuration

```bash
npm config list
npm config get prefix
```

### Clear npm Cache Completely

```bash
npm cache verify
npm cache clean --force
rm -rf ~/Library/Caches/npm
```

### Reinstall Everything Fresh

```bash
# Navigate to project directory
cd ~/Desktop/az500-measureup-exam

# Remove everything
rm -rf node_modules package-lock.json

# Clear cache
npm cache clean --force

# Reinstall
npm install

# Start fresh
npm start
```

### Check Disk Space

```bash
df -h
# Look for / (root) with plenty of free space
```

### Monitor Resource Usage

```bash
# Open Activity Monitor
# Press Cmd+Space, type "Activity Monitor"
# Monitor CPU, Memory, Disk usage while running npm start
```

## 📚 Learning Resources for macOS Development

- **Terminal Guide**: https://support.apple.com/en-us/HT201236
- **Homebrew Docs**: https://docs.brew.sh/
- **Node.js Docs**: https://nodejs.org/docs/
- **npm Docs**: https://docs.npmjs.com/
- **React Docs**: https://react.dev/
- **VS Code Docs**: https://code.visualstudio.com/docs

## ✅ Complete Setup Verification

After installation, verify everything:

```bash
# 1. Check Node and npm
node --version   # v18.x or higher
npm --version    # v9.x or higher

# 2. Check project directory
ls -la
# Should show: src/, public/, package.json, etc.

# 3. Check dependencies installed
ls -la node_modules | head -10

# 4. Check npm scripts available
npm run

# 5. Start app
npm start

# 6. Test in browser
# Open http://localhost:3000
# Should see exam questions
```

## 🎉 You're All Set!

Your macOS development environment is ready for:
- ✅ Local development (`npm start`)
- ✅ Production builds (`npm run build`)
- ✅ Git/GitHub integration
- ✅ Terminal-based workflows

## Quick Reference Card

```bash
# Installation (one-time)
brew install node
npm install

# Daily Usage
npm start                    # Run dev server
npm run build               # Create production build
npm test                    # Run tests
Ctrl+C                      # Stop server
npm run build && npm test   # Full workflow

# GitHub
git status                  # Check changes
git add .                   # Stage all changes
git commit -m "message"     # Commit
git push origin main        # Push to GitHub

# Troubleshooting
npm cache clean --force     # Clear cache
rm -rf node_modules         # Remove dependencies
npm install                 # Reinstall fresh
sudo chown -R $(whoami) ~/.npm  # Fix permissions
```

## 🆘 Need More Help?

1. **Check logs**: Look at terminal error messages carefully
2. **Search errors**: Google the exact error message
3. **Check documentation**: README.md, INSTALLATION.md
4. **Community**: Stack Overflow, GitHub Issues
5. **macOS Support**: Apple Support Community

---

**macOS installation complete!** 🍎

You're ready to:
1. Run locally: `npm start`
2. Build production: `npm run build`
3. Deploy to GitHub
4. Prepare for AZ-500 certification

Good luck with your exam prep! 📚
