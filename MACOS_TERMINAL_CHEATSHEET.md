# macOS Terminal Cheat Sheet for AZ-500 Exam

Quick reference for Terminal commands on macOS.

## 🍎 Opening Terminal

| Method | Steps |
|--------|-------|
| **Spotlight** | Cmd+Space → type "Terminal" → Enter |
| **Finder** | Applications > Utilities > Terminal |
| **Keyboard** | Cmd+` (in some apps) |
| **Alfred** | Cmd+Space → type "terminal" (if using Alfred) |

## 📂 Navigation Commands

```bash
pwd                          # Print working directory (show where you are)
ls                          # List files in current directory
ls -la                      # List all files with details
cd ~                        # Go to home directory
cd Desktop                  # Go to Desktop folder
cd ~/Desktop/az500-exam     # Go to specific folder
cd ..                       # Go up one directory level
cd -                        # Go to previous directory
mkdir my-folder             # Create new folder
rmdir my-folder             # Remove empty folder
```

## 🚀 Project Commands

```bash
# Installation
npm install                 # Install dependencies
npm install -g <package>    # Install globally
brew install <package>      # Install via Homebrew

# Running
npm start                   # Start development server (port 3000)
PORT=3001 npm start        # Start on different port
npm run build              # Create production build
npm test                   # Run tests

# Management
npm list                   # List installed packages
npm outdated               # Show outdated packages
npm update                 # Update packages
npm uninstall <package>    # Remove package
npm cache clean --force    # Clear npm cache
```

## 🔧 Git Commands

```bash
# Setup
git init                           # Initialize repository
git config user.name "Your Name"   # Set username
git config user.email "your@email" # Set email

# Daily workflow
git status                  # Check status
git add .                  # Stage all changes
git add filename           # Stage specific file
git commit -m "message"    # Commit with message
git push origin main       # Push to GitHub
git pull origin main       # Pull from GitHub
git clone <url>            # Clone repository

# Branching
git branch                 # List branches
git branch -M main         # Rename to main
git checkout -b feature    # Create new branch
git merge feature           # Merge branch

# History
git log                    # Show commit history
git log --oneline          # Compact history
git diff                   # Show changes
```

## 📝 File Management

```bash
# View files
cat filename               # View file contents
less filename              # View file (paginated)
head -n 20 filename        # Show first 20 lines
tail -n 10 filename        # Show last 10 lines
grep "text" filename       # Search in file

# Edit files
nano filename              # Edit in nano editor
vim filename               # Edit in vim editor
# Nano: Ctrl+O to save, Ctrl+X to exit
# Vim: i to insert, Esc to exit, :wq to save

# Copy/Move
cp filename copy.txt       # Copy file
cp -r folder/ backup/      # Copy folder
mv filename newname        # Move/rename file
rm filename                # Delete file
rm -rf folder/             # Delete folder (careful!)

# Permissions
chmod +x script.sh         # Make executable
chmod 644 file.txt         # Change permissions
```

## 🔍 Search & Find

```bash
find . -name "*.jsx"       # Find all .jsx files
find . -type f -name "*.md" # Find markdown files
grep -r "text" .           # Search all files for text
which npm                  # Find npm location
whereis node               # Find node location
```

## 🛠️ System Commands

```bash
# Information
uname -m                   # Check architecture (arm64 or x86_64)
uname -r                   # Show OS version
softwareupdate -l          # Check for updates
system_profiler SPHardwareDataType  # Hardware info

# Disk/Memory
df -h                      # Show disk usage
du -sh *                   # Show folder sizes
top                        # Show running processes
ps aux                     # List all processes

# Network
ping google.com            # Test connection
ifconfig                   # Show IP addresses
curl https://example.com   # Download file from URL
wget https://example.com   # Alternative download
```

## 🚪 Process Management

```bash
# Find process
lsof -i :3000              # Find what's on port 3000
ps aux | grep npm          # Find npm processes

# Kill process
kill -9 <PID>              # Kill process by ID
killall node                # Kill all node processes
Ctrl+C                     # Stop current process (in Terminal)

# Background processes
command &                  # Run in background
jobs                       # List background jobs
fg                         # Bring to foreground
bg                         # Resume in background
```

## 📦 Homebrew Commands

```bash
# Installation
brew install node          # Install Node.js
brew install yarn          # Install Yarn
brew install git           # Install Git

# Management
brew list                  # List installed packages
brew outdated              # Show outdated packages
brew upgrade               # Update all packages
brew upgrade node          # Update specific package
brew uninstall node        # Uninstall package
brew cleanup               # Remove old versions

# Information
brew doctor                # Check Homebrew health
brew search text           # Search for package
brew info node             # Show package info
```

## 💻 NPM Specific

```bash
# Configuration
npm config list            # Show configuration
npm config get prefix      # Show npm prefix
npm config set prefix ~/.npm-global  # Change prefix

# Cache
npm cache clean --force    # Clear cache
npm cache verify           # Verify cache

# Global packages
npm list -g                # List global packages
npm install -g npm@latest  # Update npm itself
npm root -g                # Show global folder location

# Versions
npm --version              # Show npm version
node --version             # Show node version
npm view <package> version # Check package version
```

## 🔐 Security & Permissions

```bash
# File permissions
chmod 755 script.sh        # Make executable
chmod 644 file.txt         # Read/write for owner
sudo chmod -R u+w folder/  # Recursive permissions

# Fixing npm permissions
sudo chown -R $(whoami) ~/.npm
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Password/sudo
sudo command               # Run as administrator
sudo -i                    # Switch to root
whoami                     # Show current user
```

## 📝 Text Editing in Terminal

### Nano (Easy)
```
Ctrl+O    → Save
Ctrl+X    → Exit
Ctrl+K    → Cut line
Ctrl+U    → Paste
Ctrl+W    → Search
Ctrl+A    → Start of line
Ctrl+E    → End of line
```

### Vim (Advanced)
```
i         → Insert mode
Esc       → Normal mode
:w        → Save
:q        → Quit
:wq       → Save & quit
:q!       → Quit without saving
dd        → Delete line
yy        → Copy line
p         → Paste
/text     → Search
```

## 📊 Useful Aliases for AZ-500 Project

Add to `~/.zshrc` or `~/.bash_profile`:

```bash
# Open in nano
nano ~/.zshrc

# Add these lines
alias start="npm start"
alias build="npm run build"
alias test="npm test"
alias install="npm install"
alias azexam="cd ~/Desktop/az500-measureup-exam && npm start"
alias azrepo="cd ~/Desktop/az500-measureup-exam"

# Save: Ctrl+O, Enter, Ctrl+X
# Reload: source ~/.zshrc
```

Now use: `azexam` or `azrepo` instead of full paths!

## 🐛 Debugging Tips

```bash
# Clear screen
clear

# Show command history
history

# Show last command
!!

# Show last command starting with 'npm'
!npm

# See errors in detail
npm start 2>&1 | tee output.log

# Check what went wrong
tail -n 50 output.log
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+C | Stop current process |
| Ctrl+Z | Suspend process |
| Ctrl+A | Go to start of line |
| Ctrl+E | Go to end of line |
| Ctrl+K | Clear to end of line |
| Ctrl+U | Clear to start of line |
| Ctrl+L | Clear screen (same as `clear`) |
| Cmd+K | Clear screen (macOS Terminal) |
| Cmd+V | Paste |
| Cmd+C | Copy |
| Tab | Auto-complete |
| Up Arrow | Previous command |
| Down Arrow | Next command |

## 🔗 Path Examples

```bash
# Home directory
~

# Current directory
.

# Parent directory
..

# Root
/

# Desktop
~/Desktop

# Downloads
~/Downloads

# Project folder
~/Desktop/az500-measureup-exam
~/project/node_modules
```

## 📌 Frequently Used Commands

### For AZ-500 Exam Project

```bash
# First time setup
cd ~/Desktop
git clone https://github.com/YOUR_USERNAME/az500-measureup-exam.git
cd az500-measureup-exam
npm install
npm start

# Daily development
cd ~/Desktop/az500-measureup-exam
npm start

# Make changes and push to GitHub
git status
git add .
git commit -m "Add 10 new questions"
git push origin main

# Build for deployment
npm run build

# Stop running server
Ctrl+C

# Clear everything and restart
rm -rf node_modules package-lock.json
npm install
npm start
```

## 🆘 Quick Troubleshooting

```bash
# npm not found
which npm
# If not found: brew install node

# Port 3000 in use
lsof -i :3000
kill -9 <PID>

# Dependencies missing
npm install

# Need to update
brew upgrade node

# Check versions
node --version
npm --version

# Permission issues
sudo chown -R $(whoami) ~/.npm

# Still stuck?
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 💡 Pro Tips

1. **Use `cd` with tab completion**: Type `cd De` + Tab → autocompletes to `cd Desktop/`
2. **Repeat commands quickly**: Press Up arrow to previous commands
3. **Pipe commands together**: `npm run build && npm test && git push`
4. **Run in background**: `npm start &` then type `fg` to bring back
5. **Check if port is free**: `lsof -i :3000` before starting

## 📚 Learn More

- Terminal man pages: `man npm`, `man git`, `man ls`
- Quick manual: `command --help`
- Online: MacOS Terminal User Manual on Apple Support

---

**Save this cheat sheet!** Bookmark or print for quick reference while developing.

Good luck with your AZ-500 exam prep! 🚀
