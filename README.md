# Recrailer-2.0

[![Live Demo](https://img.shields.io/badge/demo-online-green)](https://recrailer.vercel.app)

Recrailer-2.0 is a full-stack email campaign manager built with **React (frontend)** and **Node.js + Express + MongoDB (backend)**. It allows users to register, securely store Gmail app passwords, compose and schedule emails, and send them through Gmail’s SMTP using Nodemailer.

---

## Features

- **User Authentication** – Secure signup/login with hashed login password.  
- **App Passwords** – Gmail app passwords   
- **JWT Authentication** – Access + refresh tokens for session handling.  
- **Email Sending** – Send emails using Nodemailer + Gmail SMTP.  
- **Campaign Management** – Compose, schedule, and track mail delivery.  
- **Dashboard UI** – Frontend with React, styled with CSS.  
- **Cron Jobs** – Automated execution of scheduled mails.  

---

## Tech Stack

- **Frontend**: React, React Router, Lucide Icons  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Auth & Security**: Bcrypt, JWT  
- **Email Service**: Nodemailer + Gmail  
- **Deployment**: Vercel (frontend), Render (backend)  

---

## Getting Started

### Prerequisites
- Node.js v16+  
- npm   
- MongoDB instance Atlas
- Gmail App Password (per user)

### Installation

```bash
# Clone repo
git clone https://github.com/Shourya523/Recrailer-2.0.git
cd Recrailer-2.0

# Install backend
cd backend
npm install

# Install frontend
cd ../frontend
npm install
```

---

## Environment Variables

Create `.env` in `backend/`:

```
MONGODB_URI=
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
PORT=8000
CORS=

```

---

## Running Locally

```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
```


---

## Folder Structure

```
Recrailer-2.0/
├── backend/
|   ├── connection/
│   ├── controllers/   # signup, login, mails
|   ├── Cron/
|   ├── middlewares/
│   ├── models/        # user + emails schemas
│   ├── routes/        # API endpoints
│   ├── utils/         # mail sending logic
│   ├── index.js
|   ├── app.js
|   ├── config.js
├── frontend/
│   ├── src/
│   │   ├── components/  # Login, Signup, Dashboard, ComposePage
│   │   └── App.js
│   ├── public/
│   └── index.css
```

---

## API Endpoints

| Method | Route             | Description                        |
|--------|-------------------|------------------------------------|
| POST   | `/sign-up`         | Register new user                  |
| POST   | `/log-in`          | Authenticate + issue tokens        |
| GET    | `/scheduled`          | Get user’s sent/scheduled mails    |
| POST   | `/send-mail`      | Send email via Gmail SMTP          |
| GET    | `/run-cron`       | Cron endpoint to process schedules |

---

## Usage

1. **Signup** with email, login password, and Gmail App Password.  
2. **Login** to get JWT access & refresh tokens.  
3. **Compose & Schedule** emails from the dashboard.  
4. **Mails auto-send** via cron jobs at the scheduled time.  
5. **Track delivery** status in the dashboard.  

---

## License

This project is licensed under the MIT License.
