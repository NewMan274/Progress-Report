# 📊 Report Progress Web App

A web application for tracking daily project progress reports.  
Built with **React**, **Vite**, **Zustand**, and **Tailwind CSS**.

---

## 🚀 Features
- 📌 Create daily progress reports with:
  - Item of work
  - Weather condition
  - Metres done (auto-calculated from chainages and can be input manually)
  - Starting & ending chainage
  - Work description
  - General remarks
  - Image uploads  
- 📅 Archive view — reports are grouped by date for easy browsing  
- 🏠 Clean homepage with project details  
- ⚡ Fast, lightweight, and styled with Tailwind  

---

## 📂 Project Structure
src/
├── components/

  │ ├── Archive.jsx # Displays all saved reports grouped by date
  │ ├── NewReport.jsx # Form for creating and submitting a new daily report
  │ └── Home.jsx # Homepage with project details (name, description, etc.)
│

├── store/
  │ └── useNewReport.js # Zustand store for managing reports state
│

├── App.jsx # Main application with routing (Home, New Report, Archive)
├── main.jsx # Entry point that renders <App /> into the DOM
└── index.css # Global styles with Tailwind CSS imports


### Explanation
- **components/** → All UI building blocks of the app.
  - `Archive.jsx`: Shows reports organized by date and allows browsing old entries.  
  - `NewReport.jsx`: Input form where users can log new reports with details and images.  
  - `Home.jsx`: The landing page, styled with Tailwind CSS, showing project info.  
- **store/** → Application state management using Zustand.
  - `useNewReport.js`: Centralized store where reports are saved and retrieved.  
- **App.jsx** → Configures React Router and ties pages together.  
- **main.jsx** → Bootstraps the React app (Vite entry point).  
- **index.css** → Tailwind CSS setup + base/global styles.  

---

## 🛠️ Tech Stack
- **React** (Frontend library)
- **Vite** (Build tool)
- **Zustand** (State management)
- **Tailwind CSS** (Styling)
