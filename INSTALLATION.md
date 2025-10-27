# Installation Guide

## System Requirements

- **Node.js**: v14.0 or higher
- **npm**: v6.0 or higher (or yarn v1.22+)
- **OS**: Windows, macOS, or Linux
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## Step-by-Step Installation

### 1. Install Node.js

#### Windows
1. Download from https://nodejs.org/
2. Run the installer
3. Follow installation wizard
4. Choose "Add to PATH" during installation
5. Restart your computer

#### macOS
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

### 2. Verify Installation

```bash
node --version    # Should show v14.0 or higher
npm --version     # Should show v6.0 or higher
```

### 3. Clone Repository

```bash
# Using HTTPS
git clone https://github.com/yourusername/az500-measureup-exam.git
cd az500-measureup-exam

# Or using SSH (if you have SSH key configured)
git clone git@github.com:yourusername/az500-measureup-exam.git
cd az500-measureup-exam
```

### 4. Install Dependencies

```bash
npm install
```

This installs all required packages:
- React 18.2.0
- React DOM 18.2.0
- Lucide React (icons)
- React Scripts (build tools)
- Tailwind CSS (styling)

**Installation Time**: 2-5 minutes

**Disk Space**: ~500 MB for node_modules

### 5. Start Development Server

```bash
npm start
```

The application will:
1. Start the development server
2. Open http://localhost:3000 in your browser
3. Enable hot reload (changes refresh automatically)

**Expected Output**:
```
Compiled successfully!

You can now view az500-measureup-exam in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## Using Yarn (Alternative)

If you prefer yarn over npm:

```bash
# Install yarn globally
npm install -g yarn

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Option 1: Use different port
PORT=3001 npm start

# Option 2: Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Module Not Found Errors

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### npm ERR! code EACCES (Permission Denied)

```bash
# Change npm's default directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Then reinstall
npm install -g npm
```

### Node version issues

```bash
# Check Node version
node --version

# Update Node
# Windows: Use installer from nodejs.org
# macOS: brew upgrade node
# Linux: sudo apt-get upgrade nodejs

# Use Node Version Manager (optional)
# https://github.com/nvm-sh/nvm
nvm install 18
nvm use 18
```

## Production Build

### Create Optimized Build

```bash
npm run build
```

Output will be in `build/` directory (~150 KB gzipped)

### Preview Production Build Locally

```bash
npm install -g serve
serve -s build
```

Then open http://localhost:3000

### Deploy to GitHub Pages

1. Update `homepage` in package.json:
```json
"homepage": "https://yourusername.github.io/az500-measureup-exam"
```

2. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## IDE/Editor Setup (Optional)

### Visual Studio Code (Recommended)

1. Install from https://code.visualstudio.com/
2. Install extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - ESLint
   - Prettier Code Formatter

3. Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### WebStorm

- Open project folder
- Dependencies auto-install
- Built-in npm support
- Built-in Tailwind CSS support

## Environment Configuration

### Development Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` for your settings:
```
REACT_APP_ENV=development
REACT_APP_ENABLE_ANALYTICS=false
```

## Verification

After installation, verify everything works:

1. **Run application**: `npm start`
2. **Check console**: No errors should appear
3. **Test functionality**:
   - Load exam
   - Select answer
   - Mark question
   - Navigate through questions
   - View results
   - Review answers

## Next Steps

1. **Read README.md** - Understand project structure
2. **Run npm start** - Start using the exam
3. **Read CONTRIBUTING.md** - If contributing
4. **Check GitHub Issues** - See current work

## Getting Help

- **Documentation**: Check README.md
- **Troubleshooting**: See this guide
- **Issues**: https://github.com/yourusername/az500-measureup-exam/issues
- **Discussions**: https://github.com/yourusername/az500-measureup-exam/discussions

## Updating Project

```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm update

# Reinstall if major changes
rm -rf node_modules
npm install
```

## Uninstalling

```bash
# Remove project folder
rm -rf az500-measureup-exam

# Optional: Uninstall Node.js
# Windows: Control Panel > Programs > Uninstall
# macOS: rm -rf /usr/local/bin/node /usr/local/bin/npm
# Linux: sudo apt-get remove nodejs npm
```

---

**Congratulations!** You're now ready to use the AZ-500 MeasureUp Exam application. 🎉

For next steps, see README.md and start preparing for your AZ-500 certification!
