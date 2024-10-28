# Contributing to the ['Food Ordering & Tracking App'] project

Thank you for your interest in contributing to our Software Engineering Year 3 CompSci Group Project: Food Ordering & Tracking App! This document provides guidelines and steps for contributing.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Testing](#testing)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please:
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/project-name.git



## Code of Conduct:
### Our Standards

#### Code Quality Standards
1. **Clean Code Principles**
   - Write self-documenting code
   - Follow SOLID principles
   - Keep functions under 20-30 lines
   - Maximum of 3 parameters per function
   - Avoid deep nesting (maximum 3 levels)

2. **Naming Conventions**
   - Variables: camelCase, descriptive names
   - Classes: PascalCase
   - Constants: UPPER_SNAKE_CASE
   - Private methods/variables: _prefixed
   - No abbreviations unless widely accepted (e.g., id, url)

3. **Documentation Standards**
   - All public APIs must be documented
   - Complex algorithms require explanatory comments
   - Update README for new features
   - Keep CHANGELOG.md current
   - Document breaking changes

4. **Testing Requirements**
   - Minimum 80% code coverage
   - Unit tests for all new features
   - Integration tests for APIs
   - Test edge cases
   - No commented-out code in tests

5. **Version Control**
   - No direct commits to main/master
   - Descriptive commit messages
   - One logical change per commit
   - Rebase before merging
   - Delete branches after merging

#### Behavioral Standards
1. **Communication**
   - Respond to comments within 24 business hours
   - Keep discussions professional and technical
   - Document decisions in appropriate channels
   - Use inclusive language
   - Provide constructive feedback

2. **Collaboration**
   - Review PRs within 48 hours
   - Participate in code reviews actively
   - Share knowledge with team members
   - Respect team decisions
   - Meet deadlines or communicate delays early

3. **Professional Conduct**
   - Respect intellectual property rights
   - Maintain confidentiality
   - Report security vulnerabilities privately
   - Follow ethical coding practices
   - Support team members

### Enforcement

#### Code Quality Enforcement
1. **Automated Checks**
   - Pre-commit hooks
     - Lint checks
     - Format checks
     - Unit tests
   - CI/CD pipeline checks
     - Code coverage
     - Security scans
     - Performance tests

2. **Review Process**
   - Minimum 1 reviewer approval required
   - Automated tests must pass
   - No merge if discussions unresolved
   - Code coverage requirements met
   - Documentation updated

3. **Violation Levels**
   Level 1 (Minor):
   - Formatting issues
   - Missing comments
   - Minor style guide violations
   - Action: Automated fix or quick revision

   Level 2 (Moderate):
   - Failing tests
   - Missing documentation
   - Code duplication
   - Action: Must fix before merge

   Level 3 (Severe):
   - Security vulnerabilities
   - Breaking changes without notice
   - IP violations
   - Action: Immediate attention required

#### Behavioral Enforcement
1. **First Violation**
   - Verbal warning
   - Documentation of incident
   - Guidance for improvement
   - Review of relevant standards

2. **Second Violation**
   - Written warning
   - Meeting with team lead
   - Corrective action plan
   - 30-day improvement period

3. **Third Violation**
   - Final warning
   - Escalation to management
   - Possible removal from project
   - Documentation in HR records

4. **Severe Violations**
   - Immediate project suspension
   - Investigation
   - Possible termination
   - Legal action if necessary

#### Enforcement Process
1. **Reporting**
   - Document violation
   - Include evidence
   - Report to team lead
   - Maintain confidentiality

2. **Review**
   - Evaluate severity
   - Check previous incidents
   - Gather additional information
   - Consult with stakeholders

3. **Action**
   - Determine appropriate response
   - Communicate decision
   - Document resolution
   - Follow up as needed

4. **Appeals**
   - Submit written appeal
   - Review by neutral party
   - Final decision by management
   - Documentation of outcome

#### Continuous Improvement
1. **Regular Reviews**
   - Monthly standard reviews
   - Team feedback sessions
   - Update standards as needed
   - Track enforcement metrics

2. **Training**
   - New member onboarding
   - Regular team training
   - Update documentation
   - Share best practices

## Getting Started

### Development Environment

#### Required Software
1. **Version Control**
   - Git (2.x or later)
   - Git LFS for large files
   - GitHub Desktop (optional)

2. **Code Editors/IDEs**
   - VS Code (recommended)
     - Extensions:
       - ESLint
       - Prettier
       - GitLens
       - Language-specific plugins
   - Alternative IDEs:
     - IntelliJ IDEA
     - WebStorm
     - Sublime Text
     - Atom

3. **Runtime Environments**
   - Node.js (LTS version)
   - Python (3.x)
   - Java JDK (Latest LTS)
   - .NET SDK (if applicable)

4. **Package Managers**
   - npm/yarn for JavaScript
   - pip for Python
   - Maven/Gradle for Java
   - NuGet for .NET

5. **Development Tools**
   - Docker Desktop
   - Postman/Insomnia
   - Database Tools
     - MongoDB Compass
     - MySQL Workbench
     - pgAdmin
   - Redis Desktop Manager

6. **Browser Development Tools**
   - Chrome DevTools
   - Firefox Developer Tools
   - Browser Extensions:
     - React/Vue DevTools
     - Redux DevTools
     - REST Client

#### System Requirements
1. **Hardware Minimum**
   - 8GB RAM (16GB recommended)
   - 4 core CPU
   - 256GB SSD
   - Stable internet connection

2. **Operating System**
   - macOS (latest or previous version)
   - Windows 10/11
   - Linux (Ubuntu 20.04+ or similar)

### Project Setup
#### 1. Repository Setup
# Clone the repository
git clone https://github.com/OneCrispyDuck/COMP-S350

# Navigate to project directory
cd project-name

# Add upstream remote
git remote add upstream https://github.com/OneCrispyDuck/COMP-S350

# Create development branch
git checkout -b develop


## Development Process
### Branch Strategy
#### 1. Core Branches
1. **Main/Master Branch**
   - Name: `main` or `master`
   - Purpose: Production-ready code
   - Protection:
     - No direct commits
     - Requires PR approval
     - Must pass CI/CD
     - Signed commits required

2. **Development Branch**
   - Name: `develop`
   - Purpose: Integration branch
   - Protection:
     - Requires PR approval
     - Must pass tests
     - Auto-deploys to staging

3. **Release Branches**
   - Format: `release/vX.Y.Z`
   - Purpose: Release preparation
   - Creation: Branched from `develop`
   - Merging: Into `main` and `develop`

#### 2. Supporting Branches
1. **Feature Branches**
   ```bash
   # Format
   feature/[issue-id]-brief-description
   
   # Examples
   feature/123-user-authentication
   feature/ADD-456-payment-gateway

2. **Bug Fix Branches**
   ```bash
   # Format
   bugfix/[issue-id]-brief-description
   
   # Examples
   bugfix/789-login-error
   bugfix/FIX-101-memory-leak
   ```

3. **Hotfix Branches**
   ```bash
   # Format
   hotfix/[issue-id]-brief-description
   
   # Examples
   hotfix/999-security-patch
   hotfix/HOT-202-database-connection
   ```

4. **Documentation Branches**
   ```bash
   # Format
   docs/[topic]-update
   
   # Examples
   docs/api-documentation
   docs/setup-guide
   ```

#### 3. Branch Lifecycle
# Feature Development
git checkout develop
git pull origin develop
git checkout -b feature/123-new-feature
# Work on feature
git push origin feature/123-new-feature

# Release Creation
git checkout develop
git checkout -b release/v1.2.0
# Version bumps and final fixes
git push origin release/v1.2.0

# Hotfix Process
git checkout main
git checkout -b hotfix/v1.2.1
# Fix critical bug
git push origin hotfix/v1.2.1


### Development Workflow
#### 1. Issue Tracking
1. **Issue Creation**
   - Use issue template
   - Add appropriate labels
   - Assign priority
   - Link related issues

2. **Issue Format**
   ## Description
   [Clear description of the task]

   ## Acceptance Criteria
   - [ ] Criterion 1
   - [ ] Criterion 2

   ## Technical Notes
   - Implementation details
   - API endpoints
   - Database changes

   ## Dependencies
   - Related issues
   - External services

#### 2. Development Steps
1. **Pre-Development**
   # Update local develop
   git checkout develop
   git pull origin develop

   # Create feature branch
   git checkout -b feature/123-new-feature

   # Create work in progress commit
   git commit -m "wip: initial setup for #123"

2. **During Development**
   # Regular commits
   git commit -m "feat: implement user authentication"

   # Update from develop
   git fetch origin develop
   git rebase origin/develop

   # Force push if rebased
   git push origin feature/123-new-feature -f

3. **Pre-PR Checklist**
   - Run all tests
   - Update documentation
   - Check code coverage
   - Run linters
   - Update changelog

#### 3. Continuous Integration
1. **Automated Checks**
   ```
   # .github/workflows/ci.yml
   name: CI
   on: [push, pull_request]
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Run tests
           run: |
             npm install
             npm test
   ```

2. **Quality Gates**
   - Test coverage > 80%
   - No security vulnerabilities
   - Code style compliance
   - Performance benchmarks

### Code Review Process

#### 1. PR Creation
1. **PR Template**
   ```markdown
   ## Description
   [Detailed description of changes]

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## How Has This Been Tested?
   - [ ] Unit tests
   - [ ] Integration tests
   - [ ] Manual tests

   ## Checklist
   - [ ] My code follows style guidelines
   - [ ] I have commented my code
   - [ ] I have updated documentation
   - [ ] I have added tests

   ## Screenshots/Recordings
   [If applicable]

   ## Related Issues
   Closes #123
   ```

2. **PR Labeling**
   - Priority labels
   - Type labels
   - Status labels
   - Area labels

#### 2. Review Guidelines
1. **Code Review Checklist**
   ```markdown
   ## Functionality
   - [ ] Meets requirements
   - [ ] Edge cases handled
   - [ ] Error handling
   - [ ] Performance considerations

   ## Code Quality
   - [ ] Clean code principles
   - [ ] Design patterns
   - [ ] Best practices
   - [ ] No code smells

   ## Testing
   - [ ] Test coverage
   - [ ] Test quality
   - [ ] Edge cases tested
   - [ ] Mocking appropriate

   ## Security
   - [ ] Input validation
   - [ ] Authentication/Authorization
   - [ ] Data protection
   - [ ] Security best practices
   ```

2. **Review Comments**
   - Be specific
   - Provide examples
   - Link to documentation
   - Explain reasoning

#### 3. Review Process
1. **First Pass**
   - Code style
   - Documentation
   - Test coverage
   - Basic functionality

2. **Deep Review**
   - Architecture
   - Security
   - Performance
   - Edge cases

3. **Final Review**
   - Verification of changes
   - Integration testing
   - Documentation updates
   - Changelog updates

#### 4. Merge Requirements
1. **Technical Requirements**
   - All tests passing
   - Code coverage met
   - No merge conflicts
   - Up-to-date with base branch

2. **Process Requirements**
   - Required approvals (2+)
   - No pending changes
   - All discussions resolved
   - PR description complete

3. **Post-Merge Tasks**
   ```bash
   # Delete feature branch
   git branch -d feature/123-new-feature
   git push origin --delete feature/123-new-feature

   # Update local develop
   git checkout develop
   git pull origin develop
   ```


# Coding Standards
## General Guidelines
### 1. Naming Conventions
- Use descriptive, meaningful names
- Choose names that reflect purpose/function
```bash
# Good
userAuthentication()
calculateTotalPrice()
isValidEmail()

# Bad
doStuff()
data()
temp
```

### 2. Variable Naming
- Use camelCase for variables and functions
- Use PascalCase for classes
- Use UPPER_SNAKE_CASE for constants

JavaScript Example: 
```bash
const MAX_RETRY_ATTEMPTS = 3;
let userData = {};
class UserAuthentication {}
function calculateTotal() {}
```

### 3. Code Structure
- One purpose per function
- Maximum function length: ~20-30 lines
- Keep nesting levels to maximum of 3
- Use early returns to avoid deep nesting

JavaScript Example:
```bash
// Good
function validateUser(user) {
  if (!user) return false;
  if (!user.email) return false;
  return isValidEmail(user.email);
}

// Bad
function validateUser(user) {
  if (user) {
    if (user.email) {
      if (isValidEmail(user.email)) {
        return true;
      }
    }
  }
  return false;
}
```

### 4. Comments and Documentation
- Comment complex logic
- Document public APIs
- Write self-documenting code

JavaScript Example:
```bash
// Good - explains complex logic
function calculateInterest(principal, rate, time) {
  // Using compound interest formula: A = P(1 + r/n)^(nt)
  return principal * Math.pow(1 + rate/12, 12 * time);
}

// Bad - states the obvious
// Loop through users
for (const user of users) {
```

### 5. Error Handling
- Use try-catch blocks for error-prone code
- Handle errors gracefully
- Provide meaningful error messages

JavaScript Example:
```bash
try {
  await saveUserData(userData);
} catch (error) {
  logger.error('Failed to save user data:', {
    userId: userData.id,
    error: error.message
  });
  throw new Error('Unable to save user information');
}
```

### 6.Language Specific
Java Example:
```bash
// 1. Use proper encapsulation
public class User {
    private String name;
    private int age;

    public String getName() {
        return name;
    }
}

// 2. Use builders for complex objects
User user = User.builder()
    .name("John")
    .age(25)
    .build();

// 3. Use interfaces for flexibility
interface PaymentProcessor {
    void process(Payment payment);
}
```

# Coding Formatting
## 1. Indentation and spacing
JavaScript Example:
```bash
// Use consistent indentation (2 or 4 spaces)
function example() {
  if (condition) {
    doSomething();
  }
}

// Space after keywords and operators
if (condition) {
  // code
}
const sum = a + b;
```

## 2. Line Length and Breaks
JavaScript Example:
```bash
// Maximum line length: 80-100 characters
const longString = 
  'This is a very long string that needs ' +
  'to be broken into multiple lines';

// Break long function calls
someFunction(
  longArgument1,
  longArgument2,
  longArgument3
);
```


## 3. Code Organization
JavaScript Example:
```bash
// Group related code
// Imports first
import { Component } from 'framework';

// Constants
const MAX_ITEMS = 100;

// Interface/Type definitions
interface User {
  name: string;
  age: number;
}

// Class implementation
class UserService {
  // Properties first
  private users: User[];

  // Constructor
  constructor() {
    this.users = [];
  }

  // Public methods
  public getUsers(): User[] {
    return this.users;
  }

  // Private methods
  private validateUser(user: User): boolean {
    return user.name && user.age > 0;
  }
}
```

## 4. File Organisation
```bash
project/
├── src/
│   ├── components/
│   │   └── [component].tsx
│   ├── services/
│   │   └── [service].ts
│   ├── utils/
│   │   └── [utility].ts
│   └── types/
│       └── [type].ts
├── tests/
└── docs/
```
For a deeper overview related to this project:
```bash
project/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── AuthGuard.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Navigation.tsx
│   │   ├── restaurant/
│   │   │   ├── RestaurantCard.tsx
│   │   │   ├── RestaurantList.tsx
│   │   │   ├── MenuList.tsx
│   │   │   └── RestaurantDetails.tsx
│   │   ├── order/
│   │   │   ├── OrderForm.tsx
│   │   │   ├── OrderSummary.tsx
│   │   │   ├── OrderTracking.tsx
│   │   │   └── OrderHistory.tsx
│   │   ├── user/
│   │   │   ├── UserProfile.tsx
│   │   │   ├── AddressForm.tsx
│   │   │   └── PaymentMethods.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Loading.tsx
│   │       └── ErrorBoundary.tsx
│   │
│   ├── services/
│   │   ├── api.ts                # Base API configuration
│   │   ├── authService.ts        # Authentication related API calls
│   │   ├── restaurantService.ts  # Restaurant related API calls
│   │   ├── orderService.ts       # Order related API calls
│   │   ├── userService.ts        # User profile related API calls
│   │   └── paymentService.ts     # Payment processing services
│   │
│   ├── utils/
│   │   ├── validation.ts         # Form validation helpers
│   │   ├── formatting.ts         # Date, currency, phone formatting
│   │   ├── storage.ts           # Local storage handlers
│   │   ├── geolocation.ts       # Location handling utilities
│   │   └── errorHandling.ts     # Error handling utilities
│   │
│   └── types/
│       ├── auth.types.ts
│       ├── restaurant.types.ts
│       ├── order.types.ts
│       ├── user.types.ts
│       └── api.types.ts
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   ├── services/
│   │   └── utils/
│   ├── integration/
│   │   ├── auth.test.ts
│   │   ├── orders.test.ts
│   │   └── restaurants.test.ts
│   └── e2e/
│       ├── ordering.test.ts
│       └── authentication.test.ts
│
└── docs/
    ├── api/
    │   ├── authentication.md
    │   ├── restaurants.md
    │   ├── orders.md
    │   └── endpoints.md
    ├── setup.md
    ├── testing.md
    └── deployment.md
```

## 5. Editor Configuration
'''
#### .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
'''

## Additional Tools
- Use ESLint/TSLint for JavaScript/TypeScript
- Use Black for Python
- Use Prettier for code formatting
- Use EditorConfig for consistent styling


This code of conduct provides:
1. Universal best practices
2. Language-specific guidelines
3. Consistent formatting rules
4. Clear examples
5. Tool recommendations
