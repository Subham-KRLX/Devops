# SparkSpirit Shop

Premium fashion e-commerce built with Next.js, Express, Prisma, and a production DevOps workflow on AWS ECS/Fargate.

## Live Deployment

- Frontend: [http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com](http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com)
- Backend health check: [http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com/api/health](http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com/api/health)
- GitHub repository: [https://github.com/Subham-KRLX/Devops](https://github.com/Subham-KRLX/Devops)
- CI/CD workflow: `.github/workflows/deploy-ecs.yml`

The production deployment runs on Amazon ECS with Fargate. Images are built by GitHub Actions, tagged with both `latest` and the commit SHA, pushed to Amazon ECR, and deployed to the ECS service.

## AWS Deployment Summary

| Area | Resource |
| --- | --- |
| Region | `us-east-1` |
| ECS cluster | `sparkspirit-cluster` |
| ECS service | `sparkspirit-service` |
| ECS task definition | `sparkspirit-task` |
| Launch type | `FARGATE` |
| Load balancer | `sparkspirit-alb` |
| Target group | `sparkspirit-tg` |
| ECR repositories | `sparkspirit-server`, `sparkspirit-client`, `sparkspirit-nginx` |
| CloudWatch log group | `/ecs/sparkspirit` |

## DevOps Rubric Coverage

- Amazon ECR stores Docker images for the backend, frontend, and Nginx reverse proxy.
- GitHub Actions authenticates to AWS using repository secrets.
- The deployment workflow builds Docker images, tags them with `latest` and `${{ github.sha }}`, and pushes them to ECR.
- ECS runs the application with a Fargate task definition linked to the ECR images.
- The ECS service maintains one running task behind an internet-facing Application Load Balancer.
- The task definition includes CloudWatch logging and container health checks.
- A push to `main` runs the end-to-end GitHub Actions -> ECR -> ECS deployment pipeline.

## Tech Stack

### Backend
- Node.js, Express
- Prisma ORM
- SQLite
- JWT auth
- Zod validation

### Frontend
- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Zustand

### DevOps and Quality
- Docker and Docker Compose
- Amazon ECR
- Amazon ECS with Fargate
- CloudWatch logs
- GitHub Actions CI/CD
- Jest + Supertest
- Vitest
- Playwright

## Core Features

- User registration and login
- Product and category CRUD
- Order flow support
- Responsive storefront UI
- Dockerized full-stack runtime
- Automated lint, test, build, and deployment workflows

## Project Structure

```text
Devops/
├── client/                    # Next.js frontend
│   ├── src/app/               # App Router pages
│   ├── src/components/        # Reusable UI
│   ├── src/store/             # Zustand state
│   └── Dockerfile
├── server/                    # Express backend
│   ├── src/controllers/       # Business logic
│   ├── src/routes/            # API routes
│   ├── src/middleware/        # Auth, validation, errors
│   ├── prisma/                # Schema and migrations
│   └── Dockerfile
├── nginx/                     # ECS reverse proxy image
├── .github/workflows/         # CI and ECS deployment workflows
├── docker-compose.yml         # Local Docker development
├── docker-compose.prod.yml    # Single-host Docker Compose runtime
├── ecs-task-definition.json   # ECS task definition template
├── deploy.sh                  # ECS deployment status helper
└── README.md
```

## Local Development

### Prerequisites

- Node.js 20+
- npm
- Docker and Docker Compose

### Run Without Docker

```bash
git clone https://github.com/Subham-KRLX/Devops.git
cd Devops

cd server
npm install
PORT=5001 npm run dev
```

In a second terminal:

```bash
cd client
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

### Run With Docker

```bash
docker-compose up --build
```

Local URLs:

```text
Frontend: http://localhost:3001
Backend:  http://localhost:5001
```

Stop containers:

```bash
docker-compose down
```

## API Overview

Production base URL:

```text
http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com/api
```

Local base URL:

```text
http://localhost:5001/api
```

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Products
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

### Categories
- `GET /categories`
- `GET /categories/:id`
- `POST /categories`

### Orders
- `GET /orders`
- `GET /orders/:id`
- `POST /orders`

## Environment Variables

Backend local environment, `server/.env`:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
PORT=5001
NODE_ENV=development
```

Frontend local environment, `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

For ECS, the frontend is built with:

```env
NEXT_PUBLIC_API_URL=/api
```

That lets the browser call the API through the same ECS-hosted Nginx endpoint.

## CI/CD Deployment

The ECS deployment workflow is in `.github/workflows/deploy-ecs.yml`.

Required GitHub Actions secrets:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SESSION_TOKEN
AWS_ACCOUNT_ID
```

Deployment flow:

1. Push to `main`.
2. GitHub Actions logs in to Amazon ECR.
3. The workflow builds backend, frontend, and Nginx Docker images.
4. Images are tagged with `latest` and the commit SHA.
5. Images are pushed to ECR.
6. The ECS task definition is rendered with the new image tags.
7. The ECS service is updated and waits for service stability.

Because this project is deployed from an AWS lab account, `AWS_SESSION_TOKEN` may expire and need to be refreshed in GitHub repository secrets.

## Deployment Status Helper

Use this script to print the current ECS public URL and health status:

```bash
./deploy.sh
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

### End-to-End

```bash
npm run test:e2e
```

## Prisma Database

```bash
cd server
npx prisma migrate dev --name init
npx prisma studio
npx prisma migrate reset
```

## Troubleshooting

Free busy local ports:

```bash
lsof -i :5001 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
lsof -i :3000 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
```

Clear Next.js cache:

```bash
rm -rf client/.next
```

Reset local database:

```bash
cd server
npx prisma migrate reset
```

## License

MIT
