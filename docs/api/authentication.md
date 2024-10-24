POST /api/auth/register
    - Register new user
    - Body: {email, password, name, phone}
    - Returns: {token, userId}

POST /api/auth/login
    - User login
    - Body: {email, password}
    - Returns: {token, userId}

GET /api/auth/profile
    - Get user profile
    - Header: Authorization Bearer {token}
    - Returns: {userDetails}

PUT /api/auth/profile
    - Update profile
    - Header: Authorization Bearer {token}
    - Body: {updateFields}