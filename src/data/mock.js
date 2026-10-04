import {
  Code2,
  Server,
  Database,
  Globe,
  Container,
  GitBranch,
  Layers,
  Cpu,
  Monitor,
  ShoppingCart,
  Ticket,
  Bot,
} from "lucide-react";
import React from "react";

export const personalInfo = {
  name: "Premal Kadam",
  firstName: "Premal",
  lastName: "Kadam",
  title: "Software Developer",
  tagline: "Building scalable, real-time & data-driven applications",
  email: "premkasdam143@gmail.com",
  phone: "+91-9768342809",
  location: "Thane, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/premal-kadam/",
  github: "https://github.com/Premal2002",
  summary:
    "Software Developer with hands-on experience building scalable, real-time, and data-driven applications using modern backend and frontend technologies. Strong expertise in ASP.NET Core, microservices, GraphQL, gRPC, WebSockets, and Docker, with a focus on clean architecture, performance optimization, and reliable data synchronization.",
  summaryExtended:
    "Experienced in developing responsive user interfaces using React, Next.js, Angular, Single-SPA, and GoJS. Microsoft Azure Fundamentals certified, with a strong focus on maintainable and cloud-native system design.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  languages: {
    title: "Languages",
    icon: React.createElement(Code2, { size: 20 }),
    items: ["C#", "JavaScript", "Typescript", "SQL", "Java"],
  },
  backend: {
    title: "Backend",
    icon: React.createElement(Server, { size: 20 }),
    items: [
      "ASP.NET Core",
      ".NET 8",
      "MVC",
      "LINQ",
      "EF Core",
      "Hot Chocolate",
      "GraphQL Subscriptions",
      "WebSockets",
      "Unit/TDD testing",
      "REST API design",
      "Azure basics"
    ],
  },
  frontend: {
    title: "Frontend",
    icon: React.createElement(Globe, { size: 20 }),
    items: ["React",  "Micro-frontends (Single-SPA)", "Angular"],
  },
  databases: {
    title: "Databases",
    icon: React.createElement(Database, { size: 20 }),
    items: ["SQLite", "SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
  },
  devops: {
    title: "DevOps & Tools",
    icon: React.createElement(Container, { size: 20 }),
    items: ["Docker", "Git", "GitHub", "Postman", "Visual Studio", "VS Code"],
  },
  architecture: {
    title: "Architecture",
    icon: React.createElement(Layers, { size: 20 }),
    items: [
      "Clean Architecture",
      "DDD",
      "CQRS",
      "Microservices",
      "Event-Driven",
    ],
  },
};

export const experience = [
  {
    company: "WonderBiz Technologies",
    role: "Software Developer",
    period: "Mar 2025 – Present",
    current: true,
    descriptions: [
      "Built full-stack features for a device-management platform using .NET 8 microservices, GraphQL, gRPC, and React micro-frontends, following Clean Architecture, DDD, CQRS.",
      "Led end-to-end development of an alarm inhibition feature, covering UI, APIs, suppression and restore logic, role-based access, audit events, and real-time GraphQL subscriptions.",
      "Designed and developed a PDF report export for live topology diagrams, including architecture design, snapshot capture from the diagram, and integration with a PDF generation service.",
      "Built internal tools (a multi-repo build automation tool and a .NET WPF debugging tool) adopted by multiple developers, and fixed production defects across frontend and backend."
    ],
    tech: [".NET 8", "GraphQL", "Docker", "EF Core", "CQRS", "Hot Chocolate", "React", "Single-SPA", "WPF", "Angular"],
  },
  {
    company: "Stavtar Solutions",
    role: "Associate Software Developer",
    period: "Aug 2024 – Feb 2025",
    current: false,
    descriptions: [
      "Built and maintained ASP.NET Core Web APIs integrating accounting systems using REST and EF Core.",
      "Handled data synchronization for invoices, transactions, and vendor records.",
      "Optimized SQL Server and MySQL queries and followed Git-based workflows.",
    ],
    tech: ["ASP.NET Core", "REST", "EF Core", "SQL Server", "MySQL", "Git"],
  },
];

export const projects = [
  // ─────────────────────────────────────────────────────────────
  // PROJECT 1 — WhatsApp Food Ordering Bot (NEW)
  // ─────────────────────────────────────────────────────────────
  {
    title: "WhatsApp Food Ordering Bot",
    year: "2026",
    icon: React.createElement(Bot, { size: 24 }),
    descriptions: [
      "Built a WhatsApp ordering bot (Node.js, MongoDB, WhatsApp Cloud API) handling the full flow — menu, cart, delivery, and payment verification.",
      "Added geolocation-based delivery pricing and a React + TypeScript admin dashboard with analytics and CSV export.",
    ],
    tech: [
      "Node.js",
      "MongoDB",
      "WhatsApp Cloud API",
      "React",
      "TypeScript",
    ],
    github: "https://github.com/Premal2002/WhatsApp-automation-Bot"
  },

  // ─────────────────────────────────────────────────────────────
  // PROJECT 2 — TickSync
  // ─────────────────────────────────────────────────────────────
  {
    title: "TickSync — Movie Ticket Booking System",
    year: "2024",
    icon: React.createElement(Ticket, { size: 24 }),
    descriptions: [
      "Full-stack movie ticket booking platform — ASP.NET Core (.NET 8) backend with Next.js 15 frontend, covering movie discovery, seat selection, payments, and admin management.",
      "Real-time seat locking via native WebSockets — seats locked by one user instantly reflect for all concurrent users, eliminating double-booking without polling.",
      "Integrated Razorpay payments, TMDB API sync, role-based JWT auth, email OTP reset, and an admin dashboard with dynamic entity inspection.",
    ],
    tech: [
      "ASP.NET Core",
      ".NET 8",
      "EF Core",
      "SQL Server",
      "WebSockets",
      "JWT",
      "Razorpay",
      "TMDB API",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    github: "https://github.com/Premal2002/TickSyncBackend",
  },

  // ─────────────────────────────────────────────────────────────
  // PROJECT 3 — Device Monitoring System
  // ─────────────────────────────────────────────────────────────
  {
    title: "Device Monitoring System",
    year: "2025",
    icon: React.createElement(Monitor, { size: 24 }),
    descriptions: [
      "Real-time device monitoring platform using ASP.NET Core (.NET 8) and Next.js, with live telemetry pushed via WebSockets for sub-200ms dashboard updates.",
      "GraphQL API (Hot Chocolate) for efficient structured data querying, and interactive network topology visualizations built with GoJS.",
    ],
    tech: [
      "ASP.NET Core",
      ".NET 8",
      "Next.js",
      "WebSockets",
      "GraphQL",
      "React",
      "GoJS",
    ],
    github: "https://github.com/Premal2002/DeviceMonitoringProject"
  },

  // ─────────────────────────────────────────────────────────────
  // PROJECT 4 — eShop Microservices Platform
  // ─────────────────────────────────────────────────────────────
  {
    title: "eShop Microservices Platform",
    year: "2026",
    icon: React.createElement(ShoppingCart, { size: 24 }),
    descriptions: [
      "Modular e-commerce backend using .NET 8 microservices with DDD and CQRS across Catalog, Ordering, and Basket services.",
      "Async event-driven messaging via RabbitMQ and Docker Compose orchestration with EF Core code-first migrations.",
    ],
    tech: [
      ".NET 8",
      "DDD",
      "CQRS",
      "RabbitMQ",
      "Docker",
      "EF Core",
      "Clean Architecture",
    ],
    github: "https://github.com/Premal2002/EShopMicroservices"
  },
];

export const education = [
  {
    institution: "Mumbai University",
    degree: "B.E. in Computer Engineering",
    period: "2021 – 2024",
    score: "CGPA: 9.0",
  },
  {
    institution: "Govt. Polytechnic Mumbai",
    degree: "Diploma in Computer Engineering",
    period: "2019 – 2021",
    score: "82.86%",
  },
];

export const certifications = [
  {
    name: ".Net 8 Microservices: DDD, CQRS, Docker, Redis, RabbitMQ",
    issuer: "Udemy",
    date: "Feb 2026",
    link: "https://www.udemy.com/certificate/UC-a2c54460-1a78-4ec0-9513-0096288803d1/",
  },
  {
    name: "ASP.NET Core GraphQL",
    issuer: "Udemy",
    date: "Sep 2025",
    link: "https://www.udemy.com/certificate/UC-46cbc676-1773-4e59-bcec-0ff67a7bd601/",
  },
  {
    name: "TDD Fundamentals in C#",
    issuer: "Udemy",
    date: "Sep 2025",
    link: "https://www.udemy.com/certificate/UC-a0489648-9cf7-45c6-83df-12facea33cec/",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Dec 2024",
    link: "https://learn.microsoft.com/en-us/users/premkadam-8456/credentials/9c98894328efb98d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    name: "Java Full Stack Professional",
    issuer: "Edu-Bridge Pvt. Ltd.",
    date: "Jun 2024",
    link: "https://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON1123851955",
  },
  {
    name: "Web Development",
    issuer: "Dr. Angela Yu (The App Brewery)",
    date: "Nov 2022",
  },
];

export const contactFormMessages = [];