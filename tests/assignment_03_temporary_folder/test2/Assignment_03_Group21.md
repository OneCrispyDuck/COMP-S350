# Software Testing Report

## Group Project Unit Testing Documentation

### 1. Project Overview
- **Project**: Food Ordering and Tracking App
- **Component Being Tested**: Store Management System and User Authentication
- **Team Roles in Testing**:
  - Frontend Testing: User interface and form validation
  - Store Logic Testing: Cart functionality and item management
  - Integration Testing: API endpoints and data flow

### 2. Unit Testing Framework
- **Primary Testing Framework**: Jest
- **Justification**: 
  - Built-in DOM manipulation testing through JSDOM
  - Excellent support for JavaScript/React Native components
  - Robust mocking capabilities
  - Simple and readable syntax for test cases
- **Testing Environment**:
  - Node.js environment
  - JSDOM for browser simulation
  - Project structure using standard Jest configuration

### 3. Component Under Test
```javascript
// store.js - Cart Management System
const itemArray = [
    { name: 'Chicken', price: 100, marks: 4.5, intro: 'this is a chicken.', count: 0, itemClass: 'Staple_Food' },
    { name: 'Coke', price: 20, marks: 4.5, intro: 'this is a coke.', count: 0, itemClass: 'Drinks' },
    // ... other items
];

function add_item(itemName, quantity) {
    const item = itemArray.find(item => item.name === itemName);
    if (item) {
        item.count += quantity;
        return item;
    }
    return null;
}

function get_items_in_cart() {
    return itemArray.filter(item => item.count > 0);
}
```

### 4. Test Cases
```javascript
describe('Store functionality', () => {
    beforeEach(() => {
        // Reset state
        itemArray.forEach(item => item.count = 0);
    });

    test('should add an item to the cart', () => {
        const result = add_item('Chicken', 2);
        expect(result).toBeDefined();
        expect(result.count).toBe(2);
    });

    test('should return null if item is not found', () => {
        const result = add_item('NonexistentItem', 1);
        expect(result).toBeNull();
    });
});
```

### Test Cases Documentation

#### Test Case 1: Cart Addition Validation
- **Purpose**: Verify that items can be added to the cart correctly
- **Input**: Item name and quantity
- **Expected Output**: Updated item object with correct count
- **Testing Method**: Unit test with Jest
- **Validation**: Assert count matches added quantity

#### Test Case 2: Form Submission Validation
- **Purpose**: Ensure form validation prevents empty submissions
- **Input**: Empty email and password fields
- **Expected Output**: Alert message "Please input all fields!"
- **Testing Method**: DOM simulation with JSDOM
- **Validation**: Alert mock verification

### 5. Testing Strategy
- Component isolation for unit testing
- State reset before each test
- Edge case coverage (invalid inputs, boundary conditions)
- Mock external dependencies (alerts, API calls)

### 6. Test Results
- Total Tests: Multiple test suites covering store and form functionality
- Pass Rate: 100% for implemented test cases
- Key Validations:
  - Cart management functionality
  - Form validation
  - User interface interactions

### 7. Lessons Learned
- **Challenges**:
  - Managing state between tests
  - Simulating DOM events accurately
- **Solutions**:
  - Implemented beforeEach hooks for state reset
  - Utilized Jest's DOM manipulation utilities
- **Best Practices**:
  - Maintain test isolation
  - Mock external dependencies
  - Clear test descriptions