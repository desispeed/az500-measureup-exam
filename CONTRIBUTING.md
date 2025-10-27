# Contributing to AZ-500 MeasureUp Exam

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Report issues professionally

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Provide a clear description of the issue
3. Include steps to reproduce
4. Specify your environment (OS, Node version, browser)
5. Include error messages or screenshots

### Adding Questions

1. Ensure questions follow AZ-500 exam domains
2. Include all components:
   - Clear question text
   - Four answer options
   - Correct answer
   - Quick explanation
   - Detailed explanation with implementation steps
   - Exam objective reference
3. Randomize answers before submitting
4. Verify no duplicate questions exist

### Suggesting Improvements

1. Describe the improvement clearly
2. Explain the benefit
3. Provide examples or mockups if applicable
4. Consider potential impact on existing features

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit with clear messages: `git commit -m 'Add/Fix: clear description'`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a Pull Request with detailed description

### Pull Request Process

1. Update README if needed
2. Update tests if adding functionality
3. Ensure code follows existing style
4. Keep commits focused and atomic
5. Provide clear PR description explaining changes

## Development Setup

```bash
# Clone and setup
git clone https://github.com/yourusername/az500-measureup-exam.git
cd az500-measureup-exam
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Question Quality Standards

### Content Requirements
- Questions must be accurate and technically correct
- Based on real Azure AZ-500 exam objectives
- Include security best practices
- Reflect current Azure services and features

### Format Requirements
- Question: Clear, specific, exam-style wording
- Options: Concise, single idea each
- Correct answer: Unambiguously correct
- Incorrect options: Plausible but incorrect
- Explanations: Technical depth appropriate for exam level

### Explanation Structure
- Quick explanation: 1-2 sentences
- Detailed explanation should include:
  - Why the answer is correct
  - Why wrong answers are incorrect
  - Implementation steps
  - Security best practices
  - Compliance considerations
  - Real-world examples
  - Common pitfalls

## Code Style

- Use consistent indentation (2 spaces)
- Follow React best practices
- Use meaningful variable names
- Comment complex logic
- Keep components focused and single-responsibility

## Testing

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices
- Verify all questions have proper formatting
- Check for typos and grammar

## Documentation

- Update README if changing functionality
- Document new features clearly
- Include usage examples
- Add inline comments for complex code

## Community

- Ask questions respectfully
- Help review other PRs
- Share your expertise
- Provide constructive feedback
- Acknowledge others' contributions

## Commit Message Convention

```
type: subject

body (optional)

footer (optional)
```

Types:
- `feat:` New feature (question or functionality)
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: Add 10 new AZ-500 security questions

- Added questions covering Azure Sentinel
- Added questions on threat hunting
- Updated exam objectives mapping

Closes #123
```

## Review Process

1. Automated tests must pass
2. Code review by maintainers
3. Feedback and revisions
4. Approval and merge

## Attribution

Contributors will be recognized:
- In CONTRIBUTORS.md file
- In commit history
- In project acknowledgments

## Questions?

- Open a discussion
- Check existing issues
- Review documentation
- Email maintainers

---

Thank you for contributing to better exam preparation! 🙏
