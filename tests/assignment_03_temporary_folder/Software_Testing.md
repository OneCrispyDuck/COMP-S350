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
```python
# Example of the code being tested
class Calculator:
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b
```

### 4. Test Cases
```python
# Example test cases
import pytest

class TestCalculator:
    def test_add_positive_numbers(self):
        calc = Calculator()
        assert calc.add(3, 5) == 8
    
    def test_subtract_positive_numbers(self):
        calc = Calculator()
        assert calc.subtract(5, 3) == 2
```

### Test Cases Documentation
Test Case 1: [Feature/Function Name]
- Purpose: What this test validates
- Input: Description of test input
- Expected Output: What should happen
- Testing Method: How the test is performed
- Validation: How we verify the result

Example:
```bash
Test Case: User Login Validation
- Purpose: Verify that users can only log in with valid credentials
- Input: Username and password combinations
- Expected Output: System should grant access for valid credentials and deny for invalid ones
- Testing Method: Multiple test scenarios with valid and invalid credentials
- Validation: Check system response and access status
```

### 5. Testing Strategy
- Description of testing approach
- Test case selection criteria
- Edge cases considered
- Test coverage goals

### 6. Test Results
- Summary of test execution
- Pass/fail statistics
- Screenshots of test results (if applicable)
- Issues discovered

### 7. Lessons Learned
- Challenges encountered
- Solutions implemented
- Best practices identified
- Recommendations for future testing


### Other remarks:
- "When preparing the manual/guideline for unit testing, use your group project as an example. Basically, select a unit from your group project to demo the unit testing"
- "There is no instruction/requirement to send video link."
- "Use Unit Testing framework in  any programming language."
