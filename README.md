# Azure AZ-500 Security Engineer Practice Exam

A professional MeasureUp-format practice exam application for the **Azure AZ-500: Security Engineer Associate** certification with 125 comprehensive security questions.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### 📋 Exam Experience
- **MeasureUp-style interface** - Professional exam simulation
- **125 AZ-500 questions** - Covers all certification objectives
- **Randomized answers** - Prevent pattern recognition
- **Detailed explanations** - Learn from every question
- **Exam objectives** - Maps questions to certification domains

### 🎯 Question Coverage
- **Identity & Access Management** (40 questions) - Zero-trust, Service Principals, Conditional Access, Key Vault
- **Data Protection & Encryption** (35 questions) - TDE, Always Encrypted, Ransomware Protection
- **Network Security** (25 questions) - WAF, DDoS Protection, Segmentation
- **Threat Detection & Response** (25 questions) - Azure Sentinel, Threat Hunting, Identity Protection

### 🔧 Functionality
- ✅ Multiple choice questions with instant feedback
- ✅ Mark questions for later review
- ✅ Progress tracking with score percentage
- ✅ Review mode to study incorrect answers
- ✅ Detailed explanations with best practices
- ✅ Retake exam feature
- ✅ Results dashboard with performance metrics
- ✅ Responsive design for all devices

## Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/az500-measureup-exam.git
cd az500-measureup-exam
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
az500-measureup-exam/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── App.jsx                 # Main exam component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles with Tailwind
├── package.json                # Project dependencies
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Exam Domains Covered

### 1. Implement and Manage Identity and Access (20-25%)
- Zero-trust security principles
- Service principal authentication
- Conditional Access policies
- Multi-factor authentication
- Just-In-Time VM access
- Azure Key Vault security
- Privileged Identity Management (PIM)

### 2. Implement and Manage Secrets and Keys (15-20%)
- Azure Key Vault operations
- Bring Your Own Key (BYOK)
- Customer-managed keys
- Key rotation policies
- HSM-backed keys
- Certificate management

### 3. Implement and Manage Data Protection (20-25%)
- Transparent Data Encryption (TDE)
- Always Encrypted columns
- Data encryption at rest and in transit
- TLS/HTTPS enforcement
- Storage account security
- Ransomware protection
- Data residency compliance

### 4. Implement and Maintain Security Posture (15-20%)
- Defender for Cloud
- Security recommendations
- Secure Score assessment
- Vulnerability assessment
- Threat detection
- Security policies

### 5. Configure and Manage Network Security (20-25%)
- Virtual networks and subnets
- Network Security Groups (NSGs)
- Application Gateway with WAF
- DDoS Protection
- Private Endpoints
- Network segmentation
- Azure Firewall

### 6. Manage Security Governance and Compliance (10-15%)
- Azure Policy enforcement
- Compliance requirements (PCI-DSS, HIPAA)
- Activity Log auditing
- Regulatory compliance
- Azure Blueprints
- Compliance Manager

### 7. Configure and Manage Security Operations (15-20%)
- Azure Sentinel SIEM
- Threat hunting
- Incident response automation
- Playbook execution
- Security monitoring
- Log aggregation

## Question Quality

Each question includes:
- **Concise question** - Clear, exam-style wording
- **Quick explanation** - Brief answer summary
- **Detailed explanation** - In-depth learning content with:
  - Implementation steps
  - Best practices
  - Real-world considerations
  - Security implications
  - Compliance mappings
  - Trade-offs analysis
- **Exam objective mapping** - Links to certification domains

## Exam Tips

1. **Use Review Mode** - After completing exam, review all questions and detailed explanations
2. **Study Marked Questions** - Focus on questions marked for review
3. **Understand Objectives** - Pay attention to exam domain mappings
4. **Retake Exam** - Answers are randomized, so retake provides different question order
5. **Take Notes** - Use detailed explanations to create study notes
6. **Practice Time Management** - Average 2 minutes per question (similar to real exam)

## Performance Targets

- **Passing Score**: 70%
- **Preparation Time**: 4-6 weeks of study
- **Practice Exams**: Take 3+ practice exams before real exam

## Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Scripts** - Build tooling

## Customization

### Adding More Questions

Edit `src/App.jsx` and add questions to the `generateQuestions()` function:

```javascript
createQuestion(
  id,
  "Question text?",
  "Correct answer",
  ["Wrong answer 1", "Wrong answer 2", "Wrong answer 3"],
  "Quick explanation",
  "Detailed explanation with implementation steps and best practices",
  "Exam objective category"
)
```

### Changing Styling

Modify `src/index.css` or update Tailwind classes in `src/App.jsx`.

### Adjusting Passing Score

In `src/App.jsx`, change the passing percentage check (currently 70%):

```javascript
{percentage >= 70 ? '✓ PASSED' : '✗ FAILED'}
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Issues & Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Provide detailed description
- Include screenshots if applicable

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Disclaimer

This is a practice exam tool created for educational purposes. It is not affiliated with or endorsed by Microsoft, MeasureUp, or Pearson VUE. The questions are original and based on the Azure AZ-500 certification exam objectives.

For official exam information, visit:
- [Microsoft Learn - AZ-500](https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/)
- [Exam AZ-500: Microsoft Azure Security Engineer Associate](https://learn.microsoft.com/en-us/credentials/certifications/exams/az-500/)

## Study Resources

- Microsoft Learn modules
- Azure documentation
- Official Microsoft training courses
- MeasureUp official practice exams
- Pluralsight Azure security courses
- Linux Academy Azure security training

## Roadmap

- [ ] Add 75+ more questions (target 200 total)
- [ ] Implement question bank organization
- [ ] Add time-limited exam mode
- [ ] Create study mode with hints
- [ ] Add performance analytics
- [ ] Export results as PDF
- [ ] Add offline mode support
- [ ] Implement mobile app

## Support the Project

⭐ Please star this repository if you found it helpful!

## Author

Created by [Your Name/Team]

## Acknowledgments

- Microsoft Azure documentation
- Exam objective specifications
- MeasureUp exam format reference
- Community feedback and contributions

---

**Last Updated**: 2025
**Current Question Count**: 125
**Coverage**: All AZ-500 exam domains
**Format**: MeasureUp Professional

Good luck on your AZ-500 exam! 🚀
