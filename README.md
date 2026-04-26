# SparkSpirit Shop

Premium fashion e-commerce built with Next.js + Express, focused on high-end editorial design and production-ready developer workflow.

## Visual Preview

### Hero Landing
Immersive hero with layered campaign imagery and bold serif typography.
![SparkSpirit hero section](docs/images/hero-landing.png)

### Featured Pieces
Three-column showcase designed for premium product scanning.
![SparkSpirit featured pieces section](docs/images/featured-pieces.png)

### Editorial Story
Split-layout narrative section blending brand voice and campaign photography.
![SparkSpirit editorial section](docs/images/editorial-story.png)

### Newsletter + Footer
Minimal subscription module with structured navigation links.
![SparkSpirit newsletter and footer section](docs/images/newsletter-footer.png)

## Tech Stack

### Backend
- Node.js, Express
- Prisma ORM
- SQLite
- JWT auth
- Zod validation

### Frontend
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Zustand

### DevOps and Quality
- Docker, Docker Compose
- GitHub Actions CI
- Jest + Supertest
- Vitest
- Playwright

## Core Features
- User registration/login
- Product and category CRUD
- Order flow support
- Responsive storefront UI
- Dockerized deployment
- Automated lint + test workflows

## Project Structure

```text
Devops/
├── client/                    # Next.js frontend
│   ├── src/app/               # Routes/pages
│   ├── src/components/        # Reusable UI
│   ├── src/store/             # Zustand state
│   └── Dockerfile
├── server/                    # Express backend
│   ├── src/controllers/       # Business logic
│   ├── src/routes/            # API routes
│   ├── src/middleware/        # Auth/validation/errors
│   ├── prisma/                # Schema + migrations
│   └── Dockerfile
├── docker-compose.yml
├── docker-compose.prod.yml
├── QUICKSTART.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Docker + Docker Compose (optional)

### Local Development

1. Clone project:
```bash
git clone https://github.com/Subham-KRLX/Devops.git
cd Devops
```

2. Install dependencies:
```bash
cd server && npm install
cd ../client && npm install
```

3. Start backend:
```bash
cd ../server
PORT=5001 npm run dev
```

4. Start frontend (new terminal):
```bash
cd client
npm run dev
```

5. Open app:
```text
http://localhost:3000
```

### Docker Development

```bash
docker-compose up --build
```

```text
Frontend: http://localhost:3001
Backend:  http://localhost:5001
```

```bash
docker-compose down
```

## Testing

### Backend
```bash
cd server
npm test
```

### Frontend
```bash
cd client
npm test
```

### E2E
```bash
npm run test:e2e
# or
npx playwright test
npx playwright test --headed
npx playwright test --ui
npx playwright show-report
```

## API Overview

Base URL:
```text
http://localhost:5001/api
```

### Auth
- POST /auth/register
- POST /auth/login

### Products
- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id

### Categories
- GET /categories
- GET /categories/:id
- POST /categories

### Orders
- GET /orders
- GET /orders/:id
- POST /orders

## Environment Variables

### Backend (`server/.env`)
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
PORT=5001
NODE_ENV=development
```

### Frontend (`client/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

## Prisma Database

```bash
cd server
npx prisma migrate dev --name init
npx prisma studio
npx prisma migrate reset
```

## Deployment (Docker)

```bash
docker build -t sparkspirit-server ./server
docker build -t sparkspirit-client ./client

docker tag sparkspirit-server your-registry/sparkspirit-server:1.0
docker push your-registry/sparkspirit-server:1.0

docker run -p 5001:5000 your-registry/sparkspirit-server:1.0
```

## Troubleshooting

```bash
# Free busy ports
lsof -i :5001 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
lsof -i :3000 | grep -v COMMAND | awk '{print $2}' | xargs kill -9

# Clear Next.js cache
rm -rf client/.next

# Reset local DB
cd server
npx prisma migrate reset
```

## Documentation
- QUICKSTART.md
- docs/

## Contributing
1. Fork the repository
2. Create branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "feat: your change"`
4. Push: `git push origin feature/your-feature`
5. Open a pull request

## License
MIT
