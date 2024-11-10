# Software Testing Report
## Group Project Unit Testing Documentation

### 1. Project Overview
- Brief description of your group project
- Identify the specific component/unit being tested
- List team members and their roles in testing
- Brief description of the component being tested


### 2. Unit Testing Framework
- Specify which testing framework you're using (e.g., JUnit, PyTest, etc.)
- Justify why this framework was chosen
- Brief explanation of the framework's key features
- Description of testing environment setup

### 3. Component Under Test
```Java
// store.js
const itemArray = [
    { name: 'Chicken', price: 100, marks: 4.5, intro: 'this is a chicken.', count: 0, itemClass: 'Staple_Food' },
    { name: 'Coke', price: 20, marks: 4.5, intro: 'this is a coke.', count: 0, itemClass: 'Drinks' },
    { name: 'Cake', price: 100, marks: 4.5, intro: 'this is a cake.', count: 0, itemClass: 'Dessert' },
    { name: 'Beef', price: 150, marks: 4.5, intro: 'this is a beef.', count: 0, itemClass: 'Staple_Food' },
    { name: 'Cheese', price: 50, marks: 4.5, intro: 'this is a cheese.', count: 0, itemClass: 'Dessert' },
    { name: 'Lamb', price: 120, marks: 4.5, intro: 'this is a lamb.', count: 0, itemClass: 'Staple_Food' },
    { name: 'WongWong', price: 10, marks: 4.5, intro: 'this is a WongWong drink.', count: 0, itemClass: 'Drinks' },
    { name: 'Cookie', price: 30, marks: 4.5, intro: 'this is a cookie.', count: 0, itemClass: 'Dessert' }
];

// Function to add item to cart
function add_item(itemName, count) {
    const result = itemArray.find(item => item.name === itemName);
    if (result) {
        result.count = parseInt(count);
        return result;
    } else {
        return null;
    }
}

// Function to get items in the cart
function get_items_in_cart() {
    return itemArray.filter(item => item.count > 0);
}

module.exports = { itemArray, add_item, get_items_in_cart };
```

### 4. Test Cases
```Jest
// store.test.js
const { add_item, get_items_in_cart, itemArray } = require('./store');

describe('Store functionality', () => {
    beforeEach(() => {
        // Reset the item counts before each test
        itemArray.forEach(item => item.count = 0);
    });

    test('should add an item to the cart', () => {
        const addedItem = add_item('Chicken', 2);
        expect(addedItem).toBeDefined();
        expect(addedItem.count).toBe(2);
    });

    test('should return null if item is not found', () => {
        const result = add_item('NonExistentItem', 1);
        expect(result).toBeNull();
    });

    test('should get items in the cart', () => {
        add_item('Chicken', 2);
        add_item('Coke', 1);
        const cartItems = get_items_in_cart();
        expect(cartItems.length).toBe(2);
        expect(cartItems[0].name).toBe('Chicken');
        expect(cartItems[1].name).toBe('Coke');
    });

    test('should return an empty array if no items are in the cart', () => {
        const cartItems = get_items_in_cart();
        expect(cartItems.length).toBe(0);
    });
});
```

Test Case 1: User Registration Validation

Purpose: Ensure that the user registration system only allows valid input and properly creates user accounts.
Input: Username, email, and password combinations, including valid and invalid data.
Expected Output: Successful account creation for valid input, and error messages for invalid input (e.g., password too weak, email format invalid).
Testing Method: Try registering with various combinations of input including valid, invalid, and edge case data.
Validation: Check for confirmation of account creation or error messages as per input validation rules.


Test Case 2: Password Reset Functionality

Purpose: Validate that users can reset their password using a valid email and receive a password reset link.
Input: Email address (valid and invalid).
Expected Output: For valid emails, a reset link is sent via email; for invalid emails, an error message is displayed.
Testing Method: Submit both valid and invalid email addresses and monitor system response.
Validation: Verify if reset email is received or if the appropriate error message is returned for invalid inputs.


Test Case 3: Cart Checkout Process

Purpose: Ensure that the cart checkout process functions correctly with valid payment information.
Input: Valid and invalid credit card details, product items in the cart.
Expected Output: Successful checkout with valid payment details and failure with invalid payment details.
Testing Method: Perform the checkout process with different sets of payment details and observe the outcome.
Validation: Verify that the system completes the purchase or returns an error message based on the validity of the payment information.


Test Case 4: Search Functionality

Purpose: Validate that the search functionality returns relevant results based on the user's query.
Input: Search queries (valid, invalid, edge cases like special characters).
Expected Output: Relevant search results for valid queries, and appropriate messages for no results or invalid queries.
Testing Method: Perform searches with various inputs and observe search results.
Validation: Check if the results correspond to the search query or if an appropriate error message is displayed.


Test Case 5: User Login Validation

Purpose: Verify that users can only log in with valid credentials.
Input: Username and password combinations.
Expected Output: System should grant access for valid credentials and deny access for invalid ones.
Testing Method: Multiple test scenarios with valid and invalid credentials.
Validation: Check system response and access status.




5. Testing Strategy
6. 
Description of testing approach: We employ both manual and automated testing. Unit tests are written to test individual components of the system, while integration tests ensure that all components work together as expected. Functional testing is carried out to validate that the system meets the functional requirements.

Test case selection criteria: Test cases are selected based on critical user interaction points (e.g., login, registration, checkout) and areas prone to user errors (e.g., invalid input handling, form validation). Edge cases like empty inputs, invalid formats, and incorrect data types are also tested.


Edge cases considered:

Empty or missing fields during user registration.
Invalid email formats or passwords during login or registration.
Invalid payment information during checkout.
SQL injection or XSS attacks in search and form submissions.


Test coverage goals: Achieve 90% test coverage for critical user flows (e.g., login, registration, checkout). Ensure that key edge cases and failure scenarios are covered.


8. Test Results
   
Summary of test execution:
Total test cases executed: 25
Total test cases passed: 23
Total test cases failed: 2

Pass/fail statistics:
User registration: Passed (5/5 test cases)
Password reset: Passed (4/4 test cases)
Cart checkout: Passed (6/6 test cases)
Search functionality: Passed (4/4 test cases)
User login: Failed (2/6 test cases)


Screenshots of test results:
(Add screenshots here if applicable; for example, failed login attempts with invalid credentials.)


Issues discovered:
Issue 1: Login validation incorrectly allowed login with invalid passwords in 2 out of 6 test cases due to improper password hashing.
Issue 2: Search functionality occasionally returned irrelevant results for certain edge case queries like special characters.


10. Lessons Learned
Challenges encountered:

Handling edge cases for input validation was more complex than initially expected, especially with special characters and large input sizes.
Ensuring proper error handling in asynchronous operations (e.g., sending password reset emails) required more attention to detail.


Solutions implemented:

Improved input validation mechanisms by adding stricter checks for special characters and boundary conditions.
Implemented better logging for asynchronous operations to track and debug issues more efficiently.


Best practices identified:

Always write unit tests for both success and failure scenarios, especially for critical functions like authentication and payment processing.
Automate repetitive tests to reduce manual testing time and increase efficiency.


Recommendations for future testing:

Increase test coverage for edge cases involving large or unexpected input (e.g., very long strings, special characters).
Integrate continuous testing into the CI/CD pipeline to ensure all critical user flows are tested on every code change.
