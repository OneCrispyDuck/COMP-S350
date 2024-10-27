# COMP-S350F
Software Engineering: Year 3 CompSci Group Project.

## Food Ordering & Tracking Application

### Overview
Food Ordering and Tracking App:
This is a Software Engineering Project hosted by the Hong Kong Metropolitan Univeristy under the Bachelors of Science for Computer Science and Engineering majors.
The scope of the project is for a team to practice the scope of engineering and it's requriements.
Here the team is tasked with creating a 'Food Ordering & Tracking App', the team will pracice on the following:
- Organisation
- Resource requirments
- User Requirments
- Team & Formatting/Programming etiquettes
- Documentation, testing and attempted deployment

Note: A full working prototype of the product is not a must, but rather this is the learning and practice of the processes of Software engineering.

- The group will develop software following appropriate software engineering process.
- By software engineering process, the report will contain some or all these activities:
a) Software specification/requirement engineering
b) Software design
c) Software implementation
d) Software validation/testing
e) Software evolution 

![Project Logo/Screenshot](https://github.com/OneCrispyDuck/COMP-S350/blob/main/COMP-S350-main/Picture%20material/Logo.jpg)

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features
- Secure user authentication and authorization
- Real-time ordering tracking and status updates
- Restaurant menu management and customization
- Integrated payment processing system
- Restaurant search and filtering
- Order history and favorites management
- Multi-platform support (Web/Mobile)

## Getting Started

### Prerequisites
```bash
# Required software, dependencies, etc.
Node.js v14+
npm v6+
MongoDB v4.4+
Redis v6+
AWS CLI v2+

# Required services
AWS Account
Payment Gateway API Access
Google Maps API Key
```

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/food-ordering-app.git

# Install dependencies
cd food-ordering-app
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Usage
1. User Registration/Login
    - Create account 
    - Complete profile with delivery details
2. Restaurant Access
    - Browse restaurants by location/cuisine
    - View menus, prices, and reviews
    - Filter by categories and preferences
3. Order Processing
    - Add items to cart
    - Customize orders
    - Choose delivery options
    - Process secure payment
4. Order Tracking
    - Real-time status updates
    - Live delivery tracking
    - Order history access

### Configuration
```json
{
  "server": {
    "port": 3000,
    "environment": "development"
  },
  "database": {
    "type": "mongodb",
    "url": "mongodb://localhost:27017/foodapp"
  },
  "aws": {
    "region": "ap-southeast-1",
    "bucket": "food-app-storage"
  }
}
```

### API Documentation

#### Authentication
```
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```
#### Orders
```
GET /api/orders
POST /api/orders
GET /api/orders/:id
PUT /api/orders/:id
```
#### Restaurants
```
GET /api/restaurants
GET /api/restaurants/:id
GET /api/restaurants/:id/menu
```

### Contributing
1.Fork the repository
2.Create feature branch (git checkout -b feature/AmazingFeature)
3.Commit changes (git commit -m 'Add AmazingFeature')
4.Push to branch (git push origin feature/AmazingFeature)
5.Open Pull Request

### License
This project is created as part of the Software Engineering course (COMP-S350F) at Hong Kong Metropolitan University. All rights and usage are governed by the university's academic policies.


## Documentation
Detailed documentation can be found in the `/docs` directory:
- [API Reference](/docs/api/endpoints.md)
- [Authentication](/docs/api/authentication.md)
- [Deployment Guide](/docs/deployment.md)
- [Troubleshooting](/docs/troubleshooting.md)
