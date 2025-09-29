## Code Review Instructions for GitHub Copilot
Perform a comprehensive code review following these high-level best practices. Provide actionable feedback with specific line references where applicable.

### OUTPUT FORMAT
Structure your review as follows:
- 🔴 **CRITICAL** (Must fix before merge) - [Issue description with line reference]
- 🟡 **IMPORTANT** (Should address, but not blocking) - [Improvement suggestion with line reference]
- 🟢 **SUGGESTIONS** (Nice to have improvements) - [Enhancement idea with line reference]
- ✅ **POSITIVE FEEDBACK** (What's done well) - [Highlight good practices observed]

End each review with a summary recommendation:
- ✅ **APPROVE**: Ready to merge
- 🛑 **REQUEST CHANGES**: Critical issues need addressing
- 💬 **COMMENT**: Suggestions provided, author's discretion

### CODE REVIEW PILLARS

#### 1. SECURITY & VULNERABILITIES
- Identify potential security vulnerabilities (injection, XSS, authentication bypasses, etc.)
- Check for exposed sensitive data (API keys, passwords, PII)
- Avoid false positives in test files
- Verify proper input validation and sanitization
- Review authentication and authorization logic
- Flag any use of deprecated or vulnerable dependencies

#### 2. CODE QUALITY & MAINTAINABILITY
- Evaluate code readability and clarity
- Check for adherence to SOLID principles
- Identify code duplication (DRY violations)
- Assess method/function complexity (suggest splitting if too complex)
- Review naming conventions consistency (variables, functions, classes)
- Flag magic numbers or hardcoded values that should be constants
- Check for proper separation of concerns
● Immutability: Prioritize const over let for immutable data structures.
● Functional Programming: Favor map and filter for data manipulation instead of traditional for/while loops.
● Method Arguments:
	○ Avoid nullable or boolean arguments.
	○ For methods with more than three arguments, prefer a configuration object.
● Type Safety:
	○ Minimize unnecessary casts.
	○ Avoid casting to any; use unknown or properly typed structures and methods.
● Code Clarity:
	○ Remove all legacy and unreachable code.

#### 3. ERROR HANDLING & RESILIENCE
- Verify comprehensive error handling
- Check for proper exception catching and logging
- Identify potential null/undefined reference issues
- Review resource management (connections, streams, memory)
- Assess fallback mechanisms and graceful degradation

#### 4. PERFORMANCE CONSIDERATIONS
- Identify potential performance bottlenecks
- Check for inefficient algorithms or data structures
- Review database queries for optimization opportunities (N+1, missing indexes)
- Flag unnecessary API calls or resource-intensive operations
- Check for proper caching strategies where applicable

#### 5. TESTING & QUALITY ASSURANCE
- Verify test coverage for new/modified code
- Check test quality (not just presence)
- Identify edge cases that need testing
- Review test naming and documentation
- Flag any code that's difficult to test (suggest refactoring)

#### 6. DOCUMENTATION & COMMENTS
- Check for clear documentation of complex logic
- Verify API documentation completeness
- Review inline comments (should explain "why" not "what")
- Ensure README updates if functionality changes
- Check for TODO/FIXME comments that need addressing

#### 7. ARCHITECTURAL CONSISTENCY
- Verify alignment with existing architectural patterns
- Check for proper layering and module boundaries
- Review API contract changes for backward compatibility
- Identify potential circular dependencies
- Assess impact on system scalability

#### 8. BUSINESS LOGIC & REQUIREMENTS
- Verify the implementation matches the PR description/requirements
- Check for missing edge cases in business logic
- Identify potential side effects on existing functionality
- Review feature flags or configuration changes


### REVIEW SCOPE
- Focus on changed files only
- Consider the PR size (be more thorough for smaller PRs)
- Prioritize issues by severity
- Be constructive and provide examples when suggesting improvements
- Consider the context and project phase (MVP vs. production-ready)

