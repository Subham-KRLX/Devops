# SparkSpirit Client

Next.js storefront for SparkSpirit Shop.

## Live URL

- Production frontend: [http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com](http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com)
- Production API health: [http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com/api/health](http://sparkspirit-alb-1404552313.us-east-1.elb.amazonaws.com/api/health)

The production client runs in Amazon ECS/Fargate behind the project Application Load Balancer and Nginx container. It is built with `NEXT_PUBLIC_API_URL=/api` so browser API calls use the same hosted domain.

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

For local backend access, create `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

## Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
npm test
```
