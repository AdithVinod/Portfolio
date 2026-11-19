# Adith Vinod | Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS. Designed with a cinematic dark interface, violet gradients, glassmorphism effects, and smooth animations to showcase my skills, projects, experience, and journey as a Full Stack Developer.

## 🌐 Live Demo

[View My Portfolio](YOUR_DEPLOYED_PORTFOLIO_URL)

## 📸 Overview

This portfolio highlights my technical skills, development projects, academic background, and professional experience.

### ✨ Features

- **Modern UI:** Dark-themed interface with violet and fuchsia gradients.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Animated Sections:** Smooth animations and transitions using Framer Motion.
- **About Me:** Introduction, interests, and developer profile.
- **Skills:** Organized display of programming languages, frontend, backend, databases, and development tools.
- **Projects Showcase:** Highlights selected development projects with descriptions, technologies, and links.
- **Experience & Education:** Timeline of academic and professional journey.
- **Contact Form:** Send messages directly through EmailJS integration.
- **Social Links:** Quick access to GitHub and LinkedIn.
- **Resume Download:** Downloadable PDF resume.

## 🛠️ Tech Stack

| Category            | Technologies                |
| ------------------- | --------------------------- |
| Frontend            | React.js, JavaScript, HTML5 |
| Styling             | Tailwind CSS                |
| Animations          | Framer Motion               |
| Icons               | Lucide React, React Icons   |
| Contact Integration | EmailJS                     |
| Build Tool          | Vite                        |
| Version Control     | Git, GitHub                 |

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   └── av-logo.png
│   └── Resume - Adith Vinod.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your own EmailJS credentials.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 6. Build for production

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` directory.

## 📬 Contact Form

The portfolio uses EmailJS to handle contact form submissions without requiring a custom backend.

The form collects:

- Name
- Email
- Subject
