# Coupon System Integration Documentation

**Version:** 1.0  
**Last Updated:** [29/10/2024]

---

## Table of Contents

1. [Introduction](#introduction)
2. [System Overview](#system-overview)
3. [Architecture](#architecture)
4. [Implementation Details](#implementation-details)
   - [Backend Setup](#backend-setup)
   - [Frontend Integration](#frontend-integration)
5. [Testing the Coupon System](#testing-the-coupon-system)
6. [Deployment Instructions](#deployment-instructions)
7. [Future Enhancements](#future-enhancements)
8. [Sequence Diagram Generation](#sequence-diagram-generation)
9. [Conclusion](#conclusion)

---

## Introduction

This documentation provides a comprehensive guide to implementing a **Coupon System** for the **Food Ordering and Tracking Application**. It outlines the steps required to integrate the coupon feature into the existing system, ensuring that future developers can understand and extend the functionality as needed.

---

## System Overview

The coupon system allows users to apply discount codes to their orders, enhancing user engagement and promoting sales. The system includes:

- **Coupon Generation and Management**
- **Validation Logic**
- **Integration with the Ordering System**
- **User-specific Usage Tracking**

---

## Architecture

### Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Frontend**: JavaScript (adaptable to existing frameworks like React, Angular, etc.)

### Components

1. **Database Schemas**
   - **Coupon Schema**: Stores coupon details.
   - **UserCoupon Schema**: Tracks individual user coupon usage.

2. **Backend API Endpoints**
   - **Apply Coupon Endpoint**: Validates and applies coupons.
   - **Order Processing Logic**: Updates coupon usage upon order completion.

3. **Frontend Interface**
   - **Coupon Input Field**: Allows users to enter coupon codes.
   - **AJAX Requests**: Communicates with the backend to validate and apply coupons.
   - **Order Summary Update**: Reflects the discount in the order total.

---

## Implementation Details

### Backend Setup

#### 1. Project Initialization

Initialize the Node.js project and install necessary dependencies.

```bash
npm init -y
npm install express mongoose body-parser cors
```

#### 2. Directory Structure

```
project-root/
│
├── models/
│   ├── Coupon.js
│   └── UserCoupon.js
│
├── routes/
│   └── coupons.js
│
├── utils/
│   └── calculateDiscount.js
│
├── server.js
└── package.json
```

#### 3. Database Schemas

##### a. Coupon Schema (`models/Coupon.js`)

```javascript
const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  discountType: { type: String, enum: ['percentage', 'fixed'], required: true },
  discountValue: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  usageLimit: { type: Number },
  usageCount: { type: Number, default: 0 },
  applicableItems: [String], // IDs or categories of applicable items
});

module.exports = mongoose.model('Coupon', CouponSchema);
```

##### b. UserCoupon Schema (`models/UserCoupon.js`)

```javascript
const mongoose = require('mongoose');

const UserCouponSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  couponId: { type: mongoose.Schema.Types.ObjectId, required: true },
  usageCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('UserCoupon', UserCouponSchema);
```

#### 4. Backend API

##### a. Coupon Routes (`routes/coupons.js`)

```javascript
const express = require('express');
const router = express.Router();
const Coupon = require('../models/Coupon');
const UserCoupon = require('../models/UserCoupon');
const calculateDiscount = require('../utils/calculateDiscount');

// Apply Coupon Endpoint
router.post('/apply', async (req, res) => {
  const { couponCode, userId, cartItems } = req.body;

  try {
    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(400).json({ message: 'Invalid coupon code.' });
    }

    if (coupon.expirationDate < new Date()) {
      return res.status(400).json({ message: 'Coupon has expired.' });
    }

    if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
      return res.status(400).json({ message: 'Coupon usage limit reached.' });
    }

    const userCoupon = await UserCoupon.findOne({ userId, couponId: coupon._id });

    if (userCoupon && userCoupon.usageCount >= 1) {
      return res.status(400).json({ message: 'Coupon already used by you.' });
    }

    // Additional applicability checks can be added here

    const discount = calculateDiscount(coupon, cartItems);

    return res.status(200).json({ discount });
  } catch (error) {
    console.error('Error applying coupon:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
```

##### b. Discount Calculation Utility (`utils/calculateDiscount.js`)

```javascript
function calculateDiscount(coupon, cartItems) {
  let totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (coupon.discountType === 'percentage') {
    return (totalAmount * coupon.discountValue) / 100;
  } else if (coupon.discountType === 'fixed') {
    return coupon.discountValue;
  } else {
    return 0;
  }
}

module.exports = calculateDiscount;
```

#### 5. Server Setup (`server.js`)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food-ordering', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const couponsRoute = require('./routes/coupons');
app.use('/api/coupons', couponsRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### 6. Order Processing Logic

Update the order processing function to handle coupon usage.

```javascript
const Coupon = require('./models/Coupon');
const UserCoupon = require('./models/UserCoupon');

async function processOrder(orderDetails) {
  // Existing order processing logic...

  // Update coupon usage
  if (orderDetails.couponCode) {
    try {
      const coupon = await Coupon.findOne({ code: orderDetails.couponCode });
      if (coupon) {
        coupon.usageCount += 1;
        await coupon.save();

        let userCoupon = await UserCoupon.findOne({ userId: orderDetails.userId, couponId: coupon._id });
        if (userCoupon) {
          userCoupon.usageCount += 1;
        } else {
          userCoupon = new UserCoupon({
            userId: orderDetails.userId,
            couponId: coupon._id,
            usageCount: 1,
          });
        }
        await userCoupon.save();
      }
    } catch (error) {
      console.error('Error updating coupon usage:', error);
    }
  }

  // Continue with order confirmation...
}
```

### Frontend Integration

#### 1. Coupon Input Field

Add the coupon input field to the order summary or checkout page.

```html
<!-- order-summary.html -->
<div id="order-summary">
  <!-- Existing order details -->
  <input type="text" id="coupon-code" placeholder="Enter coupon code" />
  <button id="apply-coupon">Apply Coupon</button>
  <div id="discount-message"></div>
  <div>Total: $<span id="order-total">0.00</span></div>
</div>
```

#### 2. Cart Items and Total Amount

Implement functions to retrieve cart items and update the order total.

```javascript
// cart.js
function getCartItems() {
  // Replace with actual cart retrieval logic
  return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function updateOrderTotal() {
  const cartItems = getCartItems();
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  document.getElementById('order-total').innerText = totalAmount.toFixed(2);
}

// Call on page load
updateOrderTotal();
```

#### 3. Applying the Coupon

Handle the coupon application process.

```javascript
// coupon.js
document.getElementById('apply-coupon').addEventListener('click', () => {
  const couponCode = document.getElementById('coupon-code').value.trim();
  const userId = 'USER_ID'; // Replace with actual user ID
  const cartItems = getCartItems();

  fetch('http://localhost:5000/api/coupons/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ couponCode, userId, cartItems })
  })
    .then(response => response.json())
    .then(data => {
      if (data.discount) {
        applyDiscount(data.discount);
        document.getElementById('discount-message').innerText = 'Coupon applied successfully!';
      } else {
        document.getElementById('discount-message').innerText = data.message;
      }
    })
    .catch(error => {
      console.error('Error applying coupon:', error);
      document.getElementById('discount-message').innerText = 'Error applying coupon.';
    });
});
```

#### 4. Updating the Order Total

Implement the `applyDiscount` function.

```javascript
function applyDiscount(discount) {
  const totalElement = document.getElementById('order-total');
  let totalAmount = parseFloat(totalElement.innerText);
  totalAmount -= discount;
  totalElement.innerText = totalAmount.toFixed(2);

  // Store discount for order confirmation
  localStorage.setItem('appliedDiscount', discount);
}
```

#### 5. Order Confirmation

Include the coupon code and discount in the order confirmation.

```javascript
function confirmOrder() {
  const orderDetails = {
    userId: 'USER_ID', // Replace with actual user ID
    cartItems: getCartItems(),
    couponCode: document.getElementById('coupon-code').value.trim(),
    discount: parseFloat(localStorage.getItem('appliedDiscount')) || 0,
    totalAmount: parseFloat(document.getElementById('order-total').innerText),
    // Additional order details...
  };

  fetch('http://localhost:5000/api/orders/confirm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderDetails)
  })
    .then(response => response.json())
    .then(data => {
      // Handle order confirmation
    })
    .catch(error => {
      console.error('Error confirming order:', error);
    });
}
```

---

## Testing the Coupon System

### 1. Inserting Test Coupons

Use MongoDB tools to insert test coupons into the database.

**Example Coupon Document:**

```json
{
  "code": "WELCOME10",
  "discountType": "percentage",
  "discountValue": 10,
  "expirationDate": ISODate("2025-12-31T23:59:59Z"),
  "usageLimit": 100,
  "usageCount": 0,
  "applicableItems": []
}
```

### 2. Test Cases

- **Valid Coupon Application**
  - Apply a valid coupon and ensure the discount is correctly calculated and applied.
- **Expired Coupon**
  - Attempt to apply an expired coupon and verify that an appropriate error message is displayed.
- **Usage Limit Reached**
  - Simulate the coupon reaching its usage limit and test the system's response.
- **Duplicate Coupon Use**
  - Try reusing a coupon that has already been used by the same user.
- **Invalid Coupon Code**
  - Enter a non-existent coupon code and check for the correct error handling.

### 3. Verifying Database Updates

- **Coupon Usage Count**
  - Ensure that the `usageCount` in the `Coupon` collection increments after each valid use.
- **UserCoupon Records**
  - Confirm that the `UserCoupon` collection accurately reflects individual user coupon usage.

---

## Deployment Instructions

### 1. Environment Setup

- **Node.js**: Ensure Node.js is installed on the deployment server.
- **MongoDB**: Set up a MongoDB instance or use a cloud service like MongoDB Atlas.

### 2. Configuration

- Update the MongoDB connection string in `server.js` if necessary.

```javascript
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### 3. Starting the Server

- Install dependencies:

  ```bash
  npm install
  ```

- Start the server:

  ```bash
  node server.js
  ```

### 4. Frontend Integration

- Ensure the frontend code points to the correct backend API endpoints, adjusting the URLs as needed.

---

## Future Enhancements

- **Admin Panel for Coupon Management**
  - Create an interface for administrators to create, modify, and delete coupons.
- **Advanced Applicability Rules**
  - Implement logic to apply coupons to specific items or categories.
- **Coupon Code Generation**
  - Automate the creation of unique coupon codes with customizable rules.
- **Analytics and Reporting**
  - Track coupon usage statistics for business insights.

---