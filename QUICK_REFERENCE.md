# SOFTWARE ENGINEERING & RECRAILER
## Quick Reference & Visual Guide

---

## UNIT SUMMARY QUICK REFERENCE

| Unit | Topic | Key Points | Hours |
|------|-------|-----------|-------|
| 1 | **Intro to SE** | Process models: Waterfall, Agile, Spiral | 7 |
| 2 | **Requirements** | Elicitation, Analysis, SRS, V&V | 4 |
| 3 | **Design** | UML diagrams, Coupling, Cohesion | 7 |
| 4 | **Construction** | Coding standards, Refactoring, Patterns | 8 |
| 5 | **Metrics** | LOC, FP, Halstead, COCOMO | 7 |
| 6 | **Testing** | White-box, Black-box, Regression | Weeks |

---

## PROCESS MODELS COMPARISON

```
┌─────────────────┬──────────────┬─────────────┬─────────────┐
│ Model           │ Timeline     │ Flexibility │ Best For    │
├─────────────────┼──────────────┼─────────────┼─────────────┤
│ Build & Fix     │ Unpredictable│ Very High   │ Hobby only  │
│ Waterfall       │ Linear       │ Low         │ Stable reqs │
│ Incremental     │ Phased       │ Medium      │ Medium proj │
│ Spiral          │ Iterative    │ High        │ Large/risky │
│ Agile (Scrum)   │ Sprints      │ Very High   │ Modern dev  │
└─────────────────┴──────────────┴─────────────┴─────────────┘
```

---

## DESIGN PATTERNS IN RECRAILER

```
CREATIONAL:
├─ Singleton: One MongoDB connection instance
├─ Factory: Nodemailer transporter factory
└─ Builder: Email object construction

STRUCTURAL:
├─ Adapter: MongoDB ↔ Express
├─ Facade: Express routes hide complexity
└─ Proxy: JWT middleware protects endpoints

BEHAVIORAL:
├─ Observer: Cron observes scheduled emails
├─ Strategy: Bcrypt vs plain text password
└─ Command: Email object encapsulates send action
```

---

## CODE QUALITY METRICS

```
HALSTEAD'S METRIC EXAMPLE:
If authController.js has:
  n1 = 15 (distinct operators: =, &&, if, return, etc)
  n2 = 25 (distinct operands: var names, literals)
  N1 = 150 (total operators)
  N2 = 200 (total operands)

Then:
  Volume = (N1+N2) × log₂(n1+n2)
         = 350 × log₂(40)
         = 350 × 5.32 = 1862 bits

  Difficulty = (n1/2) × (N2/n2)
             = (15/2) × (200/25)
             = 7.5 × 8 = 60

  Effort = Difficulty × Volume = 60 × 1862 ≈ 111,720 seconds
         ≈ 31 hours for one developer
```

---

## TESTING PYRAMID FOR RECRAILER

```
                    ╱╲
                   ╱  ╲ Manual Testing
                  ╱────╲ (Users, UI)
                 ╱      ╲
                ╱────────╲
               ╱  E2E     ╲ Integration Tests
              ╱ Testing   ╲ (Full workflows)
             ╱──────────────╲
            ╱                ╲
           ╱   Unit Tests     ╲ Unit Tests
          ╱    (Functions)    ╲ (Controllers,
         ╱──────────────────────╲ Models)
        ╰──────────────────────────╯

Testing Scenarios for Recrailer:

UNIT TESTS:
✓ bcrypt.hash() produces different output each time
✓ JWT token validates correctly
✓ Email model validation works
✓ Password comparison succeeds for correct password

INTEGRATION TESTS:
✓ Signup → Login → Access protected route flow
✓ Compose email → Check status in database
✓ Schedule email → Cron runs → Email sent

E2E TESTS:
✓ User registers, logs in, composes, schedules email
✓ Verify email arrives in recipient inbox
✓ Check dashboard shows correct status
```

---

## ARCHITECTURE LAYERS

```
┌─────────────────────────────────────────────┐
│           PRESENTATION LAYER                 │
│  React UI: Forms, Dashboard, Components      │
└──────────────────┬──────────────────────────┘
                   │ HTTP/REST
                   ↓
┌─────────────────────────────────────────────┐
│         APPLICATION LAYER                    │
│  Express Routes: /api/signup, /api/compose   │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────┐
│          BUSINESS LOGIC LAYER                │
│  Controllers: signup(), login(), mails()     │
│  Utils: sendMailFromUser()                   │
│  Middleware: verifyJWT()                     │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────┐
│          DATA ACCESS LAYER                   │
│  MongoDB Models: User, Email                 │
│  Mongoose: ORM operations                    │
└──────────────────┬──────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────┐
│         EXTERNAL SERVICES LAYER              │
│  Gmail SMTP, MongoDB Atlas, Node-Cron        │
└─────────────────────────────────────────────┘
```

---

## DATABASE RELATIONSHIPS

```
USER COLLECTION:
┌─────────────────────────────────┐
│ _id: ObjectId                   │
│ email: String (unique)          │
│ loginPassword: String (hashed)  │
│ appPassword: String (encrypted) │
│ refreshToken: String (JWT)      │
│ createdAt: Date                 │
└─────────────────────────────────┘
         │
         │ userId (Foreign Key)
         ↓
EMAIL COLLECTION:
┌──────────────────────────────┐
│ _id: ObjectId                │
│ userId: ObjectId (↑)         │
│ to: String                   │
│ subject: String              │
│ body: String                 │
│ scheduledTime: Date          │
│ status: enum                 │
│ createdAt: Date              │
└──────────────────────────────┘

One User → Many Emails (1:N relationship)
```

---

## JWT TOKEN FLOW

```
┌─────────────┐
│ User Login  │
└──────┬──────┘
       │
       ├─→ Backend validates credentials
       │
       ├─→ Backend creates JWT payload:
       │   {
       │     "_id": "user123",
       │     "email": "user@gmail.com",
       │     "iat": 1234567890,        (issued at)
       │     "exp": 1234568490         (expires at)
       │   }
       │
       ├─→ Backend signs with SECRET_KEY
       │
       ├─→ Response: Two tokens
       │   ├─ accessToken (15 min lifespan)
       │   └─ refreshToken (7 days lifespan, stored in DB)
       │
       └─→ Frontend stores in localStorage
           
When accessing protected routes:
┌──────────────────────┐
│ GET /api/mails       │
│ Header:              │
│ Authorization:       │
│ Bearer <accessToken> │
└─────────┬────────────┘
          │
          ├─→ Backend middleware intercepts
          │
          ├─→ Middleware verifies token:
          │   - Check signature with SECRET_KEY
          │   - Check expiration
          │
          ├─→ If valid: Extract user data from payload
          │
          └─→ If invalid/expired: Return 401 Unauthorized
```

---

## CRON JOB EXECUTION TIMELINE

```
Every Minute Schedule ("* * * * *"):

|  Minute  | Action                                    |
|----------|-------------------------------------------|
| 0:00     | Cron runs, checks DB for emails          |
| 0:01     | No scheduled emails, waits 60 seconds     |
| 1:00     | Cron runs again                           |
| 1:30     | Scheduled email time=1:35 found           |
|          | Not yet time, waits                       |
| 2:30     | Scheduled email time=1:35 found again     |
|          | 1:35 <= 2:30 ✓ SEND EMAIL               |
|          | Nodemailer connects to Gmail              |
|          | Email transmitted                         |
|          | DB updated: status = "sent"               |
| 3:00     | Cron runs, no pending emails              |

EXECUTION ORDER (Detailed):

1. Cron Trigger (Every 60 seconds)
   │
   ├─→ Connect to MongoDB
   │
   ├─→ Query: Find emails where:
   │        status = "scheduled" AND
   │        scheduledTime <= NOW()
   │
   ├─→ For each email found:
   │   ├─→ Fetch user from DB (get Gmail password)
   │   ├─→ Create Nodemailer transporter
   │   ├─→ Send email via Gmail SMTP
   │   ├─→ On success: Update DB status = "sent"
   │   ├─→ On failure: Update DB status = "failed"
   │   └─→ Log result
   │
   └─→ Close connections, wait 60 seconds
```

---

## ERROR HANDLING STRATEGY

```
┌──────────────────────────────┐
│ User Request (API Call)      │
└────────────┬─────────────────┘
             │
             ↓
    ┌───────────────────┐
    │ Validation Layer  │
    │ - Check input     │
    │ - Verify format   │
    └────────┬──────────┘
             │ Invalid? → 400 Bad Request
             ↓ Valid
    ┌───────────────────┐
    │ Auth Layer (JWT)  │
    │ - Verify token    │
    │ - Extract user    │
    └────────┬──────────┘
             │ Invalid? → 401 Unauthorized
             ↓ Valid
    ┌───────────────────┐
    │ Business Logic    │
    │ - Execute action  │
    │ - Access DB       │
    └────────┬──────────┘
             │ Error? → 500 Server Error
             ↓ Success
    ┌───────────────────┐
    │ Response          │
    │ - Success: 200    │
    │ - Created: 201    │
    └───────────────────┘
```

---

## SECURITY FEATURES IMPLEMENTED

```
┌─────────────────────────────────────────┐
│          SECURITY LAYERS                │
├─────────────────────────────────────────┤
│ 1. HTTPS/TLS                            │
│    ✓ All data encrypted in transit      │
│                                         │
│ 2. AUTHENTICATION                       │
│    ✓ Bcrypt password hashing (10 rounds)│
│    ✓ JWT tokens (access + refresh)      │
│    ✓ Token validation on protected      │
│                                         │
│ 3. CREDENTIAL STORAGE                   │
│    ✓ Login password: Hashed             │
│    ✓ Gmail app password: Encrypted      │
│    ✓ Refresh token: Stored in DB        │
│                                         │
│ 4. INPUT VALIDATION                     │
│    ✓ Email format checked               │
│    ✓ Required fields validated          │
│    ✓ No SQL injection (Mongoose)        │
│                                         │
│ 5. AUTHORIZATION                        │
│    ✓ Only authenticated users access    │
│    ✓ Users see only their emails        │
│    ✓ JWT contains userId for filtering  │
│                                         │
│ 6. ERROR MESSAGES                       │
│    ✓ Generic messages (no info leaks)   │
│    ✓ "Email/Password incorrect"         │
│    ✓ No "user not found" vs            │
│      "password wrong" distinction       │
└─────────────────────────────────────────┘
```

---

## KEY METRICS FOR PROJECT QUALITY

```
Code Metrics:
├─ Lines of Code (LOC): ~2000 total
├─ Cyclomatic Complexity: Low (< 5 per function)
├─ Code Coverage: 0% (No tests yet) ❌ IMPROVEMENT NEEDED
├─ Modularity: High (Separated concerns) ✓
└─ Documentation: Medium (Code could use comments)

Performance Metrics:
├─ API Response Time: ~100-500ms (good)
├─ Email Send Time: ~2-5 seconds (good)
├─ Database Query Time: ~50-100ms (optimized)
└─ Cron Job Frequency: 60 seconds (acceptable)

Reliability Metrics:
├─ Error Handling: 70% (could improve)
├─ Test Coverage: 0% (needs tests)
├─ Security Score: 85% (good, small improvements needed)
└─ Deployment Success: 100% (Vercel/Render)
```

---

## PRESENTATION TIPS

### How to Present This Material

**Opening (2 minutes)**
- "Today we're discussing Software Engineering principles through a real project"
- "We'll cover 6 units: Planning, Requirements, Design, Construction, Metrics, Testing"
- "Then see how Recrailer applies each principle"

**Unit Presentations (1 minute each)**
- Start with WHY (why does this matter?)
- Show WHAT (what are the concepts?)
- Give real EXAMPLES (from Recrailer)
- End with VALUE (how does this improve quality?)

**Project Deep Dive (5-10 minutes)**
- Show live demo: https://recrailer.vercel.app
- Walk through signup flow
- Compose and schedule an email
- Show dashboard with status

**Q&A Strategy**
- "Does anyone use Agile in their team?" (Engagement)
- "What was unclear?" (Feedback)
- "Any security concerns?" (Critical thinking)

**Closing**
- Recap: 6 units applied in real project
- Key takeaway: SE practices are not theoretical
- Call to action: "Apply these principles in your projects"

---

## PRESENTATION SLIDES BREAKDOWN

```
Slide 1:  Title Slide
Slide 2:  Course Overview (6 Units)
Slide 3:  Software Development Problem
Slide 4:  Process Models Comparison

UNIT 1 (Slides 5-8):
Slide 5:  Software Process Models
Slide 6:  Waterfall vs Agile
Slide 7:  Project Management Tools (Gantt, PERT)
Slide 8:  Unit 1 Summary

UNIT 2 (Slides 9-11):
Slide 9:  Requirement Elicitation
Slide 10: SRS Document
Slide 11: Requirements V&V

UNIT 3 (Slides 12-16):
Slide 12: UML Diagrams Overview
Slide 13: Use Case Diagram
Slide 14: Class Diagram
Slide 15: Sequence Diagram
Slide 16: Coupling vs Cohesion

UNIT 4 (Slides 17-21):
Slide 17: Coding Standards
Slide 18: Code Reviews
Slide 19: Code Refactoring
Slide 20: Design Patterns
Slide 21: Defensive Programming

UNIT 5 (Slides 22-25):
Slide 22: Software Metrics Overview
Slide 23: Lines of Code & Function Points
Slide 24: Halstead Metrics
Slide 25: COCOMO Model

UNIT 6 (Slides 26-30):
Slide 26: Testing Overview
Slide 27: White-Box Testing
Slide 28: Black-Box Testing
Slide 29: Test Coverage
Slide 30: Testing Best Practices

RECRAILER (Slides 31-40):
Slide 31: Project Overview
Slide 32: Tech Stack
Slide 33: Architecture Diagram
Slide 34: User Flow
Slide 35: Frontend Technologies
Slide 36: Backend Architecture
Slide 37: Database Schema
Slide 38: API Endpoints
Slide 39: Security Implementation
Slide 40: Live Demo

CONCLUSION (Slides 41-42):
Slide 41: How SE Principles Applied
Slide 42: Lessons Learned & Q&A
```

---

## COMMON QUESTIONS & ANSWERS

**Q: Why use Agile instead of Waterfall?**
A: Agile allows for changing requirements. Users often don't know what they want initially. Waterfall works for stable projects (space missions, defense). Recrailer needed flexibility to add features like scheduling.

**Q: Why hash passwords instead of encrypting?**
A: Hashing is one-way; even if database is stolen, passwords can't be recovered. Encryption is two-way; if key is stolen, passwords are exposed. For passwords, hashing is better.

**Q: What happens if Cron job fails?**
A: Email status stays "scheduled". Next cron run will retry. Could implement exponential backoff. In production, should log and alert.

**Q: Why JWT instead of server sessions?**
A: JWT is stateless. Server doesn't need to store sessions. Scalable to multiple servers. Drawback: Can't revoke token immediately (only on expiry).

**Q: How to handle email failures?**
A: Current: Mark as "failed". Better: Implement retry queue, exponential backoff, alert admin after 3 failures.

**Q: Is this production-ready?**
A: 90% ready. Needs: automated tests, better error handling, rate limiting, monitoring, email templates.

---

**Ready to Present! Good Luck! 🚀**
