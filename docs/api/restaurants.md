GET /api/restaurants
    - List restaurants
    - Query: {location, cuisine, rating}
    - Returns: [restaurantList]

GET /api/restaurants/:id
    - Get restaurant details
    - Returns: {restaurantDetails}

GET /api/restaurants/:id/menu
    - Get restaurant menu
    - Query: {category}
    - Returns: {menuItems[]}

POST /api/restaurants/:id/reviews
    - Add restaurant review
    - Body: {rating, comment}
    - Returns: {reviewId}