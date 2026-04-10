FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY prisma ./prisma

ENV DATABASE_URL="file:./dev.db"

COPY . .
RUN npx prisma generate


EXPOSE 5000

CMD ["npm", "run", "start"]
