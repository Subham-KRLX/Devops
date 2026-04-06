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
- **Next.js 16**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS for minimalist design
- **TypeScript**: Type-safe development

### **DevOps**
- **Docker**: Containerization for consistent environments
- **Docker Compose**: Multi-container orchestration
- **GitHub Actions**: CI/CD pipeline with linting, testing, and deployment
- **Playwright**: End-to-End testing automation

---

## 🚀 Key Features

- **Authentication**: Secure user registration and login with JWT
- **Product Management**: Full CRUD operations for Products and Categories
- **Minimalist Design**: Bold typography and high-quality imagery
- **Multiple Pages**: Home, Shop, Collections, Editorial, Product Details
- **Shopping Cart**: Add to cart, view cart, checkout flow
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Database**: Relational data modeling with Prisma (Users, Products, Categories, Orders)
- **CI/CD**: Automated GitHub Actions for linting, testing, and building
- **Docker Support**: Run locally or with Docker/Docker Compose
- **Testing**: Unit (Jest), Integration (Supertest), and E2E (Playwright) tests

---

## 📂 Project Structure

```
Devops/
├── server/                    # Backend API
│   ├── src/
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API Endpoints
│   │   ├── middleware/        # Auth & Error handling
│   │   ├── validation/        # Zod schemas
│   │   └── index.js           # Entry point
│   ├── prisma/
│   │   ├── schema.prisma      # Database Schema
│   │   └── migrations/        # Database migrations
│   ├── Dockerfile             # Container image
│   └── tests/                 # Jest/Supertest tests
│
├── client/                    # Frontend Application (Next.js 16)
│   ├── src/
│   │   ├── app/               # Next.js App Router pages
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── shop/          # Shop page
│   │   │   ├── collections/   # Collections page
│   │   │   ├── editorial/     # Editorial page
│   │   │   └── products/      # Product details
│   │   ├── components/        # React components
│   │   ├── hooks/             # Custom hooks
│   │   ├── store/             # Zustand state management
│   │   └── lib/               # Utilities & API
│   ├── Dockerfile             # Container image
│   └── e2e/                   # Playwright tests
│
├── docker-compose.yml         # Multi-container orchestration
├── .github/workflows/         # GitHub Actions CI/CD
├── QUICKSTART.md              # Quick start guide
└── README.md                  # This file
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v20+)
- npm or yarn
- Docker & Docker Compose (optional, for containerized setup)

### Option 1: Local Development (Recommended for Development)

#### 1. Clone Repository
```bash
git clone https://github.com/Subham-KRLX/Devops.git
cd Devops
```

#### 2. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

#### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
PORT=5001 npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

**Browser:**
```
http://localhost:3000
```

---

### Option 2: Docker (Production-like Environment)

#### Start Services
```bash
docker-compose up --build
```

#### Access Application
```
Frontend: http://localhost:3001
Backend:  http://localhost:5001
```

#### Stop Services
```bash
docker-compose down
```

---

## 🧪 Testing

### Unit & Integration Tests (Backend)
```bash
cd server
npm test
```

### E2E Tests (Playwright)
```bash
npx playwright test                    # Run all tests
npx playwright test --headed           # See browser
npx playwright test --ui               # Interactive UI
npx playwright show-report             # View HTML report
```

---

## 📝 Code Quality

### Format Code (Prettier)
```bash
npm run format              # Auto-format
npm run format:check        # Check formatting
```

### Lint Code (ESLint)
```bash
npm run lint               # Check quality
npm run lint:fix           # Auto-fix errors
```

---

## 📚 API Endpoints

### Base URL
```
http://localhost:5001/api
```

### Products
- `GET /products` - List all products
- `GET /products/:id` - Get product details
- `POST /products` - Create product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Categories
- `GET /categories` - List all categories
- `POST /categories` - Create category
- `GET /categories/:id` - Get category

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Orders
- `GET /orders` - List user orders
- `POST /orders` - Create order
- `GET /orders/:id` - Get order details

---

## 🗄️ Database

### Initialize Database
```bash
cd server
npx prisma migrate dev --name init
```

### View Database (GUI)
```bash
cd server
npx prisma studio
```

### Reset Database
```bash
cd server
npx prisma migrate reset
```

---

## 📦 Deployment

### Using Docker
```bash
# Build images
docker build -t sparkspirit-server ./server
docker build -t sparkspirit-client ./client

# Push to registry
docker tag sparkspirit-server your-registry/sparkspirit-server:1.0
docker push your-registry/sparkspirit-server:1.0

# Pull and run on server
docker pull your-registry/sparkspirit-server:1.0
docker run -p 5001:5000 your-registry/sparkspirit-server:1.0
```

---

## 🔧 Environment Variables

### Backend (.env)
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
PORT=5001
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

---

## 📖 Documentation

- [QUICKSTART.md](QUICKSTART.md) - Complete quick start guide
- [Architecture Documentation](./docs/EXPLANATION.md) - System design
- [Database Schema](./docs/DATABASE_EXPLAINED.md) - Data models
- [Workflows](./docs/WORKFLOWS_EXPLAINED.md) - CI/CD pipelines

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5001
lsof -i :5001 | grep -v COMMAND | awk '{print $2}' | xargs kill -9

# Port 3000
lsof -i :3000 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
```

### Next.js Lock File Error
```bash
rm -rf client/.next
```

### Database Connection Issues
```bash
cd server
npx prisma migrate reset
```

---

## 📞 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Happy coding! 🚀**

#### E2E Tests (Playwright)
```bash
# From root
npm run test:e2e
```

### 4. CI/CD
- **Node.js CI**: The project is configured with GitHub Actions to automatically run lint checks and the full suite of backend (Jest), frontend (Vitest), and E2E (Playwright) tests on every push or Pull Request to the `main` branch. This ensures that the codebase remains high-quality and free of regressions.

#### Dependabot
- Automated weekly checks for package updates are enabled to keep the project secure and up-to-date with the latest security patches and feature improvements.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
