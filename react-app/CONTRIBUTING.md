# Contributing Guide

## Development Workflow

### 1. Setup

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Code Quality

Before committing, make sure to run:

```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

### 4. Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<type> can be:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting)
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding or updating tests
- build: Build system changes
- ci: CI/CD changes
- chore: Maintenance tasks
- revert: Reverting previous changes
```

Examples:
```
feat(counter): add reset functionality
fix(api): handle network errors properly
docs(readme): update installation instructions
```

### 5. Git Hooks

Husky is configured to run automatically:

- **pre-commit**: Runs ESLint and Prettier on staged files
- **commit-msg**: Validates commit message format

### 6. Branch Naming

Use the following format:
```
<type>/<description>

Examples:
- feat/user-authentication
- fix/login-error
- refactor/api-layer
```

## Project Structure

```
src/
├── app/          # Application layer (providers, router)
├── pages/        # Page components
├── features/     # Feature modules
├── entities/     # Business entities
├── shared/       # Shared code (components, hooks, utils)
├── api/          # API layer
└── config/       # Configuration
```

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```
