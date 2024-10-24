# Troubleshooting Guide

## Common Issues

### 1. Database Connection Errors
```bash
# Check MongoDB connection
mongo --eval "db.adminCommand('ping')"

# Verify environment variables
echo $MONGODB_URI

# Solution:
- Ensure MongoDB is running
- Check connection string
- Verify network access
```

### 2. API Response Errors
```bash
# Check server logs
pm2 logs

# Verify API status
curl http://localhost:3000/api/health

# Solution:
- Check error logs
- Verify API endpoints
- Validate request format
```

### 3. Authentication Issues
```bash
# Reset JWT secret
- Update JWT_SECRET in .env
- Restart application

# Clear token cache
redis-cli FLUSHALL

# Solution:
- Check token expiration
- Verify credentials
- Clear browser cache
```

# Extended Configuration
```json
{
  "server": {
    "port": 3000,
    "environment": "development",
    "corsOrigins": ["http://localhost:3000"],
    "rateLimit": {
      "windowMs": 900000,
      "max": 100
    }
  },
  "database": {
    "type": "mongodb",
    "url": "mongodb://localhost:27017/foodapp",
    "options": {
      "useNewUrlParser": true,
      "useUnifiedTopology": true,
      "maxPoolSize": 10
    }
  },
  "cache": {
    "type": "redis",
    "url": "redis://localhost:6379",
    "ttl": 3600
  },
  "security": {
    "jwtSecret": "your-secret-key",
    "jwtExpiration": "24h",
    "bcryptRounds": 10
  },
  "logging": {
    "level": "info",
    "format": "combined"
  }
}
```