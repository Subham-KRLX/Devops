FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the requested port
EXPOSE 5173

# Next.js 15+ requires --hostname 0.0.0.0 to be reachable from the host
# We also ensure it runs on port 5173 as requested
CMD ["npm", "run", "dev", "--", "-p", "5173", "--hostname", "0.0.0.0"]
