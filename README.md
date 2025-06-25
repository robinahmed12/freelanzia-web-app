
# Freelanzia - Freelance Task Marketplace



TaskFlow is a platform that connects individuals needing small tasks completed with skilled freelancers. It provides a seamless way to post tasks, bid on opportunities, and collaborate based on skills, budget, and deadlines.

## Live Demo

🔗 [View Live Site](https://freelanzia-auth.web.app/)



## 🚀 Key Features

- 🔐 **Firebase Authentication** (Email/Password, Google Sign-In)
- 📋 **Task CRUD** operations: Post, Edit, Delete, and View Details
- 🧑‍💻 **Freelancer Bidding System** with live bid count tracking
- 🎯 **Private/Protected Routes** with session persistence
- 🎡 **Home Banner Slider**, Featured Tasks & Extra Sections
- 🌙 **Dark/Light Theme Toggle** for enhanced UX
- 📱 **Fully Responsive Design** (Mobile, Tablet & Desktop)
- 🍞 **React Toastify & SweetAlert2** for alerts and feedback
- 🔍 **React Query** for efficient data fetching and caching




## Technologies Used

### Frontend
- React 19
- React Router v7
- Tailwind CSS
- Framer Motion (for animations)
- React Query (for data fetching)
- Firebase Authentication
- SweetAlert2 (for notifications)
- React Simple Typewriter (for typing effects)
- Keen Slider (for carousels)

### Backend
- Node.js
- Express.js
- MongoDB
- Vercel (for deployment)




Project Structure



taskflow/

├── client/                  # Frontend code
│   ├── public/       
# Static files
│   └── src/      
# React components
│       ├── assets/ 
# Images, icons
│       ├── components/ 
# Reusable components
│       ├── context/ 
# Context providers
│       ├── hooks/ 
# Custom hooks
│       ├── pages/ 
# Page components

│       ├── routes/
# Route configurations
│       └── styles/          # CSS/Tailwind files
├── server/     
# Backend code
│   ├── controllers/
# Route controllers
│   ├── models/  
# Database models
│   ├── routes/    
# API routes
│   └── utils/    
# Utility functions
└── README.md     
# Project documentation



Key Functionality

Home Page: 
Features a dynamic slider, featured tasks section, and statistics

Task Management:
Full CRUD operations for tasks with protected routes

Authentication: 
Secure login with password validation and Google OAuth

Bidding System:
Track bids on tasks with real-time updates

Responsive UI:
Adapts to all screen sizes with Tailwind CSS

Theme Toggle:
Switch between dark and light modes


<br>

🚀 Local Development Setup
Prerequisites
Node.js (v18 or later recommended)
<br>

npm (comes with Node.js)

<br>

or Yarn

Git (for cloning the repository)
<br>

Quick Start Guide
<br>

Clone the repository

<br>

bash
<br>
[git clone https://github.com/your-username/repo-name.git](https://github.com/robinahmed12/freelanzia-client-side.git)
<br>

cd repo-name

<br>
Install dependencies

bash
npm install

<br>
# or
yarn install
<br>

Start the development server

bash
npm run dev
# or
yarn dev
<br>

Open in your browser
<br>

The app will typically run on:


http://localhost:5173
(Check your terminal for the exact URL)

Alternative Commands
<br>

Production build:

bash
<br>
npm run build
<br>

Preview production build:

bash
<br>

npm run preview




<br>




Contact
For questions or feedback, please contact:

Owner- @robinahmed12

Project Link: https://freelanzia-auth.web.app/
