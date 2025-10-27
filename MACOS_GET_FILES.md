# macOS: How to Get All Installation Files

The installation files exist on our server but `/mnt/user-data/outputs/` is not accessible from your macOS machine. Here's how to get them:

## 🍎 Option 1: Download Directly from Browser (EASIEST)

All files are available as **individual downloads**:

### Core Application Files
```
📄 src/App.jsx
📄 src/index.js
📄 src/index.css
📄 public/index.html
```

### Configuration Files
```
📄 package.json
📄 tailwind.config.js
📄 postcss.config.js
📄 .gitignore
📄 .env.example
```

### Setup & Documentation
```
📄 setup.sh
📄 MACOS_QUICK_START.md
📄 MACOS_INSTALLATION.md
📄 MACOS_TERMINAL_CHEATSHEET.md
📄 README.md
📄 LICENSE
```

### GitHub CI/CD
```
📄 .github/workflows/build-deploy.yml
```

---

## 🚀 Option 2: Create Files Locally on macOS (FASTEST)

If you have access to view these files online, copy the content and create them locally:

### Step 1: Create Project Directory

```bash
mkdir -p ~/Desktop/az500-measureup-exam
cd ~/Desktop/az500-measureup-exam

# Create subdirectories
mkdir -p src public .github/workflows
```

### Step 2: Create Core Files

**Create `src/App.jsx`** - Copy the exam component code:
```bash
cat > src/App.jsx << 'EOF'
[PASTE ENTIRE App.jsx CONTENT HERE]
EOF
```

**Create `src/index.js`**:
```bash
cat > src/index.js << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF
```

**Create `src/index.css`**:
```bash
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOF
```

**Create `public/index.html`**:
```bash
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Azure AZ-500 Security Engineer Practice Exam"
    />
    <title>AZ-500 MeasureUp Practice Exam</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
EOF
```

### Step 3: Create Configuration Files

**Create `package.json`**:
```bash
cat > package.json << 'EOF'
{
  "name": "az500-measureup-exam",
  "version": "1.0.0",
  "description": "Azure AZ-500 Security Engineer Associate Practice Exam",
  "private": true,
  "homepage": ".",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.294.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
EOF
```

**Create `tailwind.config.js`**:
```bash
cat > tailwind.config.js << 'EOF'
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
EOF
```

**Create `postcss.config.js`**:
```bash
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
```

**Create `.gitignore`**:
```bash
cat > .gitignore << 'EOF'
/node_modules
/.pnp
.pnp.js
/coverage
/build
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.vscode/
.idea/
*.swp
*.swo
*~
Thumbs.db
EOF
```

**Create `.env.example`**:
```bash
cat > .env.example << 'EOF'
REACT_APP_ENV=development
REACT_APP_ENABLE_ANALYTICS=false
REACT_APP_ENABLE_LOGGING=true
EOF
```

### Step 4: Create Documentation Files

Create these important files in root directory:

**Create `README.md`**:
```bash
# Download from browser or copy content
curl -o README.md https://[your-server]/README.md
```

**Create `MACOS_QUICK_START.md`**:
```bash
curl -o MACOS_QUICK_START.md https://[your-server]/MACOS_QUICK_START.md
```

**Create `setup.sh`** (Automated installer):
```bash
cat > setup.sh << 'EOF'
#!/bin/bash
# [Paste setup.sh content here]
EOF
chmod +x setup.sh
```

### Step 5: Create GitHub CI/CD (Optional)

```bash
mkdir -p .github/workflows

cat > .github/workflows/build-deploy.yml << 'EOF'
name: Build and Deploy

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
EOF
```

### Step 6: Create LICENSE

```bash
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2025 AZ-500 MeasureUp Exam Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
[Full MIT License text]
EOF
```

---

## ✅ Verify Files Created

```bash
# Navigate to project
cd ~/Desktop/az500-measureup-exam

# Check all files exist
ls -la
tree  # If you have tree installed

# Should see:
# ├── .github/
# ├── public/
# ├── src/
# ├── package.json
# ├── setup.sh
# └── [other config files]
```

---

## 🚀 Now Run Setup

```bash
# Make setup script executable (if created)
chmod +x setup.sh

# Run automated setup
bash setup.sh

# Or manual setup
npm install
npm start
```

---

## 📥 Alternative: Git Clone (If Already Pushed to GitHub)

If you already have the files on GitHub:

```bash
cd ~/Desktop
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git
cd az500-measureup-exam
bash setup.sh
npm start
```

---

## 💡 Easiest Method: Download as ZIP

If all files are in the outputs directory, we can create a ZIP for easy download:

```bash
# Request ZIP file with all contents
# Files will be: az500-measureup-exam.zip
# Download and extract on macOS
```

**After download on macOS:**
```bash
cd ~/Downloads
unzip az500-measureup-exam.zip
cd az500-measureup-exam
bash setup.sh
npm start
```

---

## 🎯 What You Need (Minimum)

To get the exam running, you MUST have:

1. **`src/App.jsx`** - The exam component (contains 125 questions)
2. **`src/index.js`** - React entry point
3. **`src/index.css`** - Styles
4. **`public/index.html`** - HTML template
5. **`package.json`** - Dependencies
6. **`setup.sh`** - Setup script

That's 6 files minimum! Everything else is optional.

---

## 📝 File Content References

All files available for copy from our server or downloaded individually. Here's what each contains:

| File | Lines | Purpose |
|------|-------|---------|
| src/App.jsx | 300+ | Main exam component |
| src/index.js | 10 | React entry |
| src/index.css | 20 | Global styles |
| public/index.html | 20 | HTML template |
| package.json | 30 | Dependencies |
| setup.sh | 100 | macOS installer |
| tailwind.config.js | 20 | Tailwind config |
| postcss.config.js | 5 | CSS processing |

---

## 🆘 Stuck Getting Files?

### Option 1: Request ZIP File
Ask for `az500-measureup-exam.zip` - single file download

### Option 2: Git Clone
Push to GitHub, then: `git clone https://github.com/your-repo.git`

### Option 3: Individual File Downloads
Download each file from browser one at a time

### Option 4: Copy-Paste Method
Copy file contents from browser, paste into Terminal with `cat > filename << 'EOF'`

---

## ✨ Once Files are Local

```bash
cd ~/Desktop/az500-measureup-exam

# Install Homebrew and Node (if needed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node

# Run setup
bash setup.sh

# Start exam
npm start
```

---

## 📚 Documentation Files (Optional but Helpful)

Download these for reference:
- `MACOS_QUICK_START.md` - 10-minute setup guide
- `MACOS_INSTALLATION.md` - Complete guide with troubleshooting
- `MACOS_TERMINAL_CHEATSHEET.md` - Terminal commands
- `README.md` - Project overview

---

## 🎉 Quick Summary

**Your Situation**: Files exist on server, need to get to macOS

**Your Options**:
1. ✅ **Fastest**: Download ZIP file, extract, run `bash setup.sh`
2. ✅ **GitHub**: Clone from GitHub repo
3. ✅ **Manual**: Create files locally using commands above
4. ✅ **Download**: Individual file downloads

**Next Steps**:
1. Get all files to `~/Desktop/az500-measureup-exam/`
2. Run: `bash setup.sh`
3. Run: `npm start`
4. Start studying! 🎓

---

**Need the ZIP file?** Ask for `az500-measureup-exam.zip` - all files packaged and ready to download!

Good luck with your AZ-500 prep! 🍎🚀
