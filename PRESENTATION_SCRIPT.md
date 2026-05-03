# Software Engineering Course & Recrailer Project
## Comprehensive Presentation Script

---

# PART 1: SOFTWARE ENGINEERING PRINCIPLES & CONCEPTS

## Unit 1: Introduction to Software Engineering
**Duration: 7 hours | Weight: Important Foundation**

### Overview
*Slide 1: Title & Objectives*
"Good afternoon everyone. Today we'll explore the fundamental principles that guide software development. Think of software engineering as the discipline that transforms creative ideas into reliable, maintainable systems."

### Software Process Models
**What is a Software Process Model?**
- A structured approach to software development
- Defines phases, activities, and deliverables
- Guides team collaboration and project management

**1. Build and Fix Model**
- Oldest and simplest approach
- Code → Test → Debug → Repeat
- **Issues**: No planning, unpredictable outcomes, high costs
- **Best For**: Hobby projects, prototypes only
- *Real-world impact*: Creates technical debt quickly

**2. Waterfall Model**
- Linear, sequential phases: Requirements → Design → Implementation → Testing → Deployment
- Each phase completed before the next begins
- **Advantages**: Clear documentation, predictable timeline
- **Disadvantages**: Inflexible to changes, late bug discovery
- **Best For**: Projects with well-defined requirements (e.g., defense, aerospace)

**3. Incremental Process Model**
- Divide project into smaller increments
- Each increment is a complete mini-project
- **Advantages**: Faster delivery, easier feedback integration
- **Best For**: Medium-sized projects with evolving requirements

**4. Evolutionary & Spiral Models**
- **Prototype Model**: Build quick prototypes to understand requirements, then develop final product
- **Spiral Model**: Combines prototyping with waterfall; risk-driven approach
- Four quadrants: Planning → Risk Analysis → Development → Evaluation
- **Best For**: Large, complex projects with unclear requirements

**5. Agile Models** ⭐ (Industry Standard Today)
- Iterative development in short sprints (1-4 weeks)
- Continuous feedback and adaptation
- **Key Values**: Individuals over processes, Working software over documentation
- **Popular Agile Methodologies**:
  - Scrum: Sprint-based, daily standups, product backlog
  - Kanban: Visual workflow, continuous delivery
  - Lean: Minimize waste, maximize value
  - XP (Extreme Programming): Pair programming, continuous integration

### Project Planning & Scheduling

**Critical Concepts:**
- **Network Diagram (PERT Chart)**: Shows task dependencies and parallel work
- **Gantt Chart**: Timeline visualization of tasks and milestones
  - X-axis: Time
  - Y-axis: Tasks
  - Useful for tracking progress and resource allocation
- **CPM (Critical Path Method)**: Identifies longest path → minimum project duration
  - Slack/float in non-critical tasks
- **PERT (Program Evaluation Review Technique)**: Handles uncertainty with three estimates
  - Optimistic time (O)
  - Pessimistic time (P)
  - Most likely time (M)
  - Expected time = (O + 4M + P) / 6

---

## Unit 2: Requirement Engineering
**Duration: 4 hours | Weight: Critical Phase**

### Overview
"Requirements are the foundation of any software project. If requirements are wrong, everything else will be wrong too."

### Types of Requirements
**1. Functional Requirements**
- What the system does
- Example: "User can schedule an email to be sent at a specific time"
- Features and capabilities

**2. Non-Functional Requirements**
- How the system performs
- **Performance**: Response time < 2 seconds
- **Security**: Passwords must be hashed, API endpoints authenticated
- **Scalability**: Support 10,000 concurrent users
- **Usability**: Intuitive UI, accessible to all users
- **Reliability**: 99.9% uptime
- **Maintainability**: Code must be modular and documented

### Requirement Engineering Phases

**1. Elicitation** (Gathering)
- Interviews with stakeholders
- Workshops and brainstorming
- Document analysis
- Prototyping for clarification
- *Challenge*: Stakeholders don't always know what they want

**2. Analysis**
- Categorize and organize requirements
- Identify conflicts and dependencies
- Assess feasibility and risks
- Define priorities
- *Goal*: Create a coherent, consistent set of requirements

**3. Specification**
- Document requirements in clear, unambiguous language
- Use models (use cases, state diagrams)
- Create **SRS (Software Requirements Specification)**

**4. SRS (Software Requirements Specification)**
- Formal document defining what the software will do
- **Contents**:
  - Functional requirements
  - Non-functional requirements
  - Use cases and user scenarios
  - Data requirements
  - System interfaces
  - Constraints
- **Characteristics**: Clear, unambiguous, verifiable, consistent

**5. Verification & Validation**
- **Verification**: "Are we building the product right?" (Does it match SRS?)
- **Validation**: "Are we building the right product?" (Does it meet actual needs?)
- **Methods**:
  - Reviews and walkthroughs
  - Testing against requirements
  - User acceptance testing (UAT)

---

## Unit 3: Software Design
**Duration: 7 hours | Weight: Critical Phase**

### Overview
"Good design is the difference between systems that last 5 years and systems that last 15 years."

### UML Diagrams (Visual Communication)

**1. Use Case Diagram**
- Shows interactions between users (actors) and system
- Identifies all major functionalities
- *Simple but powerful* for understanding system scope
```
Example: Email Campaign Manager
- User
  - Sign Up
  - Log In
  - Compose Email
  - Schedule Email
  - View Dashboard
```

**2. Class Diagram**
- Shows classes, attributes, methods, and relationships
- **Relationships**:
  - Inheritance: Parent → Child classes
  - Association: Objects work together
  - Composition: Strong ownership
  - Aggregation: Weak ownership

**3. Sequence Diagram**
- Shows message flow and interactions over time
- Vertical axis: Objects; Horizontal axis: Time
- *Useful for understanding complex interactions*
- Example: Login sequence → Validation → Token generation → Dashboard

**4. Activity Diagram**
- Shows workflow and control flow
- Decision points, parallel activities
- *Like a flowchart for business processes*
- Example: Email scheduling workflow → Compose → Schedule → Cron Job → Send

**5. State Diagram**
- Shows states an object can have and transitions between them
- Example: Email states → Draft → Scheduled → Sent/Failed

**6. Collaboration/Communication Diagram**
- Like sequence diagram but emphasizes object relationships
- Shows objects and their interactions with sequence numbers

**7. Deployment Diagram**
- Shows hardware components and software distribution
- Servers, databases, client devices
- Network connections

**8. Component Diagram**
- Shows software components and dependencies
- Interfaces between components
- *Used in architecture design*

**9. Package Diagram**
- Organizes elements into logical groups
- Shows dependencies between packages

### Design Modularity: Coupling & Cohesion

**Coupling** 🔗 (Should be LOW)
- Degree of interdependence between modules
- **Tight coupling**: Changes in one module affect many others
  - Hard to test, modify, reuse
- **Loose coupling**: Modules are independent
  - Easy to test, modify, reuse
- **How to achieve loose coupling**:
  - Use interfaces/abstract classes
  - Dependency injection
  - Message passing

**Cohesion** 🎯 (Should be HIGH)
- Degree to which elements within a module belong together
- **Low cohesion**: Module does many unrelated things
  - Hard to understand, test, maintain
- **High cohesion**: Module has single, focused purpose
  - Easy to understand, test, reuse
- **Example**: Don't mix login logic with email sending in one module

**Design Principle**: Aim for HIGH cohesion + LOW coupling

---

## Unit 4: Software Construction
**Duration: 8 hours | Weight: Largest Implementation Phase**

### Overview
"Code is poetry. It should be readable, maintainable, and beautiful."

### Coding Standards & Guidelines

**Why Standards Matter?**
- 80% of code's cost is in maintenance, not initial development
- Standards make code readable for future developers
- Reduces bugs and improves quality

**Best Practices:**
- **Naming**: Use meaningful, descriptive names
  - ❌ `var x = 5;`
  - ✅ `const maxRetries = 5;`
- **Functions**: Single responsibility principle
  - Each function does ONE thing, and does it well
  - Easier to test and reuse
- **Comments**: Explain WHY, not WHAT
  - Code shows WHAT it does; comments explain WHY
- **Indentation**: Consistent spacing (tabs vs spaces)
- **Line Length**: Avoid excessively long lines (typically 80-120 chars)

### Code Checklist
Before committing code:
- [ ] Code compiles/runs without errors
- [ ] No hardcoded values (magic numbers)
- [ ] Proper error handling
- [ ] Following naming conventions
- [ ] No dead code or unused variables
- [ ] Consistent formatting
- [ ] Tests written and passing
- [ ] Documentation updated

### Code Reviews
**Purpose**: Catch bugs early, share knowledge, maintain quality

**Review Process**:
1. Developer creates a pull request
2. Reviewer examines code for:
   - Logic correctness
   - Performance issues
   - Security vulnerabilities
   - Code style compliance
   - Test coverage
3. Feedback provided; developer makes changes
4. Approval and merge

**Benefits**:
- Catches bugs early (cheaper to fix)
- Knowledge sharing across team
- Improves code quality
- Reduces bugs in production

### Code Refactoring
**Definition**: Restructuring existing code without changing its behavior

**When to Refactor?**
- Code is hard to understand (bad naming, structure)
- Duplication exists (DRY principle)
- Functions are too long
- Classes have too many responsibilities

**Common Refactoring Techniques**:
- Extract method: Move code into separate function
- Rename: Use better names
- Remove duplication: Consolidate similar code
- Simplify logic: Reduce complexity
- Move code: Organize by responsibility

### Code Optimization
**Performance Optimization**:
- Profile code to find bottlenecks
- Optimize algorithms (Big O complexity)
  - O(1): Constant time ⭐
  - O(log n): Logarithmic
  - O(n): Linear
  - O(n log n): Good for sorting
  - O(n²): Avoid if possible
  - O(2ⁿ): Never acceptable
- Cache frequently accessed data
- Minimize database queries

### Design Patterns
**Reusable solutions to common design problems**

**Gang of Four (GoF) Patterns** (23 classic patterns):
1. **Creational Patterns** (Object creation)
   - Singleton: Only one instance exists
   - Factory: Create objects without specifying exact classes
   - Builder: Construct complex objects step by step
   - Prototype: Clone objects instead of creating new ones

2. **Structural Patterns** (Object composition)
   - Decorator: Add behavior to objects dynamically
   - Adapter: Make incompatible interfaces work together
   - Facade: Simplified interface to complex subsystems
   - Proxy: Control access to another object

3. **Behavioral Patterns** (Object interaction)
   - Observer: One object notifies many about changes
   - Strategy: Select algorithm at runtime
   - Command: Encapsulate requests as objects
   - State: Alter behavior when internal state changes

### Modern Programming Environments
**Key Tools**:
- **Code Search**: IDE integrations for finding code quickly
- **Library Components & APIs**: Stand on shoulders of giants
  - npm packages (JavaScript)
  - Maven dependencies (Java)
  - PyPI packages (Python)
- **IDEs**: VS Code, IntelliJ, Visual Studio for productivity

### Program Comprehension
**Understanding existing code is hard**:
- Read the documentation first
- Trace through code execution
- Use debuggers to inspect state
- Look at tests to understand behavior
- Study the architecture

### Program Correctness & Defensive Programming
**Defensive Programming**: Assume everything will go wrong

**Principles**:
- Validate all inputs
  - ❌ `var age = parseInt(userInput);`
  - ✅ `if (age < 0 || age > 150) { reject request }`
- Handle errors gracefully
  - Use try-catch blocks
  - Provide meaningful error messages
- Fail fast: Detect problems early
- Use assertions for invariants
- Immutability where possible
- Principle of least privilege: Grant minimum necessary permissions

---

## Unit 5: Software Metrics
**Duration: 7 hours | Weight: Measurement & Quality**

### Overview
"You can't improve what you don't measure. Metrics drive quality."

### Size-Oriented Metrics
**Measures of software size**:
- **Lines of Code (LOC)**: 
  - Simplest metric
  - Issues: Different languages have different densities
  - 1000 LOC in Python = 3000 LOC in Java often
- **KLOC** (Kilo Lines of Code): Thousands of lines
- Used to estimate effort and cost
- **Formula**: Effort = a + b × (KLOC)^c
  - Different industries have different constants

### Function-Oriented Metrics
**Measures based on functionality**:
- **Function Points (FP)**: Abstract measure of functionality
  - Based on inputs, outputs, inquiries, files, interfaces
  - Language-independent
  - More accurate than LOC but harder to calculate
- **Defect Density**: Defects per function point
  - Lower is better
- **Productivity**: Function points per person-month

### Halstead's Software Metrics
**Based on operators and operands in code**:
- **n1**: Number of distinct operators
- **n2**: Number of distinct operands
- **N1**: Total number of operators
- **N2**: Total number of operands

**Derived Metrics**:
- **Program Length**: N = N1 + N2
- **Program Vocabulary**: n = n1 + n2
- **Volume**: V = N × log₂(n)
- **Difficulty**: D = (n1/2) × (N2/n2)
- **Effort**: E = D × V
- **Time**: T = E / 18 (in seconds)
- **Bugs**: B = V / 3000

*Use Case*: Identifies code complexity, effort estimation

### Information Flow Metrics
**Measures of complexity based on data flow**:
- Complexity increases with:
  - Number of inputs and outputs
  - Connections between modules
  - Data dependencies
- Helps identify problematic modules

### Object-Oriented Metrics
**Specific to OOP**:
- **WMC (Weighted Methods per Class)**: Number of methods
  - Higher WMC = harder to test and maintain
- **DIT (Depth of Inheritance Tree)**: How deep inheritance goes
  - Deeper trees = more complex
- **NOC (Number of Children)**: Direct subclasses
  - More children = more testing needed
- **CBO (Coupling Between Objects)**: Module interdependence
  - Higher CBO = harder to test independently
- **RFC (Response For a Class)**: Methods called by a class
  - Higher RFC = more complex

### Class-Oriented Metrics
- **Cohesion**: Measures if methods work together (should be high)
- **Coupling**: Measures dependencies (should be low)
- **Complexity**: Cyclomatic complexity (number of decision points)

### COCOMO Model (Constructive Cost Model)
**Predicts effort and duration of projects**

**Three Levels**:
1. **Basic COCOMO**: Simple effort estimation
   - Effort = a × (KLOC)^b
   - Single-line formula
   - Assumes average complexity

2. **Intermediate COCOMO**: Includes cost drivers
   - Adjusts effort based on factors:
     - Developer capability
     - Tool quality
     - Schedule constraints
     - Hardware constraints
   - More accurate than basic

3. **Detailed COCOMO**: Phase-wise estimation
   - Estimates effort for each project phase
   - Most accurate but complex

**Project Modes**:
- **Organic**: Small team, familiar problem, loose requirements
- **Semi-Detached**: Medium team, mixed experience, moderate requirements
- **Embedded**: Large system, tight constraints, innovative requirements

---

## Unit 6: Software Testing
**Duration: Multiple Weeks | Weight: Critical Quality Assurance**

### Overview
"The goal of testing is to break software and find defects before users do."

### Testing Pyramid
```
         Manual Testing (UI/exploratory)
       /          |          \
    Integration  Tests   (APIs, modules)
   /          |          \
Unit Tests (individual functions)
```

### White-Box Testing (Structural Testing)
**Tests internal logic; developer needs to see code**

**1. Basis Path Testing**
- Test all independent paths through code
- Uses control flow graph
- **Cyclomatic Complexity** (M) = Number of independent paths
  - M = (edges - nodes + 2)
  - Recommended M < 10

**2. Control Structure Testing**
- **Condition Testing**: Test all combinations of conditions
  - If `if (a && b)`, test: TT, TF, FT, FF
  - Finds logic errors
- **Data Flow Testing**: Follow data from definition to use
  - Ensures data is properly initialized before use
- **Loop Testing**:
  - Zero iterations
  - One iteration
  - Two iterations
  - Multiple iterations
  - N-1, N, N+1 iterations (boundary testing)

**3. Statement Coverage**
- Execute every line of code at least once
- Minimum requirement but not sufficient
- Example: Missing else branches wouldn't be caught

**4. Branch/Decision Coverage**
- Every decision (if/else) evaluated true and false
- More thorough than statement coverage
- Still misses some paths

**5. Path Coverage**
- Test all possible paths (combines all decisions)
- Most thorough but exponentially expensive

### Black-Box Testing (Behavioral Testing)
**Tests functionality without knowing code; focus on inputs/outputs**

**1. Equivalence Class Partitioning**
- Divide inputs into equivalence classes
- Test one value from each class
- Example: Age validation
  - Class 1: Negative (invalid)
  - Class 2: 0-120 (valid)
  - Class 3: >120 (invalid)
  - Test: -5, 30, 150

**2. Boundary Value Analysis** ⭐ (Most effective)
- Test at boundaries between equivalence classes
- **Rule**: Test at, just above, just below boundaries
- Example: Age 0-120
  - Test: -1, 0, 1, 119, 120, 121
  - Catches off-by-one errors
- Why? Most bugs occur at boundaries

**3. Decision Table Testing**
- Create table of conditions and expected outcomes
- Ensure all combinations tested
- Good for complex business logic
- Example: Email validation with multiple rules

**4. Cause-Effect Graphing**
- Identify causes (inputs) and effects (outputs)
- Create logical connections
- Generate test cases from graph
- Ensures complete coverage

**5. Mutation Testing** 🧬
- Introduce small changes (mutations) in code
- Run tests; good tests should catch mutations
- Measures test effectiveness
- Example: Change `<` to `<=`, `&&` to `||`
- If tests still pass, tests are weak

**6. Regression Testing**
- Retest after changes to ensure nothing broke
- Run automated tests after every code change
- **Regression Test Suite**: Set of all tests for system
- Critical for continuous integration

### Formal Methods
**Mathematical verification of correctness**

**Approaches**:
- **Theorem Proving**: Mathematically prove code is correct
- **Model Checking**: Verify properties of finite state systems
- **Static Analysis**: Analyze code without executing
- Used in safety-critical systems (aviation, medical)
- Time-consuming but catches subtle bugs

### Testing Best Practices
1. **Test Early**: Start testing during development
2. **Test Often**: Run tests frequently (after every change)
3. **Test Thoroughly**: Aim for high coverage (>80%)
4. **Test Automation**: Automate repetitive tests
5. **Test Independence**: Each test should be independent
6. **Test Documentation**: Document what and why you test
7. **Continuous Integration**: Automated testing on every commit

---

---

# PART 2: RECRAILER PROJECT DEEP DIVE
## Real-World Application of Software Engineering Principles

---

## Project Overview

### What is Recrailer?
Recrailer 2.0 is a **full-stack email campaign manager** that allows users to:
- ✅ Register and authenticate securely
- ✅ Store Gmail credentials (app passwords)
- ✅ Compose professional emails
- ✅ Schedule emails for future delivery
- ✅ Automatically send scheduled emails via Gmail's SMTP
- ✅ Track email delivery status (sent, scheduled, failed)
- ✅ Dashboard to monitor campaigns

### Tech Stack Overview
```
Frontend: React + React Router + Lucide Icons + React Hook Form
         Vite (Build Tool) | Vercel (Deployment)

Backend:  Node.js + Express.js + MongoDB
         Nodemailer + Gmail SMTP | Node-Cron
         Render (Deployment)

Security: Bcrypt (Password hashing) + JWT (Authentication)
```

---

## Architecture & Design

### System Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                         │
├─────────────────────────────────────────────────────────────┤
│                    React Frontend (SPA)                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Pages: MainPage, SignUp, LogIn, Dashboard,           │  │
│  │        ComposePage, ScheduleView                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           │
                        HTTPS
                   (REST API Calls)
                           │
        ┌──────────────────▼──────────────────┐
        │      Express.js Backend Server      │
        │        (Node.js Runtime)            │
        ├─────────────────────────────────────┤
        │ Routes:                             │
        │ ├─ /api/register   → Sign up        │
        │ ├─ /api/login      → Log in         │
        │ ├─ /api/mails      → Get emails     │
        │ ├─ /api/compose    → Send email     │
        │ └─ /api/schedule   → Schedule email │
        └────────────┬────────────────────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
      MongoDB   Gmail SMTP    Cron Job
      Database   Service     Scheduler
      (Store   (Send         (Run Every
      User Data) Emails)      Minute)
```

### High-Level Data Flow

**1. User Registration**
```
User Input (Email, Password, Gmail App Password)
    ↓
Backend Validation
    ↓
Bcrypt: Hash Login Password
    ↓
MongoDB: Store User Document
    ↓
Response: Success/Error
```

**2. User Login**
```
User Input (Email, Password)
    ↓
Query MongoDB: Find User
    ↓
Bcrypt: Compare Passwords
    ↓
JWT: Generate Access Token + Refresh Token
    ↓
Store Refresh Token in Database
    ↓
Response: Tokens + Email
```

**3. Email Composition & Scheduling**
```
User Input (To, Subject, Body, Schedule Time)
    ↓
Backend Validation
    ↓
JWT: Verify User (Middleware)
    ↓
MongoDB: Create Email Document
    ├─ userId (Link to User)
    ├─ to (Recipient)
    ├─ subject
    ├─ body
    ├─ scheduledTime
    └─ status: "scheduled"
    ↓
Response: Email Created
```

**4. Automatic Email Sending (Via Cron Job)**
```
Cron Job: Runs every minute ("* * * * *")
    ↓
Query MongoDB: Find scheduled emails where:
    - scheduledTime <= now
    - status == "scheduled"
    ↓
For Each Email:
    ├─ Fetch User (Get Gmail App Password)
    ├─ Use Nodemailer to send via Gmail SMTP
    ├─ Update MongoDB: status = "sent" or "failed"
    └─ Log result
    ↓
Wait 60 seconds
    ↓
Repeat (Forever running in background)
```

---

## Frontend Implementation

### Technology Choices & Why

**React**
- Component-based architecture (reusable UI pieces)
- Virtual DOM (efficient updates)
- Large ecosystem
- Steep learning curve but worth it

**Vite**
- Next-gen build tool
- Extremely fast (instant HMR - Hot Module Replacement)
- Smaller bundle sizes than Webpack
- Better developer experience

**React Router**
- Client-side navigation (no page reloads)
- Nested routes support
- Dynamic routing
- **Routes in Project**:
  - `/`: MainPage (Landing page)
  - `/signup`: SignUp (Create account)
  - `/login`: LogIn (Authenticate)
  - `/dashboard`: Dashboard (View campaigns)
  - `/compose`: ComposePage (Write emails)
  - `/scheduled`: ScheduleView (View scheduled emails)

**React Hook Form**
- Minimal re-renders
- Smaller bundle size
- Easy form validation
- Better performance than other form libraries

### Frontend File Structure
```
frontend/
├── src/
│   ├── App.jsx (Main routing component)
│   ├── main.jsx (React entry point)
│   ├── index.css (Global styles)
│   ├── Pages/
│   │   ├── MainPage.jsx (Landing/Home)
│   │   ├── SignUp.jsx (Registration form)
│   │   ├── LogIn.jsx (Login form)
│   │   ├── Dashboard.jsx (User's email list)
│   │   ├── ComposePage.jsx (Email composer)
│   │   ├── ScheduleView.jsx (View scheduled)
│   │   └── *.css (Styles for each page)
│   └── assets/ (Images, icons)
└── vite.config.js (Build configuration)
```

### Key Frontend Features

**1. Authentication Flow**
```javascript
// On Sign Up:
User enters: Email, Login Password, Gmail App Password
→ POST /api/signup
→ Backend hashes passwords, stores in MongoDB
→ Redirect to Login page

// On Log In:
User enters: Email, Login Password
→ POST /api/login
→ Backend validates, returns JWT tokens
→ Frontend stores tokens in localStorage/sessionStorage
→ Redirect to Dashboard
→ All future API calls include Authorization header
```

**2. Protected Routes**
```javascript
// Dashboard is protected - only authenticated users can access
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  if (!token) return <Navigate to="/login" />;
  return children;
};
```

**3. Compose & Schedule**
```javascript
// User fills form:
{
  to: "recipient@example.com",
  subject: "Hello",
  body: "This is email body",
  scheduledTime: "2026-05-10T14:30:00"
}
→ POST /api/compose
→ Backend validates
→ Backend stores in MongoDB
→ Cron job picks it up at scheduled time
→ Email automatically sent
```

**4. Real-time Dashboard**
```javascript
// On Dashboard load:
GET /api/mails (with JWT token)
→ Backend finds all emails for this user
→ Returns: to, subject, status, createdAt
→ Frontend displays in table/list view
→ User sees: Sent, Scheduled, Failed emails
```

---

## Backend Implementation

### Express.js Server Structure

**Entry Point** (`index.js`):
```javascript
import app from './app.js';
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Application Setup** (`app.js`):
```javascript
// 1. Parse JSON requests
app.use(express.json());

// 2. Allow cross-origin requests (frontend can call API)
app.use(cors({ origin: "*" }));

// 3. Load environment variables
dotenv.config();

// 4. Register routes
app.use('/api', registerRouter);      // Auth & email routes
app.use('/api', cronRouter);          // Cron status routes

// 5. Start cron scheduler
import './Cron/scheduler.js';         // Background job
```

### Core Modules

#### 1. Authentication Controller
```
authController.js
├─ signup(req, res)
│  ├─ Validate email doesn't exist
│  ├─ Hash login password with bcrypt (10 salt rounds)
│  ├─ Store user + Gmail app password in MongoDB
│  └─ Return success/error
│
├─ login(req, res)
│  ├─ Find user by email
│  ├─ Compare password with bcrypt
│  ├─ Generate JWT access token (short-lived: 15 min)
│  ├─ Generate JWT refresh token (long-lived: 7 days)
│  ├─ Store refresh token in user document
│  └─ Return tokens to frontend
│
└─ mails(req, res)
   ├─ Verify JWT token (auth middleware)
   ├─ Query MongoDB for user's emails
   ├─ Sort by newest first
   └─ Return: to, subject, status, createdAt
```

#### 2. Data Models

**User Model** (`user.models.js`):
```javascript
{
  email: String (unique, required),
  loginPassword: String (hashed),
  appPassword: String (Gmail app password),
  refreshToken: String (JWT),
  createdAt: Date,
  updatedAt: Date
}
// Methods:
- isLoginPasswordCorrect(password)
- generateAccessToken()
- generateRefreshToken()
```

**Email Model** (`emails.models.js`):
```javascript
{
  userId: ObjectId (Reference to User),
  to: String (recipient email),
  subject: String,
  body: String (email content),
  scheduledTime: Date,
  status: String (enum: "draft", "scheduled", "sent", "failed"),
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. MongoDB Connection
**File**: `connection/mongodb.connect.js`
```javascript
// Mongoose connects to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

#### 4. Cron Job Scheduler
**File**: `Cron/scheduler.js`
```javascript
// Runs every minute: "* * * * *"
cron.schedule("* * * * *", async () => {
  // 1. Find all scheduled emails where time <= now
  const mails = await email.find({
    scheduledTime: { $lte: new Date() },
    status: "scheduled"
  });

  // 2. For each email:
  for (const mail of mails) {
    try {
      // Get user's Gmail app password
      const user = await User.findById(mail.userId);
      
      // Send email via Nodemailer + Gmail SMTP
      await sendMailFromUser(
        user.email,           // From
        mail.to,              // To
        mail.subject,         // Subject
        mail.body,            // Plain text
        `<p>${mail.body}</p>` // HTML
      );
      
      // Mark as sent
      mail.status = "sent";
      await mail.save();
      
    } catch (error) {
      // Mark as failed on error
      mail.status = "failed";
      await mail.save();
      console.error(error);
    }
  }
});
```

#### 5. Email Sender (Nodemailer Integration)
**File**: `utils/mailer.js`
```javascript
export const sendMailFromUser = async (
  fromEmail,    // User's email
  to,           // Recipient
  subject,      // Email subject
  text,         // Plain text version
  html          // HTML version
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: fromEmail,
      pass: appPassword  // Gmail app password (not login password)
    }
  });
  
  await transporter.sendMail({
    from: fromEmail,
    to: to,
    subject: subject,
    text: text,
    html: html
  });
};
```

### API Endpoints

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| POST | `/api/signup` | Register new user | ❌ |
| POST | `/api/login` | Authenticate user | ❌ |
| GET | `/api/mails` | Get user's emails | ✅ JWT |
| POST | `/api/compose` | Send email immediately | ✅ JWT |
| POST | `/api/schedule` | Schedule email | ✅ JWT |

### Security Measures

**1. Password Security**
- Login passwords hashed with bcrypt (10 rounds)
- Gmail app passwords stored encrypted
- Plain passwords never logged

**2. Authentication**
- JWT tokens (stateless, no server session)
- Access token: short-lived (15 min)
- Refresh token: long-lived (7 days), stored in DB
- Token validation on protected endpoints

**3. Input Validation**
- Email format validation
- Required fields checked
- SQL injection prevention (Mongoose)

**4. CORS**
- Allows frontend to call backend API
- `origin: "*"` (should be restricted in production)

---

## How It All Works Together: User Journey

### Complete User Workflow

```
1. LANDING PAGE
   └─ User visits https://recrailer.vercel.app
   └─ Sees: MainPage with Sign Up / Log In options
   
2. SIGN UP FLOW
   └─ User clicks "Sign Up"
   └─ Fills form: Email, Password, Gmail App Password
   └─ Frontend: POST /api/signup
   └─ Backend: 
       ├─ Validates email is unique
       ├─ Hashes login password
       ├─ Stores: email, hashedPassword, appPassword in MongoDB
       └─ Returns success
   └─ Frontend: Redirects to /login
   
3. LOGIN FLOW
   └─ User clicks "Log In"
   └─ Fills form: Email, Password
   └─ Frontend: POST /api/login
   └─ Backend:
       ├─ Finds user by email
       ├─ Verifies password with bcrypt
       ├─ Generates JWT access + refresh tokens
       ├─ Stores refresh token in user document
       └─ Returns: accessToken, refreshToken, email
   └─ Frontend: 
       ├─ Stores tokens in localStorage
       ├─ Sets Authorization header: "Bearer <accessToken>"
       └─ Redirects to /dashboard
   
4. DASHBOARD VIEW
   └─ User sees their email campaigns
   └─ Frontend: GET /api/mails (with JWT)
   └─ Backend:
       ├─ Validates JWT token
       ├─ Finds all emails for this user
       └─ Returns: to, subject, status (sent/scheduled/failed)
   └─ Frontend: Displays in table
       ├─ Shows recipient, subject, delivery status
       ├─ Sorted by newest first
       └─ User can see history of campaigns
   
5. COMPOSE NEW EMAIL
   └─ User clicks "Compose New"
   └─ Fills form: To (recipient), Subject, Body
   └─ User chooses: Send Now OR Schedule
   
6A. SEND NOW (Immediate)
    └─ Frontend: POST /api/compose (with JWT)
    └─ Backend:
        ├─ Validates JWT + inputs
        ├─ Fetches user's Gmail app password
        ├─ Uses Nodemailer to send via Gmail SMTP:
        │  ├─ From: user@gmail.com
        │  ├─ To: recipient@gmail.com
        │  └─ Subject & Body
        ├─ Creates MongoDB document: status = "sent"
        └─ Returns: Email sent successfully
    └─ Frontend: 
        ├─ Shows success message
        └─ Redirects to /dashboard
    └─ Email arrives in recipient's inbox instantly

6B. SCHEDULE FOR LATER
    └─ User clicks "Schedule for Later"
    └─ User picks: Date + Time
    └─ Frontend: POST /api/schedule (with JWT)
    └─ Backend:
        ├─ Validates JWT + inputs
        ├─ Creates MongoDB document:
        │  ├─ userId: <user id>
        │  ├─ to: recipient email
        │  ├─ subject: email subject
        │  ├─ body: email body
        │  ├─ scheduledTime: future date/time
        │  └─ status: "scheduled"
        └─ Returns: Email scheduled successfully
    └─ Frontend: Shows scheduled time, redirects to /dashboard
    
7. BACKGROUND CRON JOB (Every Minute)
   └─ Cron scheduler runs: "* * * * *"
   └─ Backend Cron Scheduler:
       ├─ Queries MongoDB for:
       │  ├─ scheduledTime <= now
       │  └─ status == "scheduled"
       ├─ For each matching email:
       │  ├─ Fetches user (gets Gmail app password)
       │  ├─ Uses Nodemailer to send email
       │  ├─ Updates MongoDB: status = "sent"
       │  └─ Logs: "Email sent from X to Y"
       └─ Repeats every 60 seconds
   
8. SCHEDULED EMAIL VIEW
   └─ User clicks "Scheduled Emails"
   └─ Frontend: GET /api/scheduled (with JWT)
   └─ Backend: Returns all emails with status = "scheduled"
   └─ Frontend: Shows upcoming emails with scheduled time
   
9. DASHBOARD UPDATE (After Email Sent)
   └─ User refreshes dashboard (or auto-refresh with polling)
   └─ Frontend: GET /api/mails
   └─ Backend: Returns updated statuses
   └─ Frontend: User sees email moved to "Sent" folder
   └─ Shows: "Email to recipient@gmail.com sent at 2:30 PM"
```

---

## How This Project Demonstrates Software Engineering Principles

### Unit 1: Software Process Models
- **Agile Development**: Iterative features (login → email → schedule)
- **Incremental Delivery**: Deployed to Vercel/Render at key milestones
- **Continuous Integration**: Tests before merging (though could be enhanced)

### Unit 2: Requirements Engineering
- **Functional Requirements Met**:
  - ✅ User can register securely
  - ✅ User can log in with JWT
  - ✅ User can compose emails
  - ✅ User can schedule emails
  - ✅ Emails automatically sent via cron
  
- **Non-Functional Requirements**:
  - ✅ **Security**: Bcrypt, JWT, Gmail app passwords
  - ✅ **Scalability**: MongoDB Atlas, Render auto-scaling
  - ✅ **Performance**: JWT (stateless), optimized queries
  - ✅ **Reliability**: Error handling, failed email retry potential
  - ✅ **Maintainability**: Separated concerns (controllers, models, routes)

### Unit 3: Software Design
- **Use Case Diagram**: Identified all user interactions (signup, login, compose, schedule)
- **Class Diagram**: User and Email models with relationships
- **Sequence Diagram**: Email sending workflow (compose → schedule → cron → send)
- **Activity Diagram**: Email lifecycle (draft → scheduled → sent/failed)
- **High Cohesion**: Each controller/route has single responsibility
- **Low Coupling**: Frontend/Backend separated, modules independent

### Unit 4: Software Construction
- **Coding Standards**: 
  - Meaningful variable names
  - Consistent formatting
  - Modular structure
  
- **Code Reviews**: (Could be implemented in GitHub)
- **Defensive Programming**:
  - Input validation on all endpoints
  - JWT verification on protected routes
  - Error handling with try-catch
  - Bcrypt for password security
  
- **Design Patterns**:
  - **MVC Pattern**: Models, Controllers, Routes separation
  - **Factory Pattern**: Nodemailer creates transporter instances
  - **Strategy Pattern**: Different auth methods (JWT, Bcrypt)
  - **Observer Pattern**: Cron job observes scheduled emails

### Unit 5: Software Metrics
- **Function Points**: Core features countable
- **Code Metrics**:
  - Controllers: Low complexity functions
  - Models: Clear single responsibility
  - Routes: Simple request handling
  
- **Effort Estimation**: COCOMO could estimate total LOC
- **Quality Metrics**: Test coverage (could be improved)

### Unit 6: Software Testing
- **Manual Testing**: Users test by composing/scheduling emails
- **Integration Testing** (Needed):
  - Test signup → login → compose → send flow
  - Mock Gmail SMTP service
  
- **Unit Testing** (Needed):
  - Test bcrypt hashing
  - Test JWT token generation
  - Test email model validation
  
- **Black-Box Testing**:
  - Test with various email formats
  - Boundary: Schedule time in past
  - Invalid inputs: Malformed emails
  
- **Regression Testing**: After updates, test all endpoints still work

---

## Deployment Architecture

### Frontend Deployment (Vercel)
```
GitHub Repository
     ↓
Vercel Auto-Deploy
     ↓
Built & optimized React app
     ↓
Global CDN
     ↓
Instant access worldwide
```
- **URL**: https://recrailer.vercel.app
- **Auto-updates**: Push to GitHub → automatic build & deploy

### Backend Deployment (Render)
```
Node.js Server
     ↓
Environment Variables
     ├─ MONGODB_URI
     ├─ JWT_SECRET
     └─ PORT
     ↓
MongoDB Atlas (Cloud)
     ↓
External API Access
     ├─ Gmail SMTP
     └─ Nodemailer
```
- **Cron runs continuously**: 24/7 background job
- **Auto-scales**: Handles increased traffic

---

## Potential Improvements

### Phase 2 Features
1. **Email Templates**: Pre-designed templates
2. **Bulk Upload**: CSV file with multiple recipients
3. **Analytics**: Open rates, click tracking
4. **Retry Logic**: Automatically retry failed emails
5. **Rate Limiting**: Prevent spam abuse
6. **Email Logs**: Detailed delivery reports
7. **Unsubscribe Management**: GDPR compliance
8. **A/B Testing**: Test subject lines and content

### Code Quality
1. **Comprehensive Testing**:
   - Unit tests for all controllers
   - Integration tests for API flows
   - E2E tests for user journeys

2. **Documentation**:
   - API documentation (Swagger/OpenAPI)
   - Architecture diagrams
   - Setup guides

3. **Security**:
   - HTTPS everywhere ✅
   - Rate limiting
   - Input sanitization
   - CORS restriction (not "*")
   - Refresh token rotation

4. **Performance**:
   - Implement caching (Redis)
   - Database indexing
   - Query optimization
   - Email queue system

---

## Conclusion: From Theory to Practice

This project beautifully demonstrates all six units of Software Engineering:

1. **Planning** (Unit 1): Agile process with incremental features
2. **Requirements** (Unit 2): Clear functional and non-functional needs
3. **Design** (Unit 3): Well-architected frontend/backend separation
4. **Construction** (Unit 4): Clean, modular code with security
5. **Metrics** (Unit 5): Measurable functionality and complexity
6. **Testing** (Unit 6): Manual testing, with room for automation

The project is **production-ready** and demonstrates professional software engineering practices. It's a great portfolio project that shows:
- Full-stack capabilities
- Security awareness
- Scalability thinking
- User-centric design
- Professional deployment

---

**Thank you for reviewing this comprehensive presentation!**

---
