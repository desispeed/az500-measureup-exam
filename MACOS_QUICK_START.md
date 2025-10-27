# macOS Quick Start (10 Minutes)

Get the AZ-500 exam running on macOS in 10 minutes!

## 🍎 Fastest Path: Using the Setup Script

### Step 1: Download Project (2 min)

**Option A: From GitHub**
```bash
# Open Terminal (Cmd+Space, type "Terminal", Enter)
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git
cd az500-measureup-exam
```

**Option B: Manual Download**
1. Download files from `/mnt/user-data/outputs/`
2. Extract to Desktop
3. Open Terminal and navigate:
   ```bash
   cd ~/Desktop/az500-measureup-exam
   ```

### Step 2: Run Setup Script (5 min)

```bash
bash setup.sh
```

The script automatically:
- ✅ Installs Homebrew (if needed)
- ✅ Installs Node.js (if needed)
- ✅ Installs all dependencies
- ✅ Verifies everything works

### Step 3: Start Exam (1 min)

```bash
npm start
```

Browser opens automatically to `http://localhost:3000` 🎉

---

## 📝 Manual Setup (if script doesn't work)

### 1. Install Node.js (3 min)

```bash
# Install Homebrew first (if you don't have it)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify
node --version  # Should be v18+
npm --version   # Should be v9+
```

### 2. Install Project Dependencies (3 min)

```bash
# Navigate to project
cd ~/Desktop/az500-measureup-exam

# Install dependencies
npm install
```

### 3. Start Development Server (1 min)

```bash
npm start
```

Done! Browser will open automatically.

---

## ⚡ Super Quick (If You Already Have Node.js)

```bash
# Download project
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git
cd az500-measureup-exam

# Install and run
npm install && npm start
```

That's it! 🚀

---

## 🆘 If Something Goes Wrong

### "command not found: npm"
```bash
# Install Node.js
brew install node

# Close Terminal and reopen it
# Then try again
```

### "Port 3000 already in use"
```bash
# Use different port
PORT=3001 npm start
```

### "Permission denied"
```bash
# Fix permissions
sudo chown -R $(whoami) ~/.npm
npm install
```

### "M1/M2 compatibility issue"
```bash
# Use Rosetta emulation
arch -x86_64 npm install
arch -x86_64 npm start
```

### Completely restart from scratch
```bash
# Remove everything and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

---

## 🎯 Check It's Working

After running `npm start`, verify:

- ✅ Browser opens to `http://localhost:3000`
- ✅ You see exam questions
- ✅ Can click answer options
- ✅ Can navigate between questions
- ✅ No red errors in Terminal

---

## 📦 What Gets Installed

| Component | Size | Time |
|-----------|------|------|
| Homebrew | 100 MB | 2 min |
| Node.js | 200 MB | 1 min |
| Dependencies | 500 MB | 2-5 min |
| **Total** | **800 MB** | **5-8 min** |

---

## 🌐 Access Your Exam

- **Local**: http://localhost:3000
- **Network**: http://192.168.x.x:3000
- **Stop Server**: Press `Ctrl+C` in Terminal

---

## 📚 Next Steps

After exam loads:

1. **Take Practice Exam**
   - Answer 125 questions
   - Review results
   - Study explanations

2. **Build for Deployment** (optional)
   ```bash
   npm run build
   ```

3. **Deploy to GitHub** (optional)
   ```bash
   git push origin main
   # Deploys automatically to username.github.io/az500-measureup-exam
   ```

---

## 🍎 Terminal Tips for macOS

### Open Terminal
- **Spotlight**: Cmd+Space → type "Terminal" → Enter
- **Finder**: Applications > Utilities > Terminal
- **Keyboard**: Cmd+Space, ⌘`

### Common Commands
```bash
pwd              # Show current directory
ls               # List files
cd Desktop       # Change directory
cd ..            # Go up one level
clear            # Clear screen
cat filename     # View file contents
```

### Stop Running App
Press `Ctrl+C` in Terminal (not Cmd+C!)

---

## 🚀 For M1/M2/M3 Macs

The setup script handles this automatically! If you have issues:

```bash
# Check your Mac type
uname -m
# arm64 = M1/M2/M3 (native)
# x86_64 = Intel

# If ARM64 issues, use Rosetta
arch -x86_64 npm install
arch -x86_64 npm start
```

---

## ⏱️ Timeline

- **Homebrew install**: 1-2 min
- **Node.js install**: 1-2 min  
- **Dependencies**: 2-5 min
- **Start server**: <1 min
- **Total**: 5-10 min

---

## 💾 File Locations on macOS

```bash
# Your project
~/Desktop/az500-measureup-exam/

# Node modules (auto-created)
~/Desktop/az500-measureup-exam/node_modules/

# npm cache
~/Library/Caches/npm/

# Global npm packages
~/.npm-global/
```

---

## 🎉 Success Indicators

You'll know it's working when you see:

```
Compiled successfully!

You can now view az500-measureup-exam in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

---

## 📞 Help Resources

- **Detailed Guide**: `MACOS_INSTALLATION.md`
- **Project Overview**: `README.md`
- **GitHub Deployment**: `GITHUB_QUICK_START.md`
- **Troubleshooting**: Search the error message + "macOS"

---

## One-Liner Install (Brave Users)

```bash
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git && cd az500-measureup-exam && bash setup.sh && npm start
```

---

**That's it!** You're now ready to ace your AZ-500 certification prep! 🚀📚

Estimated Total Time: **10 minutes**
