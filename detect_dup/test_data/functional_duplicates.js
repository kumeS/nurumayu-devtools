// ===========================================
// FUNCTIONAL DUPLICATES TEST DATA (10 patterns)
// ===========================================

// DUPLICATE_GROUP: func_001
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: easy
// Function declaration duplication
function addNumbers1(a, b) {
  return a + b;
}

function sumTwoNumbers(a, b) {
  return a + b;
}

// DUPLICATE_GROUP: func_002
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: easy
// Arrow function duplication
const multiply1 = (x, y) => x * y;
const multiplyValues = (x, y) => x * y;

// DUPLICATE_GROUP: func_003
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Method duplication in classes
class Calculator1 {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
}

class MathUtils {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
}

// DUPLICATE_GROUP: func_004
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Callback function patterns
function processArray1(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

function transformList(list, transform) {
  const output = [];
  for (let i = 0; i < list.length; i++) {
    output.push(transform(list[i], i));
  }
  return output;
}

// DUPLICATE_GROUP: func_005
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Higher-order function duplication
function createCounter1() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

function makeCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

// DUPLICATE_GROUP: func_006
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Event handler function duplication
function handleButtonClick1(event) {
  event.preventDefault();
  const button = event.target;
  button.disabled = true;
  console.log('Button clicked:', button.id);
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
}

function onButtonPress(event) {
  event.preventDefault();
  const btn = event.target;
  btn.disabled = true;
  console.log('Button clicked:', btn.id);
  setTimeout(() => {
    btn.disabled = false;
  }, 1000);
}

// DUPLICATE_GROUP: func_007
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: hard
// Complex function with multiple responsibilities
function validateAndSaveUser1(userData) {
  // Validation
  if (!userData.email || !userData.email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (!userData.password || userData.password.length < 8) {
    throw new Error('Password too short');
  }
  
  // Processing
  const processedUser = {
    ...userData,
    email: userData.email.toLowerCase(),
    createdAt: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9)
  };
  
  // Save
  localStorage.setItem(`user_${processedUser.id}`, JSON.stringify(processedUser));
  return processedUser;
}

function createAndStoreUser(userInfo) {
  // Validation
  if (!userInfo.email || !userInfo.email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (!userInfo.password || userInfo.password.length < 8) {
    throw new Error('Password too short');
  }
  
  // Processing
  const newUser = {
    ...userInfo,
    email: userInfo.email.toLowerCase(),
    createdAt: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9)
  };
  
  // Save
  localStorage.setItem(`user_${newUser.id}`, JSON.stringify(newUser));
  return newUser;
}

// DUPLICATE_GROUP: func_008
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Async function duplication
async function fetchUserProfile1(userId) {
  try {
    const response = await fetch(`/api/users/${userId}/profile`);
    const profile = await response.json();
    return {
      success: true,
      data: profile
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function getUserProfileData(id) {
  try {
    const response = await fetch(`/api/users/${id}/profile`);
    const userData = await response.json();
    return {
      success: true,
      data: userData
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// DUPLICATE_GROUP: func_009
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
// Recursive function duplication
function factorial1(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial1(n - 1);
}

function calculateFactorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

// DUPLICATE_GROUP: func_010
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: hard
// Complex utility function with error handling
function safeJsonParse1(jsonString, defaultValue = null) {
  try {
    if (typeof jsonString !== 'string') {
      console.warn('Input is not a string');
      return defaultValue;
    }
    
    if (jsonString.trim() === '') {
      console.warn('Empty string provided');
      return defaultValue;
    }
    
    const parsed = JSON.parse(jsonString);
    
    if (parsed === null || parsed === undefined) {
      console.warn('Parsed value is null or undefined');
      return defaultValue;
    }
    
    return parsed;
  } catch (error) {
    console.error('JSON parsing failed:', error.message);
    return defaultValue;
  }
}

function parseJsonSafely(str, fallback = null) {
  try {
    if (typeof str !== 'string') {
      console.warn('Input is not a string');
      return fallback;
    }
    
    if (str.trim() === '') {
      console.warn('Empty string provided');
      return fallback;
    }
    
    const result = JSON.parse(str);
    
    if (result === null || result === undefined) {
      console.warn('Parsed value is null or undefined');
      return fallback;
    }
    
    return result;
  } catch (error) {
    console.error('JSON parsing failed:', error.message);
    return fallback;
  }
}

// Additional arrow function variations for testing
// DUPLICATE_GROUP: func_002
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: easy
const product = (a, b) => a * b;

// DUPLICATE_GROUP: func_005
// EXPECTED_DETECTION: true  
// CATEGORY: FUNCTIONAL
// DIFFICULTY: medium
const buildCounter = () => {
  let value = 0;
  return () => {
    value++;
    return value;
  };
};

// Function expression variants
// DUPLICATE_GROUP: func_001
// EXPECTED_DETECTION: true
// CATEGORY: FUNCTIONAL
// DIFFICULTY: easy
const sum = function(x, y) {
  return x + y;
}; 