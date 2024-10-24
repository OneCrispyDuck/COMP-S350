# Deployment Instructions
## Local Development
```bash
# Start development environment
npm run dev

# Run tests
npm run test

# Build production
npm run build
```

## Production Deployment
```bash
# Setup production environment
1. Configure environment variables
   cp .env.example .env.production
   nano .env.production

2. Install PM2 globally
   npm install -g pm2

3. Build application
   npm run build

4. Start with PM2
   pm2 start ecosystem.config.js
```

## Docker Deployment
```bash
# Build Docker image
docker build -t food-app .

# Run container
docker run -p 3000:3000 food-app

# Docker Compose (recommended)
docker-compose up -d
```