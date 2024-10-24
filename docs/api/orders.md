GET /api/orders
    - List user orders
    - Query: {status, date, limit}
    - Returns: [orderList]

POST /api/orders
    - Create new order
    - Body: {items[], address, payment}
    - Returns: {orderId, status}

GET /api/orders/:id
    - Get order details
    - Returns: {orderDetails}

PUT /api/orders/:id
    - Update order status
    - Body: {status, notes}
    - Returns: {updatedOrder}

DELETE /api/orders/:id
    - Cancel order
    - Returns: {status}