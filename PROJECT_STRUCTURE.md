# Project Structure & File Guide

## 📁 Complete File Organization

```
az500-measureup-exam/
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── build-deploy.yml          # GitHub Actions CI/CD configuration
│
├── 📂 public/
│   └── index.html                   # HTML entry point for React app
│
├── 📂 src/
│   ├── App.jsx                      # Main React component (exam application)
│   ├── index.js                     # React entry point
│   └── index.css                    # Global styles with Tailwind CSS
│
├── 📂 node_modules/                 # Dependencies (generated, don't commit)
│   └── (auto-generated)
│
├── 📄 package.json                  # Project dependencies and scripts
├── 📄 package-lock.json             # Locked dependency versions (auto-generated)
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration for Tailwind
│
├── 📄 .gitignore                    # Files to exclude from Git
├── 📄 .env.example                  # Environment variables template
│
├── 📄 README.md                     # Main project documentation
├── 📄 INSTALLATION.md               # Detailed installation instructions
├── 📄 DEPLOYMENT.md                 # GitHub deployment guide
├── 📄 CONTRIBUTING.md               # Contribution guidelines
├── 📄 LICENSE                       # MIT License
└── 📄 PROJECT_STRUCTURE.md          # This file
```

## 📋 Key Files Explanation

### Configuration Files

#### `package.json`
**Purpose**: Defines project metadata and dependencies
**What to modify**: 
- Project name/description
- Version number
- Homepage URL
- Dependencies (rarely needed)

```json
{
  "name": "az500-measureup-exam",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "lucide-react": "^0.294.0"
  }
}
```

#### `tailwind.config.js`
**Purpose**: Tailwind CSS configuration
**What to modify**: Colors, fonts, spacing if customizing design

#### `postcss.config.js`
**Purpose**: PostCSS configuration (processes Tailwind)
**Don't modify** unless you know what you're doing

#### `.gitignore`
**Purpose**: Tells Git which files to ignore
**Pre-configured for**: node_modules, build artifacts, OS files, IDE settings

#### `.env.example`
**Purpose**: Template for environment variables
**Use**: Copy to `.env.local` and add your settings

### Documentation Files

#### `README.md` ⭐ MOST IMPORTANT
**Purpose**: First thing people see on GitHub
**Contains**: 
- Project description
- Features list
- Installation instructions
- Usage guide
- Technologies used
- Contributing guidelines
- Licensing info

**Keep updated** when adding major features

#### `INSTALLATION.md`
**Purpose**: Detailed step-by-step installation
**For users** who need help getting started
**Includes**: Troubleshooting section

#### `DEPLOYMENT.md`
**Purpose**: Guide to deploy on GitHub/GitHub Pages
**Covers**: 
- Creating GitHub repo
- Pushing code
- Setting up CI/CD
- Enabling GitHub Pages
- Sharing the project

#### `CONTRIBUTING.md`
**Purpose**: Guide for people wanting to contribute
**Includes**:
- Code of conduct
- How to report bugs
- How to add questions
- Pull request process
- Testing guidelines

#### `LICENSE`
**Purpose**: Legal terms (MIT License)
**Don't modify** unless changing license type

### Source Code Files

#### `src/App.jsx` ⭐ MAIN APPLICATION
**Purpose**: Main React component containing entire exam
**Contains**:
- `createQuestion()` - Question factory function
- `generateQuestions()` - All 125 exam questions
- `MeasureUpAZ500Exam()` - Main React component
- All exam logic (state, event handlers, rendering)

**Structure**:
```jsx
// 1. Question creation utility
const createQuestion = (id, question, correct, wrong, explanation, detailed, objectives) => { ... }

// 2. Question data (125 questions)
const generateQuestions = () => {
  return [
    createQuestion(1, "Question?", "Answer", [...], "Explanation", "Detailed", "Objective"),
    ...
  ]
}

// 3. Main component
export default function MeasureUpAZ500Exam() {
  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // ... more state
  
  // Event handlers
  const handleAnswerSelect = (index) => { ... }
  const handleNext = () => { ... }
  // ... more handlers
  
  // Three render modes
  if (shuffledQuestions.length === 0) return <LoadingScreen />
  if (viewMode === 'results') return <ResultsScreen />
  if (viewMode === 'review') return <ReviewMode />
  return <ExamMode /> // Default
}
```

#### `src/index.js`
**Purpose**: React entry point
**Do not modify** - only instantiates React app

#### `src/index.css`
**Purpose**: Global styles
**Contains**:
- Tailwind imports
- Global styles
- Font configuration

**Modify** to customize global appearance

#### `public/index.html`
**Purpose**: HTML template
**Contains**: 
- Meta tags
- Document head
- Root div for React

**Modify**: Title, meta description if desired

### CI/CD Configuration

#### `.github/workflows/build-deploy.yml`
**Purpose**: GitHub Actions automation
**Automatically**:
1. Installs dependencies
2. Builds the app
3. Runs tests
4. Deploys to GitHub Pages

**Triggers on**: Push to main/develop, Pull requests

## 🚀 How Files Work Together

### Development Workflow
```
npm start
    ↓
    webpack (from react-scripts) watches files
    ↓
    src/index.js loads src/App.jsx
    ↓
    App.jsx renders using Tailwind (src/index.css)
    ↓
    public/index.html serves the app
    ↓
    Hot reload on file changes
```

### Build Workflow
```
npm run build
    ↓
    react-scripts build
    ↓
    Minifies & optimizes code
    ↓
    Output to build/ directory
    ↓
    Can be deployed anywhere
```

### GitHub Actions Workflow
```
git push
    ↓
    GitHub Actions triggers (build-deploy.yml)
    ↓
    Installs dependencies
    ↓
    Runs npm run build
    ↓
    Deploys build/ to gh-pages branch
    ↓
    Available at username.github.io/repo-name
```

## 📝 Modifying Content

### Adding More Questions

Edit `src/App.jsx`, in `generateQuestions()`:

```javascript
const generateQuestions = () => {
  return [
    // Existing questions...
    
    createQuestion(
      126, // ID
      "New question?",
      "Correct answer",
      ["Wrong 1", "Wrong 2", "Wrong 3"],
      "Quick explanation",
      "Detailed explanation with implementation steps and best practices",
      "Exam objective (20-25%)"
    ),
  ];
};
```

### Changing Styling

Option 1: Edit `src/index.css` for global changes

Option 2: Modify Tailwind classes in `src/App.jsx` components

Option 3: Update `tailwind.config.js` for theme changes

### Updating Documentation

Edit markdown files directly:
- `README.md` - Main docs
- `INSTALLATION.md` - Install steps
- `CONTRIBUTING.md` - Contribution guide
- `DEPLOYMENT.md` - Deploy instructions

## 🔧 Build Commands Reference

```bash
npm start              # Start dev server (localhost:3000)
npm build              # Create optimized production build
npm test               # Run tests
npm run build && build # Build for deployment
npm eject              # Advanced: expose webpack config (irreversible)
```

## 📦 Dependencies Explained

### `react` & `react-dom`
- Core React library
- DOM rendering

### `react-scripts`
- Build configuration
- Webpack, Babel, ESLint setup
- Scripts for start/build/test

### `lucide-react`
- Icon library
- Used for: ChevronLeft, ChevronRight, Flag, Clock, etc.

### Tailwind CSS
- Utility-first CSS framework
- Used for styling throughout app
- Configured in `tailwind.config.js`

### PostCSS & Autoprefixer
- Processes CSS (in tailwind.config.js)
- Adds browser prefixes automatically

## 🎯 Typical Modifications Workflow

1. **Add Questions**:
   - Edit `src/App.jsx`
   - Modify `generateQuestions()`
   - Test with `npm start`

2. **Change Colors/Styling**:
   - Edit `tailwind.config.js` or `src/App.jsx`
   - Changes appear immediately in dev server

3. **Update Docs**:
   - Edit `.md` files
   - Commit and push to GitHub

4. **Deploy**:
   - Push to main branch
   - GitHub Actions builds and deploys automatically
   - Available at username.github.io/repo-name

## ⚠️ Files NOT to Delete

- `package.json` - Project config (required)
- `public/index.html` - React root (required)
- `src/index.js` - React entry (required)
- `.gitignore` - Prevents bad commits
- `tailwind.config.js` - Styling config
- `postcss.config.js` - CSS processing

## 📤 Before Pushing to GitHub

Checklist:
- [ ] Dependencies installed (`npm install`)
- [ ] Runs locally (`npm start`)
- [ ] No console errors
- [ ] Questions properly formatted
- [ ] README updated if needed
- [ ] `.gitignore` configured
- [ ] `node_modules/` NOT committed
- [ ] `.env.local` NOT committed
- [ ] `build/` NOT committed

## 🔒 Security Considerations

- ✓ No API keys in code
- ✓ `.env.local` in `.gitignore`
- ✓ `node_modules/` in `.gitignore`
- ✓ Don't commit build artifacts
- ✓ Review dependencies before adding

## 📊 File Sizes

| File | Size |
|------|------|
| package.json | ~1 KB |
| src/App.jsx | ~150 KB |
| node_modules/ | ~500 MB |
| build/ (production) | ~150 KB (gzipped) |

## 🚀 Next Steps

1. **Understand the structure** - Review all files
2. **Run locally** - `npm install && npm start`
3. **Make changes** - Add questions, modify styling
4. **Test thoroughly** - Verify functionality
5. **Push to GitHub** - Share your project
6. **Celebrate** - You've built an exam app! 🎉

---

**Questions about files?** Check README.md or CONTRIBUTING.md for more info.
