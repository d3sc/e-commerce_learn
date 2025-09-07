FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install

# Copy rest of the source code
COPY . .

# Expose port
EXPOSE 5173

# Start React dev server (Vite)
CMD ["pnpm", "dev"]
