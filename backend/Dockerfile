# Base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm nodemon

RUN pnpm install

COPY . .

EXPOSE 5000

CMD ["pnpm", "dev"]
