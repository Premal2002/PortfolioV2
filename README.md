# Premal Kadam — Portfolio Website

A modern, high-performance personal portfolio built with **React 18, Vite, Tailwind CSS, and Radix UI**.
Designed to showcase professional experience, technical expertise, and featured projects with a clean, responsive, and accessible UI.

---

## 🌐 Live Demo

> *(Add your deployed URL here once deployed)*
> Example: [https://premalkadam.dev](https://premalkadam.dev)

---

## 🧑‍💻 About The Project

This portfolio is built to reflect:

* Clean UI design principles
* Modern frontend architecture
* Component-driven development
* Accessibility-first UI using Radix primitives
* Smooth UX with animations & responsive layout

It highlights:

* Professional Experience
* Technical Skills
* Featured Projects
* Education & Certifications
* Contact & Social Links

---

## 🛠 Tech Stack

### Core

* ⚛️ React 18
* ⚡ Vite 5
* 🎨 Tailwind CSS
* 🧩 Radix UI Primitives
* 🎭 shadcn-style component architecture

### UI & Utilities

* Lucide Icons
* class-variance-authority
* clsx
* tailwind-merge
* sonner (toast notifications)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── portfolio/       # Main portfolio sections
│   └── ui/              # Reusable UI components (Radix-based)
│
├── data/
│   └── mock.js          # Portfolio content data
│
├── hooks/
│   └── use-toast.js
│
├── App.jsx
├── main.jsx
└── index.css
```

Architecture follows a **clean separation of concerns**:

* `portfolio/` → Business content components
* `ui/` → Reusable UI primitives
* `data/` → Centralized content management

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd portfolio
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

### 4️⃣ Build for Production

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## 🎨 Customization Guide

### Update Personal Information

Modify:

```
src/data/mock.js
```

Update:

* Name
* Title
* Experience
* Skills
* Projects
* Social links

---

### Update Theme / Styling

* Tailwind config → `tailwind.config.js`
* Global styles → `src/index.css`
* Color palette → Modify Tailwind tokens

---

## 📦 Deployment

This project can be deployed easily to:

* Vercel
* Netlify
* GitHub Pages
* Azure Static Web Apps

For Vercel:

```bash
npm run build
```

Deploy `dist/` directory.

---

## ✨ Features

* Fully responsive design
* Smooth scroll navigation
* Animated hero section
* Timeline-based experience layout
* Toast-based form feedback
* Reusable component system
* Clean dark modern aesthetic

---

## 🔒 Performance & Optimization

* Vite for lightning-fast builds
* Tree-shakable Radix primitives
* Optimized production build
* No unnecessary dependencies
* Minimal runtime overhead

---

## 🧠 Design Philosophy

This portfolio emphasizes:

* Clarity over clutter
* Accessibility-first components
* Semantic HTML structure
* Scalable UI architecture
* Maintainable codebase

---

## 📬 Contact

**Premal Kadam**
Full-Stack / Backend Engineer

* LinkedIn: *(Add link)*
* GitHub: *(Add link)*
* Email: *(Add email)*

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ If You Like This Project

Give it a star on GitHub — it helps!

---
