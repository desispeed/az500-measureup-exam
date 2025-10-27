#!/bin/bash

# AZ-500 MeasureUp Exam - macOS Setup Script
# Automates Node.js, npm, and project installation
# Run: bash setup.sh

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   AZ-500 MeasureUp Exam - macOS Automated Setup              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running on macOS
if [[ ! "$OSTYPE" == "darwin"* ]]; then
    echo -e "${RED}Error: This script is for macOS only${NC}"
    exit 1
fi

echo "🍎 macOS Setup for AZ-500 Practice Exam"
echo ""

# Step 1: Check if Homebrew is installed
echo "Step 1: Checking Homebrew..."
if ! command -v brew &> /dev/null; then
    echo -e "${YELLOW}Homebrew not found. Installing...${NC}"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    echo -e "${GREEN}✓ Homebrew installed${NC}"
else
    echo -e "${GREEN}✓ Homebrew already installed$(brew --version)${NC}"
fi

# Step 2: Install Node.js if not present
echo ""
echo "Step 2: Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js not found. Installing via Homebrew...${NC}"
    brew install node
    echo -e "${GREEN}✓ Node.js installed${NC}"
else
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js already installed: $NODE_VERSION${NC}"
fi

# Step 3: Verify npm
echo ""
echo "Step 3: Verifying npm..."
NPM_VERSION=$(npm --version)
echo -e "${GREEN}✓ npm version: $NPM_VERSION${NC}"

# Step 4: Check Node version (need 14+)
echo ""
echo "Step 4: Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo -e "${RED}Error: Node.js v14 or higher required (you have v$NODE_VERSION)${NC}"
    echo "Run: brew upgrade node"
    exit 1
fi
echo -e "${GREEN}✓ Node.js version compatible (v$NODE_VERSION)${NC}"

# Step 5: Check if in project directory
echo ""
echo "Step 5: Checking project files..."
if [ ! -f "package.json" ]; then
    echo -e "${YELLOW}package.json not found in current directory${NC}"
    echo "Make sure you're in the az500-measureup-exam directory"
    echo "Usage: cd ~/path/to/az500-measureup-exam && bash setup.sh"
    exit 1
fi
echo -e "${GREEN}✓ Project files found${NC}"

# Step 6: Install npm dependencies
echo ""
echo "Step 6: Installing npm dependencies..."
echo "This may take 2-5 minutes..."
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Step 7: Verify installation
echo ""
echo "Step 7: Verifying installation..."
if [ ! -d "node_modules" ]; then
    echo -e "${RED}Error: node_modules directory not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Installation verified${NC}"

# Summary
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                 ✅ Setup Complete!                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "📊 Installation Summary:"
echo "  - macOS: ✓"
echo "  - Node.js: ✓ $(node --version)"
echo "  - npm: ✓ $(npm --version)"
echo "  - Dependencies: ✓ Installed"
echo ""
echo "🚀 Next Steps:"
echo ""
echo "1. Start the development server:"
echo "   ${GREEN}npm start${NC}"
echo ""
echo "2. Open your browser to: http://localhost:3000"
echo ""
echo "3. Begin practicing for AZ-500 certification!"
echo ""
echo "📚 Other useful commands:"
echo "   ${GREEN}npm run build${NC}  - Create production build"
echo "   ${GREEN}npm test${NC}       - Run tests"
echo ""
echo "📖 For more help, see:"
echo "   - MACOS_INSTALLATION.md (detailed guide)"
echo "   - README.md (project overview)"
echo "   - GITHUB_QUICK_START.md (deploy to GitHub)"
echo ""
echo "Good luck with your AZ-500 exam prep! 🎓"
echo ""
