# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

- **Frontend**: React app (in `Frontend/`)
- **Backend**: Express server (in `Backend/`)

## Setup Steps

### 1. Backend Setup

```sh
cd Backend
npm install
npm start
```
- The backend runs on [http://localhost:2025](http://localhost:2025).

### 2. Frontend Setup

```sh
cd Frontend
npm install
npm start
```
- The frontend runs on [http://localhost:3000](http://localhost:3000).

## Usage

### Signup Form

- Click **Sign In** on the homepage.
- Enter your email and submit to receive a dummy OTP (shown in the console).
- Enter the OTP to sign in.

### Admin Dashboard

- Sign in with the admin email: `adarshreddy2106@gmail.com`.
- You will see the Admin Dashboard with alumni management options.

### Profile Page

- After signing in (with any non-admin email), you will see the Profile Page.
- Enter or update your personal and professional details.
- Click **Request Verification** to send a verification request (shows an alert).

### Contact Form

- Available to signed-in users (non-admin).
- Fill in your name, email, and message.
- create a app password for gmail by two step verification and use nodemailer to send mails.
- Submit to send a message to the admin email.

---
The page will reload when you make changes. You may also see any lint errors