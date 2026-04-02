# ✨ SparkSpirit Shop

> **A premium fashion e-commerce experience designed for minimalism and high-end aesthetics.**
SparkSpirit Shop is a modern e-commerce platform built with a focus on clean design ("High-Fashion Vibe"), performance, and a seamless user experience.
---
## 🛠️ Tech Stack
### **Backend**
- **Node.js & Express**: Robust REST API architecture
- **Prisma ORM**: Type-safe database access
- **SQLite3**: Lightweight and efficient relational database
- **JWT Auth**: Secure user authentication (Login/Register)

### **Frontend**
- **React (Vite)**: Fast, modern frontend build tool
- **Tailwind CSS** (Planned): For that minimalist, high-end styling

---

## 🚀 Key Features

- **Authentication**: Secure user registration and login with JWT.
- **Product Management**: Full CRUD operations for Products and Categories.
- **Minimalist Design**: Focused on bold typography and high-quality imagery.
- **Database**: Relational data modeling with Prisma (Users, Products, Categories, Testimonials).
- **CI/CD**: Automated GitHub Actions for building, linting, and testing both client and server.
- **Deployment**: Automatic deployment to AWS EC2 via SSH and Docker-Compose.
- **Testing**: Comprehensive Unit (Jest/Vitest), Integration (Supertest), and E2E (Playwright) testing.

---

## 📂 Project Structure

```
SparkSpirit-Shop/
├── server/                 # Backend API
│   ├── src/
│   │   ├── middleware/     # Auth & Error handling
│   │   ├── routes/         # API Endpoints (Auth, Products, etc.)
│   │   └── index.js        # Entry point
│   ├── prisma/
│   │   └── schema.prisma   # Database Schema
│   └── tests/              # Jest/Supertest suites
│
├── client/                 # Frontend Application (Vite + React)
│
├── ROADMAP.md              # 2-Month Development Plan
└── Idea.md                 # Project Vision & Inspiration
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### 1. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Initialize Database
npx prisma migrate dev --name init

# Start Development Server
npm run dev
```

The server will start on `http://localhost:5000` (check your .env or index.js).

### 2. Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Start Vite Server
npm run dev
```

### 3. Running Tests

#### Backend Tests (Unit/Integration)
```bash
cd server
npm test
```

#### Frontend Tests (Unit)
```bash
cd client
npm test
```

#### E2E Tests (Playwright)
```bash
# From root
npm run test:e2e
```

### 4. CI/CD and Deployment

#### GitHub Actions
- **Node.js CI**: Automatically runs on push/PR to `main`. It builds and tests both client and server.
- **Deploy to EC2**: Automatically deploys the latest `main` branch to your AWS EC2 instance. Ensure you have `EC2_HOST`, `EC2_USERNAME`, and `EC2_SSH_KEY` set in your GitHub Repository Secrets.

#### Dependabot
- Automated weekly checks for package updates to keep the project secure.

---

## 🗺️ Roadmap

We are following a structured **2-month development plan**.
Please check [ROADMAP.md](./ROADMAP.md) for the detailed timeline and milestones.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
