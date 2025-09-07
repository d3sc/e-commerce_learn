FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 5000

# Jalankan dev server (pakai nodemon atau langsung node)
CMD ["pnpm", "dev"]
